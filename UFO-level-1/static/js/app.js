// from data.js
var tableData = data;

// YOUR CODE HERE!
var text = d3.select("#datetime");
var tbody = d3.select("#ufo-table tbody");

function handleChange(event) {
    // grab the value of the input field
    var inputText = d3.event.target.value;
    tbody.html("");

    data = data.filter(ufo_sighting => ufo_sighting.datetime === inputText);

    console.log(data);


    data.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    
  }
  
  text.on("change", handleChange);  