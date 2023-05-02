var puenteGeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Puente Colgante Ingeniero Candiotti",
            audio_url: "https://github.com/selevari/MapaSonoroSantaFe/blob/main/RegistrosSonorosSantaFe/Puente.mp3"
        },
        "geometry": {
          "coordinates": [
            -60.682815443829256,
            -31.639689377001957
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(puenteGeoJSON, {
    onEachFeature: function (feature, layer) {
        var contenidoPopup = 
            "<h2>" + feature.properties.title + "</h2>" +
            "<audio src = " + feature.properties.audio_url + " controls />"
        layer.bindPopup(contenidoPopup)
    }
  }).addTo(mymap)