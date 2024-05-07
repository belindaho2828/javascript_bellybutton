// Build the metadata panel
const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

function buildMetadata(sample) {
  d3.json(url).then((data) => {

    // get the metadata field
   let metadata = data['metadata'];

    // Filter the metadata for the object with the desired sample number
    let sampleData = metadata.filter(samp => samp['id'] === sample)[0];

    // Use d3 to select the panel with id of `#sample-metadata`
    let panel = d3.select('#sample-metadata');

    // Use `.html("") to clear any existing metadata
    panel.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    Object.entries(sampleData).map(function([key, value]) {
      let newRow = panel.append('tr');
      newRow.append('td').text(`${key}: `);
      newRow.append('td').text(value);
});
});
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    let samplesField = data['samples'];

    // Filter the samples for the object with the desired sample number
    let object = samplesField.filter(samp => samp['id'] === sample.toString())[0];

    // Get the otu_ids, otu_labels, and sample_values
    let otuID = object['otu_ids'];
    let otuLabels = object['otu_labels'];
    let sampleValues = object['sample_values'];

    // Build a Bubble Chart
    var trace1 = {
      x: otuID,
      y: sampleValues,
      text: otuLabels,
      mode: 'markers',  
      marker: {
        size: sampleValues,
        color: otuID, 
      }

    };

    var bubbleData = [trace1];

    var layout = {
      title: 'Bacteria Cultures per Sample',
      showlegend: false,
      xaxis: {
        title: {
          text: 'OTU ID'
        }
      },
      yaxis: {
        title: {
          text: 'Number of Bacteria'
        }
      }
    };

    // Render the Bubble Chart
    Plotly.newPlot('bubble', bubbleData, layout);



    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    yticks = []
    text1 = 'OTU '
    for (let i = 0; i < otuID.length; i++) {
      tick = text1.concat(' ', otuID[i]);
      yticks.push(tick);
    };

    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    var topTen = sampleValues.slice(0,10);

//order is ascending because the dataset is already in descending order. adding sort here for extra clarity
    var trace2 = {
      type: 'bar',
      orientation: 'h',
      x: topTen,
      y: yticks,
      text: otuLabels,
      transforms: [{
        type: 'sort',
        target: 'x',
        order: 'ascending'
      }]

    };

    var barData = [trace2];

    var layoutBar = {
      title: 'Top 10 Bacteria Cultures Found',
      showlegend: false,
      xaxis: {
        title: {
          text: 'Number of Bacteria'
        }
      }
    };

    // Render the Bar Chart
    Plotly.newPlot('bar', barData, layoutBar);
  });
}


// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    let names = data['names'];

    // Use d3 to select the dropdown with id of `#selDataset`
    var dropDown = d3.selectAll('#selDataset');

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    for (var j = 0; j < names.length; j++){
      dropDown.append('option').text(names[j]);
    };

    // Get the first sample from the list
    firstName = names[0];

    // Build charts and metadata panel with the first sample
    buildMetadata(parseInt(firstName));
    buildCharts(firstName);
  });
}

// Function for event listener
d3.selectAll('#selDataset').on('change', optionChanged);

function optionChanged(newSample) {

  var selectedSample = d3.selectAll('#selDataset').property('value');
  
  // Build charts and metadata panel each time a new sample is selected
  buildMetadata((parseInt(selectedSample)));
  buildCharts(selectedSample);

}


//Initialize the dashboard
init();
