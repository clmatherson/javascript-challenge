// from data.js
var tableData = data;

// Use d3 to select table body 
var tbody = d3.select("tbody");


// function to create table 
function buildTable(datatbl) {
    tbody.html("");
    datatbl.forEach((datarow) => {
    // console.log(datatbl);
    var row = tbody.append("tr");

    Object.entries(datarow).forEach(([key, value]) => {
        // console.log(key, value);
        var cell = row.append('td');
        cell.text(value)
    });
});
}

// Render initional table
buildTable(tableData);

// Fution used to filter input
function infoEntry() {
    
    d3.event.preventDefault();
    
    tbody.html("");
    
    // Assign inputs to variables 
    var inputElementdate = d3.select("#datetime").property("value");

// If statement for Date Inputs 
    if(inputElementdate !=="") {
        var filteredUFOdate = tableData.filter(ufodate => ufodate.datetime === inputElementdate)
        if (filteredUFOdate.length !== 0) {d3.select('#date', 'date').text("Enter a Date").style('color', 'white')}
            else {d3.select('#date').text("Invalid Date!!").style('color', 'orange')}}

        else {
            var filteredUFOdate = tableData
            d3.select('#date').text("Enter a Date").style('color', 'white')}

    buildTable(filteredUFOdate)
}


var tablebtn = d3.select("#filter-btn");
var tablebod = d3.select('body');

function stopit() {
    d3.event.preventDefault;
}

tablebtn.on("click", infoEntry);
tablebtn.on("input", stopit);