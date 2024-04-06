import overpass

import json

WRITE = False # Set to true to write results to file

def get_way_coordinates(way_id):
    api = overpass.API()
    #WayQuery = overpass.WayQuery(f'way({way_id});(._;>;);out;')
    response = api.get(f'way({way_id});(._;>;);out;')
    #response = api.get(WayQuery)
    print(way_id, response, "\n")

    coordinates = []
    for element in response['features']:
        # print(element, "\n:")

        if element['geometry']['type'] == 'Point':
          # print(element['geometry']['coordinates'],"\n")
          coordinates.append([element['geometry']['coordinates'][1], element['geometry']['coordinates'][0]])

    return coordinates


def main():
  with open('../../source/places_source.json', "r") as places_file:
    places = json.load(places_file)

    for place_name in places:
      print(f"Processing {place_name}")
      place = places[place_name]

      # Skip non-entries
      if type(place) != dict:
        continue

      # Make list to put points in
      place['nodes'] = []

      if "ways" in place.keys():
        for way in place["ways"]:

          # Download points
          coords = get_way_coordinates(way)

          # Append them to a list
          place['nodes'].append(coords)

      if "areas" in place.keys():
        for area in place["areas"]:

          coords = get_area_coordinates(area)


  # By this point places should all be updated
  if WRITE:
    with open('../../source/places.json', "w") as places_file:
      json.dump(places,places_file, indent=2)

if __name__ == "__main__":
    main()
