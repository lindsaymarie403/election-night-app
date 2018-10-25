
var margin = {top: 40, right: 20, bottom: 30, left: 80},
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

var y = d3.scaleTime()
    .rangeRound([0, height]);

// load data
d3.csv("data.csv", function(error, data) {

  data.forEach(function(d) {
    d.date = parseTime(d.Date);
    d.hogan = +d.Hogan;
    d.jealous = +d.Jealous;
  });

  x.domain([25,75]);
  y.domain([d3.max(data, function(d) { return d.date; }), d3.min(data, function(d) { return d.date; })]);

  svg.append("g")
      .attr("class", "x-axis")
      .style("font-family","Poppins")
      .style("font-size", "12px")
      .call(d3.axisTop(x).tickValues([25,50,75]).tickSize(5).tickPadding(10));

  svg.append("g")
    .data(data)
    .attr("class", "y-axis")
    .style("font-family","Poppins")
    .style("font-size", "12px")
    .call(d3.axisLeft(y).ticks(12).tickSize(0))
    .select(".domain")
      .remove();

  svg.selectAll(".dot")
     .data(data)
   .enter().append("circle") // Uses the enter().append() method
     .attr("class", "hogan-dot") // Assign a class for styling
     .attr("opacity", "0.7")
     .attr("cx", function(d) { return x(d.hogan)})
     .attr("cy", function(d) { return y(d.date)})
     .attr("r", 8)
     .attr("fill", "#ec1c24");

   svg.selectAll(".dot")
      .data(data)
    .enter().append("circle") // Uses the enter().append() method
      .attr("class", "jealous-dot") // Assign a class for styling
      .attr("opacity", "0.7")
      .attr("cx", function(d) { return x(d.jealous)})
      .attr("cy", function(d) { return y(d.date)})
      .attr("r", 8)
      .attr("fill", "#384495");
});
