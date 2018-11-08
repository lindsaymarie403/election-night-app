
var margin = {top: 10, right: 35, bottom: 40, left: 105},
    width = 600 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleLinear().rangeRound([0, width]),
    y = d3.scaleBand().rangeRound([0, height]).padding(0.35);

// load data
d3.csv("data.csv", function(error, data) {

  data.forEach(function(d) {
    d.rank = +d.Rank;
    d.county = d.County;
    d.pctchg = +d.PctChg;
  });

  x.domain([0,40]);
  y.domain(data.map(function(d) { return d.county; }));
  //y.domain([d3.min(data, function(d) { return d.year; }), d3.max(data, function(d) { return d.year; })]);

  svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", 0)
      .attr("y", function(d) { return y(d.county); })
      .attr("width", function(d) {return x(d.pctchg); } )
      .attr("height", y.bandwidth())
      .attr("fill", function(d) {
           if (d.year == 2018) {
             return "#d3d3d3";
           } return "#f04b4d";
       });

  svg.append("g")
      .attr("class", "x-axis")
      .attr("transform", "translate(0," + height + ")")
      .style("font-family","Poppins")
      .style("font-size", "12px")
      .style("color", "#3a3a3a")
      .call(d3.axisBottom(x).tickValues([0,10,20,30,40]).tickSize(0).tickPadding(8).tickFormat(d => d + "%"));
      //.select(".domain")
        //.remove();

  svg.append("g")
    .data(data)
    .attr("class", "y-axis")
    .style("font-family","Poppins")
    .style("font-size", "11px")
    .style("color", "#3a3a3a")
    .call(d3.axisLeft(y).ticks(3).tickSize(0).tickPadding(8))
    .select(".domain")
      .remove();

   svg.selectAll(".text")
     .data(data)
      .enter()
      .append("text")
      .attr("class","label")
      .attr("x", (function(d) { return x(d.pctchg) + 15; }  ))
      .attr("y", function(d) { return y(d.county) + y.bandwidth()/2 + 3; })
      .text(function(d) { return d.pctchg; })
       .style("text-anchor","middle")
       .attr("font-size", "10px")
       .attr("font-family","Poppins")
       .attr("font-weight", "600");

});


document.addEventListener("DOMContentLoaded", resize);
d3.select(window).on('resize', resize);

function resize() {
	console.log('----resize function----');

  width = parseInt(d3.select('#chart').style("width"), 10);
  width = width - margin.left - margin.right;
	console.log('----resize width----'+width);

  x.rangeRound([0, width]);

  d3.select(svg.node().parentNode)
      .attr('width', (width + margin.left + margin.right) + 'px');

  d3.select('svg')
      .attr('width', (width + margin.left + margin.right) + 'px');

  svg.selectAll(".bar")
      .attr("width", function(d) {return x(d.pctchg); } );

  svg.selectAll(".x-axis")
      .call(d3.axisBottom(x).tickValues([0,10,20,30,40]).tickSize(0).tickPadding(8).tickFormat(d => d + "%"));

  svg.selectAll(".label")
      .attr("x", (function(d) { return x(d.pctchg) + 15; }  ));
};
