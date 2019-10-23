// from data.js
var tableData = data;

var text = d3.select("#datetime");
var tbody = d3.select("#ufo-table tbody");
var city = d3.select("#city");
var state = d3.select("#state");
var country = d3.select("#country");
var dropdown = d3.select(".mdb-select");
var button = d3.select("#filter-btn");

function handleButtonClick(event) {
    // grab the value of the input field
    var ufoData = data
    var inputText = text.property("value");
    tbody.html("");
    console.log(inputText);

    if (inputText !=="") {
        ufoData = ufoData.filter(ufo_sighting => ufo_sighting.datetime === inputText)
    }

    if (dropdown.property("value") !=="") {
        ufoData = ufoData.filter(ufo_sighting => ufo_sighting.shape === dropdown.property("value"))
    }

    if (state.property("value") !=="") {
        ufoData = ufoData.filter(ufo_sighting => ufo_sighting.state === state.property("value"))
    }

    if (city.property("value") !=="") {
        ufoData = ufoData.filter(ufo_sighting => ufo_sighting.city === city.property("value"))
    }

    if (country.property("value") !=="") {
        ufoData = ufoData.filter(ufo_sighting => ufo_sighting.country === country.property("value"))
    }

    console.log(ufoData);

    ufoData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    
  }
  
  button.on("click", handleButtonClick);  