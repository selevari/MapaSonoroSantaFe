var rosaGeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Museo Rosa Galisteo",
            audio_url: "https://github.com/selevari/MapaSonoroSantaFe/blob/main/RegistrosSonorosSantaFe/Museo%20Rosa.mp3"
        },
        "geometry": {
          "coordinates": [
            -60.71487980070711,
            -31.65678061965339
          ],
          "type": "Point"
        }
      }
    ]
  }

L.geoJSON(rosaGeoJSON, {
    onEachFeature: function (feature, layer) {
        var contenidoPopup = 
            "<h2>" + feature.properties.title + "</h2>" +
            "<audio src = " + feature.properties.audio_url + " controls />"
        layer.bindPopup(contenidoPopup)
    }
  }).addTo(mymap)