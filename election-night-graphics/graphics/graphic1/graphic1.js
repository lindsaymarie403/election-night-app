
var margin = {top: 50, right: 35, bottom: 10, left: 150},
    width = 600 - margin.left - margin.right,
    height = 780 - margin.top - margin.bottom;

var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleLinear()
    .rangeRound([0, width]);

var y = d3.scaleLinear()
    .rangeRound([25, height-20]);

// load data
d3.csv("data.csv", function(error, data) {

  data.forEach(function(d) {
    d.rank = +d.Rank;
    d.county = d.County;
    d.first = +d.First;
    d.second = +d.Second;
  });

  x.domain([0,100]);
  y.domain([d3.min(data, function(d) { return d.rank; }), d3.max(data, function(d) { return d.rank; })]);

  svg.selectAll("rect")
     .data(data)
   .enter().append("rect") // Uses the enter().append() method
     .attr("x", -margin.left)
     .attr("y", function(d) { return y(d.rank) - 15})
     .attr("width", margin.left + width + margin.right)
     .attr("height", 30)
     .style("fill", function(d) {
           if (d.rank === 2 | d.rank === 4 | d.rank === 6 | d.rank === 8 | d.rank === 10 | d.rank === 12 | d.rank === 14 | d.rank === 16 | d.rank === 18 | d.rank === 20 | d.rank === 22 | d.rank === 24 ) {
             return "#f4f4f4";
           } return "#fcfcfc";
         });
     //.style("fill", "#fcfcfc"); //alt with #f4f4f4

  svg.append("g")
      .attr("class", "x-axis")
      .style("font-family","Poppins")
      .style("font-size", "12px")
      .call(d3.axisTop(x).tickValues([0,25,50,75,100]).tickSize(-height).tickPadding(15).tickFormat(d => d + "%"))
      .select(".domain")
        .remove();

  svg.append("g")
    .data(data)
    .attr("class", "y-axis")
    .style("font-family","Poppins")
    .style("font-size", "12px")
    .call(d3.axisLeft(y).ticks(0).tickSize(0).tickPadding(50))
    .select(".domain")
      .remove();

  svg.selectAll("#county-label")
     .data(data)
   .enter().append("text") // Uses the enter().append() method
     .attr("id", "county-label") // Assign a class for styling
     .attr("x", -margin.left + 10)
     .attr("y", -15)
     .text("County")
     .style("font-family","Poppins")
     .style("font-size", "12px");

  svg.selectAll(".dates")
     .data(data)
   .enter().append("text") // Uses the enter().append() method
   .attr("class", "dates") // Assign a class for styling
   .attr("x", -margin.left + 10)
   .attr("y", function(d) { return y(d.rank) + 4})
   .text( function(d) { return d.county } )
   .style("font-family","Poppins")
   .style("font-size", "12px");

  svg.selectAll(".line")
     .data(data)
   .enter().append("line") // Uses the enter().append() method
     .attr("class", "line") // Assign a class for styling
     .attr("x1", function(d) { return x(d.first)})
     .attr("y1", function(d) { return y(d.rank)})
     .attr("x2", function(d) { return x(d.second)})
     .attr("y2", function(d) { return y(d.rank)})
     .style("stroke", "#969696")
     .style("stroke-width", "3");

  svg.selectAll(".hogan-dot")
     .data(data)
   .enter().append("circle") // Uses the enter().append() method
     .attr("class", "hogan-dot") // Assign a class for styling
     .attr("cx", function(d) { return x(d.first)})
     .attr("cy", function(d) { return y(d.rank)})
     .attr("r", 4)
     .attr("fill", "white")
     .attr("stroke", "#f04b4d")
     .attr("stroke-width", "2");

  svg.selectAll(".hogan-first-name")
     .data(data)
   .enter().append("text") // Uses the enter().append() method
     .attr("class", "hogan-first-name") // Assign a class for styling
     .filter(function (d, i) { return i === 0;})
     .attr("x",function(d) { return x(d.first) - 12 })
     .attr("y", function(d) { return y(d.rank) - 3})
     .text("2014 Election")
     .style("text-anchor", "end")
     .style("font-family","Poppins")
     .style("font-size", "10px")
     .style("font-weight", "600");

   svg.selectAll(".hogan-first-num")
      .data(data)
    .enter().append("text") // Uses the enter().append() method
      .attr("class", "hogan-first-num") // Assign a class for styling
      .filter(function (d, i) { return i === 0;})
      .attr("x",function(d) { return x(d.first) - 12 })
      .attr("y", function(d) { return y(d.rank) + 10})
      .text( function(d) { return d.first + "%"} )
      .style("text-anchor", "end")
      .style("font-family","Poppins")
      .style("font-size", "10px");

  svg.selectAll(".hogan-labels")
     .data(data)
   .enter().append("text") // Uses the enter().append() method
     .attr("class", "hogan-labels") // Assign a class for styling
     .filter(function (d, i) { return i > 0;})
     .attr("x",function(d) { return x(d.first) - 12 })
     .attr("y", function(d) { return y(d.rank) + 5})
     .text( function(d) { return d.first} )
     .style("text-anchor", "end")
     .style("font-family","Poppins")
     .style("font-size", "10px");

   svg.selectAll(".jealous-dot")
      .data(data)
    .enter().append("circle") // Uses the enter().append() method
      .attr("class", "jealous-dot") // Assign a class for styling
      .attr("cx", function(d) { return x(d.second)})
      .attr("cy", function(d) { return y(d.rank)})
      .attr("r", 5)
      .attr("fill", "#f04b4d");

   svg.selectAll(".jealous-first-name")
      .data(data)
    .enter().append("text") // Uses the enter().append() method
      .attr("class", "jealous-first-name") // Assign a class for styling
      .filter(function (d, i) { return i === 0;})
      .attr("x",function(d) { return x(d.second) + 12 })
      .attr("y", function(d) { return y(d.rank) - 3})
      .text("2018 Election")
      .style("text-anchor", "start")
      .style("font-family","Poppins")
      .style("font-size", "10px")
      .style("font-weight", "600");

    svg.selectAll(".jealous-first-num")
       .data(data)
     .enter().append("text") // Uses the enter().append() method
       .attr("class", "jealous-first-num") // Assign a class for styling
       .filter(function (d, i) { return i === 0;})
       .attr("x",function(d) { return x(d.second) + 12 })
       .attr("y", function(d) { return y(d.rank) + 10})
       .text( function(d) { return d.second + "%"} )
       .style("text-anchor", "start")
       .style("font-family","Poppins")
       .style("font-size", "10px");

    svg.selectAll(".jealous-labels")
       .data(data)
     .enter().append("text") // Uses the enter().append() method
       .attr("class", "jealous-labels") // Assign a class for styling
       .filter(function (d, i) { return i > 0;})
       .attr("x",function(d) { return x(d.second) + 12 })
       .attr("y", function(d) { return y(d.rank) + 5})
       .text( function(d) { return d.second} )
       .style("text-anchor", "start")
       .style("font-family","Poppins")
       .style("font-size", "10px");

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

  svg.selectAll("rect")
      .attr("width", margin.left + width + margin.right);

  svg.selectAll(".x-axis")
      .call(d3.axisTop(x).tickValues([0,25,50,75,100]).tickSize(-height).tickPadding(15).tickFormat(d => d + "%"))
      .select(".domain")
        .remove();

  svg.selectAll(".line")
      .attr("x1", function(d) { return x(d.first)})
      .attr("x2", function(d) { return x(d.second)});

  svg.selectAll(".hogan-dot")
     .attr("cx", function(d) { return x(d.first)})
     .attr("cy", function(d) { return y(d.rank)});

   svg.selectAll(".jealous-dot")
      .attr("cx", function(d) { return x(d.second)})
      .attr("cy", function(d) { return y(d.rank)});

   svg.selectAll(".hogan-first-name")
      .attr("x",function(d) { return x(d.first) - 12 });

    svg.selectAll(".hogan-first-num")
       .attr("x",function(d) { return x(d.first) - 12 });

   svg.selectAll(".hogan-labels")
      .attr("x",function(d) { return x(d.first) - 12 });

    svg.selectAll(".jealous-dot")
       .attr("cx", function(d) { return x(d.second)});

    svg.selectAll(".jealous-first-name")
       .attr("x",function(d) { return x(d.second) + 12 });

     svg.selectAll(".jealous-first-num")
        .attr("x",function(d) { return x(d.second) + 12 });

     svg.selectAll(".jealous-labels")
        .attr("x",function(d) { return x(d.second) + 12 });



};
