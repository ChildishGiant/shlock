use regex::Regex;
use std::collections::HashSet;
use std::fs::File;
use std::io::{self, BufRead, Write};
use std::path::Path;
extern crate csv;
use std::error::Error;

// "Places" we don't want highlighting
const BLACKLIST: [&str; 4] = ["holmes", "over", "week", "down"];

fn main() -> io::Result<()> {
    // Check for system dictionary in standard locations
    let system_dictionary_path = find_system_dictionary()?;

    // Load the system dictionary into a HashSet for efficient lookup
    let system_dictionary = load_system_dictionary(&system_dictionary_path)?;

    // Load the place name csv
    let places_set = process_csv("./IPN_GB_2023/IPN_GB_2023.csv")
        .map_err(|e| io::Error::new(io::ErrorKind::Other, e))?;

    // Load canon
    let (recognised_places, unrecognised_words) =
        load_canon("canon.txt", &system_dictionary, &places_set)?;

    // Write unrecognised words to a file
    write_hash_to_file("unrecognised_words.txt", &unrecognised_words)?;
    write_hash_to_file("recognised_places.txt", &recognised_places)?;

    Ok(())
}

// Function to process the CSV file and extract values into a HashSet
fn process_csv(file_path: &str) -> Result<HashSet<String>, io::Error> {
    // Open the CSV file
    let file = File::open(file_path)?;
    let mut rdr = csv::Reader::from_reader(file);

    // Create a HashSet to store unique values from the 4th column
    let mut places_set: HashSet<String> = HashSet::new();

    // Iterate over each record in the CSV file
    for result in rdr.records() {
        // Extract the 4th column ("place22nm") from each record
        if let Ok(record) = result {
            if let Some(place) = record.get(3) {
                // Insert the value into the HashSet (lowercase for matching)
                let place_str = place.to_string();
                places_set.insert(place_str.trim().to_lowercase());

            }
        }
    }

    Ok(places_set)
}

fn find_system_dictionary() -> io::Result<String> {
    // Check if either path exists and return the first one found
    let candidate_paths = ["/usr/share/dict/words", "/usr/dict/words"];
    for path in candidate_paths.iter() {
        if Path::new(path).exists() {
            return Ok(path.to_string());
        }
    }
    Err(io::Error::new(
        io::ErrorKind::NotFound,
        "System dictionary not found",
    ))
}

fn load_system_dictionary<P: AsRef<Path>>(file_path: P) -> io::Result<HashSet<String>> {
    let file = File::open(file_path)?;
    let reader = io::BufReader::new(file);

    let mut dictionary = HashSet::new();
    for line in reader.lines() {
        if let Ok(word) = line {
            dictionary.insert(word.trim().to_lowercase());
        }
    }
    Ok(dictionary)
}

fn load_canon<P: AsRef<Path>>(
    file_path: P,
    system_dictionary: &HashSet<String>,
    places_set: &HashSet<String>,
) -> io::Result<(HashSet<String>, HashSet<String>)> {
    let file = File::open(file_path)?;
    let reader = io::BufReader::new(file);

    // Create a regex pattern
    let word_pattern = match Regex::new(r#"\b\w+(?:-\w+)*\b"#) {
        Ok(pattern) => pattern,
        Err(err) => {
            return Err(io::Error::new(
                io::ErrorKind::Other,
                format!("Regex error: {}", err),
            ))
        }
    };

    let mut unrecognised_words = HashSet::new();
    let mut recognised_places = HashSet::new();

    for line in reader.lines() {
        if let Ok(line) = line {
            // Iterate over words in the line
            for word in word_pattern.find_iter(&line) {
                let word = word.as_str().to_lowercase();
                // If it's a known place & not in the blacklisted words
                if places_set.contains(&word) && !BLACKLIST.contains(&word.as_str()) {
                    recognised_places.insert(word.clone() + " - " + &line);
                }

                // If it's not in the dictionary
                if !system_dictionary.contains(&word) {
                    unrecognised_words.insert(word.clone() + " - " + &line);
                }
            }
        }
    }

    Ok((recognised_places, unrecognised_words))
}

fn write_hash_to_file<P: AsRef<Path>>(
    file_path: P,
    unrecognised_words: &HashSet<String>,
) -> io::Result<()> {
    let mut file = File::create(file_path)?;
    for word in unrecognised_words {
        writeln!(file, "{}", word)?;
    }
    Ok(())
}
