
var margin = {top: 50, right: 20, bottom: 30, left: 100},
    width = 600 - margin.left - margin.right,
    height = 900 - margin.top - margin.bottom;

var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var parseTime = d3.timeParse("%d-%b-%y");

var x = d3.scaleLinear()
    .rangeRound([0, width]);

/*
var y = d3.scaleTime()
    .rangeRound([0, height]);
*/

var y = d3.scaleLinear()
    .rangeRound([0, width]);

// load data
d3.csv("data.csv", function(error, data) {

  data.forEach(function(d) {
    d.rank = +d.Rank;
    d.date = parseTime(d.Date);
    d.hogan = +d.Hogan;
    d.jealous = +d.Jealous;
  });

  x.domain([25,75]);
  y.domain([d3.min(data, function(d) { return d.rank; }), d3.max(data, function(d) { return d.rank; })]);
  //y.domain([d3.max(data, function(d) { return d.date; }), d3.min(data, function(d) { return d.date; })]);

  svg.append("g")
      .attr("class", "x-axis")
      .style("font-family","Poppins")
      .style("font-size", "12px")
      .call(d3.axisTop(x).tickValues([25,50,75]).tickSize(-height).tickPadding(15).tickFormat(d => d + "%"))
      .select(".domain")
        .remove();

  svg.append("g")
    .data(data)
    .attr("class", "y-axis")
    .style("font-family","Poppins")
    .style("font-size", "12px")
    .call(d3.axisLeft(y).ticks(0).tickSize(0).tickPadding(20))
    .select(".domain")
      .remove();

  svg.selectAll(".dates")
     .data(data)
   .enter().append("text") // Uses the enter().append() method
     .attr("class", "dates") // Assign a class for styling
     .attr("x", -margin.left)
     .attr("y", function(d) { return y(d.rank)})
     .text(function(d) { return y(d.date)});

  svg.selectAll(".line")
     .data(data)
   .enter().append("line") // Uses the enter().append() method
     .attr("class", "line") // Assign a class for styling
     .attr("x1", function(d) { return x(d.jealous)})
     .attr("y1", function(d) { return y(d.rank)})
     .attr("x2", function(d) { return x(d.hogan)})
     .attr("y2", function(d) { return y(d.rank)})
     .style("stroke", "#969696")
     .style("stroke-width", "2");

  svg.selectAll(".hogan-dot")
     .data(data)
   .enter().append("circle") // Uses the enter().append() method
     .attr("class", "hogan-dot") // Assign a class for styling
     .attr("cx", function(d) { return x(d.hogan)})
     .attr("cy", function(d) { return y(d.rank)})
     .attr("r", 6)
     .attr("fill", "#f04b4d");

   svg.selectAll(".jealous-dot")
      .data(data)
    .enter().append("circle") // Uses the enter().append() method
      .attr("class", "jealous-dot") // Assign a class for styling
      .attr("cx", function(d) { return x(d.jealous)})
      .attr("cy", function(d) { return y(d.rank)})
      .attr("r", 6)
      .attr("fill", "#4b4c99");

});
