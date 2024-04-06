/*
 * Copyright 2024 Allie Law <allie@cloverleaf.app>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import './styles.sass'
import places from './places.json' assert {type: 'json'}
import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet.js'
import './l.ellipse.min'
// import "../nutshell/nutshell.js"

L.Icon.Default.prototype.options.iconUrl = 'assets/sherlock-icon.svg'
L.Icon.Default.prototype.options.shadowUrl = 'assets/marker-shadow.png'

description_template = function (name,description,reference) {
  if (reference) {
    return `<h1 class='place_name'>${name}</h1>
    <p class='description'>${description}</p>
    <p class='reference'>${reference}</p>`
  } else {
    return `<h1>${name}</h1>
    <p class='description'>${description}</p>`
  }
}


function load_map () {

  // Set spawned over 221b
  var map = L.map('map').setView([51.5233879, -0.1582367], 14);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  for (place_name in places) {
    let place = places[place_name]

    if ("lat" in place && "lng" in place) {
      popup = L.marker([place['lat'], place['lng']]).addTo(map)
        .bindPopup(description_template(place_name, place.description, place.reference))
      console.log(`Added popup for ${place_name}`)
      if (place_name == "221b Baker Street") popup.openPopup()
    }

    if ("nodes" in place) {
      for (path in place.nodes) {
        L.polyline(place.nodes[path], {color: `brown`}).addTo(map)
        console.log(`Added way for ${place_name}`)
      }
    }

    if ("ellipse" in place) {
      console.log(...place.ellipse)
      // L.ellipse([51.978772, -0.569593], [50000,10000], 90, {"fill":true, "fillColor":"red"}).addTo(map)
      L.ellipse(...place.ellipse).addTo(map)
        .bindPopup(description_template(place_name, place.description, place.reference))
      console.log(`Added ellipse for ${place_name}`)
    }
  }
}


window.addEventListener('load', function() {

  // Make the theme toggle function
  document.getElementById('theme_toggle').addEventListener('click', function() {
    // For some reason, the way JS lets you access the html node is document.documentElement
    document.documentElement.classList.toggle('dark-theme')
  })

  // Check to see if the user want the dark theme
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDarkMode) document.documentElement.classList.add('dark-theme') // Add .dark-theme to html tag

  // Your code to be executed immediately
  console.log('Page loaded!')

  load_map()



})
