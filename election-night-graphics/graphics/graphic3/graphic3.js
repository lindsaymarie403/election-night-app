
var margin = {top: 10, right: 20, bottom: 50, left: 20},
    width = 150 - margin.left - margin.right,
    height = 150 - margin.top - margin.bottom;

    var formatPercent = d3.format(".0%");

    var color = d3.scaleOrdinal().range(["#f04b4d", "#d3d3d3"]);

    var x = d3.scaleBand()
        .rangeRound([0, width], .1);

    // Scales. Note the inverted domain fo y-scale: bigger is up!
    var y = d3.scaleLinear()
        .range([height, 0]);

    // csv loaded asynchronously
    d3.csv("data.csv", type, function(data) {

      // Data is nested by county
      var counties = d3.nest()
          .key(function(d) { return d.County; })
          .entries(data);

      x.domain(data.map(function(d) { return d.Candidate; }));
      //y.domain([(d3.min(data, function(d) { return d.Pct; })), (d3.max(data, function(d) { return d.Pct; }))]);
      //y.domain(d3.extent(data, function(d) { return d.Pct; })).nice();
      y.domain([0, 220]);

      console.log(d3.extent(data, function(d) { return d.Pct; }));

      // Add an SVG element for each country, with the desired dimensions and margin.
      var svg = d3.select("#chart").selectAll("svg")
        .data(counties)
        .enter()
        .append("svg:svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      // Accessing nested data: https://groups.google.com/forum/#!topic/d3-js/kummm9mS4EA
      // data(function(d) {return d.values;})
      // this will dereference the values for nested data for each group
      svg.selectAll(".bar")
          .data(function(d) {return d.values;})
          .enter().append("rect")
          .attr("class", "bar")
          .attr("x", function(d) { return x(d.Candidate); })
          .attr("width", x.bandwidth())
          .attr("y", function(d) {
                if (d.Pct > 0){
                    return y(d.Pct);
                } else {
                    return height;
            }
            })
            .attr("height", function(d) {
              return Math.abs(y(d.Pct) - height);
          })
          .attr("fill", function(d) {return color(d.Candidate)});

      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x).tickSize(0).tickPadding(18));

      svg.append("text")
        .attr("x", width /2)
        .attr("y", 0)
        .attr("dy", ".71em")
        .attr("text-anchor", "middle")
        .attr("font-family", "Poppins")
        .attr("font-size", "12px")
        .attr("font-weight", "600")
        .text(function(d) { return d.key});

      svg.selectAll(".text")
         .data(function(d) {return d.values;})
          .enter().append("text")
          .attr("class","label")
          .attr("x", (function(d) { return x(d.Candidate) + x.bandwidth()/2; }  ))
          .attr("y", function(d) {
                if (d.Pct > 0){
                    return y(d.Pct) - 5;
                } else {
                    return height - 5;
            }
          })
          .text(function(d) { return d.Pct + "%"; })
          .style("text-anchor","middle")
          .attr("font-size", "10px")
          .attr("font-family","Poppins");

    });

    function type(d) {
      d.County = d.County,
      d.Candidate = d.Candidate,
      d.Pct = +d.Pct;
      return d;
    };

/*
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
      .attr("width", function(d) {return x(d.turnout); } );

  svg.selectAll(".x-axis")
      .call(d3.axisBottom(x).tickValues([0,5,10,15,20]).tickSize(0).tickPadding(15).tickFormat(d => d + "%"));

  svg.selectAll(".label")
      .attr("x", (function(d) { return x(d.turnout) + 20; }  ));
};
*/
