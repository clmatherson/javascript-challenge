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

function refreshpg () {
    location.reload ();
}

// Render initional table
buildTable(tableData);

// Fution used to filter input
function infoEntry() {
    
    d3.event.preventDefault();
    
    tbody.html("");
    
    // Assign inputs to variables 
    var inputElementdate = d3.select("#datetime").property("value");
    var inputElementcity = d3.select("#cityplace").property("value");
    var inputElementstate = d3.select("#stateplace").property("value");
    var inputElementcountry = d3.select("#countryplace").property("value");
    var inputElementshape = d3.select("#shapeobject").property("value");

// If statement for Date Inputs 
    if(inputElementdate !=="") {
        var filteredUFOdate = tableData.filter(ufodate => ufodate.datetime === inputElementdate)
        if (filteredUFOdate.length !== 0) {d3.select('#date', 'date').text("Enter a Date").style('color', 'white')}
            else {d3.select('#date').text("Invalid Date!!").style('color', 'orange')}}

        else {
            var filteredUFOdate = tableData
            d3.select('#date').text("Enter a Date").style('color', 'white')}
    
// If statement for City Inputs
    if(inputElementcity !=="") {
        var filteredUFOcity = filteredUFOdate.filter(ufocity => ufocity.city === inputElementcity)
        if (filteredUFOcity.length !== 0) {d3.select('#city').text("Enter a City").style('color', 'white')}
            else {d3.select('#city').text("Invalid City!!").style('color', 'orange'); return}}

        else {
            var filteredUFOcity = filteredUFOdate
            d3.select('#city').text("Enter a City").style('color', 'white')}

// If statement for State Input
    if(inputElementstate !=="") {
        var filteredUFOstate = filteredUFOcity.filter(ufostate => ufostate.state === inputElementstate)
        if (filteredUFOstate.length !== 0) {d3.select('#state').text("Enter a State").style('color', 'white')}
            else {d3.select('#state').text("Invalid State!!").style('color', 'orange'); return}}

        else {
            var filteredUFOstate = filteredUFOcity
            d3.select('#state').text("Enter a State").style('color', 'white')}            

// If statement for Country Input
    if(inputElementcountry !=="") {
        var filteredUFOcountry = filteredUFOstate.filter(ufocountry => ufocountry.country === inputElementcountry)
        if (filteredUFOcountry.length !== 0) {d3.select('#country').text("Enter a Country").style('color', 'white')}
            else {d3.select('#country').text("Invalid Country!!").style('color', 'orange'); return}}

        else {
            var filteredUFOcountry = filteredUFOstate
            d3.select('#country').text("Enter a Country").style('color', 'white')}            

// If statement for Shape Input
    if(inputElementshape !=="") {
        var filteredUFOshape = filteredUFOcountry.filter(ufoshape => ufoshape.shape === inputElementshape)
        if (filteredUFOshape.length !== 0) {d3.select('#shape').text("Enter a Shape").style('color', 'white')}
            else {d3.select('#shape').text("Invalid Shape!!").style('color', 'orange'); return}}

        else {
            var filteredUFOshape = filteredUFOcountry
            d3.select('#shape').text("Enter a Shape").style('color', 'white')}            

    buildTable(filteredUFOshape)
}

var tablebtn = d3.select("#filter-btn");
var clearfilter = d3.select("#clear-filter");

tablebtn.on("click", infoEntry);
clearfilter.on("click", refreshpg);