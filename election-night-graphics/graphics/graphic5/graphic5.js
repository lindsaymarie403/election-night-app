
var margin = {top: 30, right: 35, bottom: 20, left: 40},
    width = 600 - margin.left - margin.right,
    height = 180 - margin.top - margin.bottom;

var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleLinear().rangeRound([0, width]),
    y = d3.scaleBand().rangeRound([0, height]).padding(0.35),
    z = d3.scaleOrdinal().range(["#f04b4d", "#d3d3d3"]);

// load data
d3.csv("data.csv", function(d, i, columns) {
		for (i = 1, t = 0; i < columns.length; ++i) t += d[columns[i]] = +d[columns[i]];
		d.total = t;
		return d;
}, function(error, data) {
		if (error) throw error;

	var keys = data.columns.slice(1);

  console.log(data);

  x.domain([0,100]);
  y.domain(data.map(function(d) { return d.Year; }));
  z.domain(keys);
  //y.domain([d3.min(data, function(d) { return d.year; }), d3.max(data, function(d) { return d.year; })]);

  svg.append("g")
    .selectAll("g")
    .data(d3.stack().keys(keys)(data))
    .enter().append("g")
      .attr("class", "bar")
      .attr("fill", function(d) { return z(d.key); })
      //.attr("opacity", "0.9")
    .selectAll("rect")
    .data(function(d) { return d; })
    .enter().append("rect")
      .attr("x", function(d) { return x(d[0]); })
      .attr("y", function(d) { return y(d.data.Year); })
      .attr("width", function(d) { return x(d[1]) - x(d[0]); })
      .attr("height", y.bandwidth());

  svg.append("text")
    .data(data)
     .attr("class","cand1")
     .attr("x", (function(d) { return x(0); }  ))
     .attr("y", 5)
     .text("Hogan")
      .style("text-anchor","start")
      .attr("font-size", "12px")
      .attr("font-family","Poppins")
      .attr("font-weight", "600");

  svg.append("text")
    .data(data)
     .attr("class","cand2")
     .attr("x", (function(d) { return x(100); }  ))
     .attr("y", 5)
     .text("Democrat")
      .style("text-anchor","end")
      .attr("font-size", "12px")
      .attr("font-family","Poppins")
      .attr("font-weight", "600");

  svg.append("text")
    .data(data)
     .attr("class","label")
     .attr("x", function(d) { return x(0) + 10; } )
     .attr("y", margin.top + (y.bandwidth()/2) - 5)
     .text(function(d) { return d.Hogan + "%" })
      .style("text-anchor","start")
      .attr("font-size", "10px")
      .attr("font-family","Poppins")
      .attr("fill", "white");

  svg.append("text")
    .data(data)
     .attr("class","label2")
     .attr("x", (function(d) { return x(100) - 10; }  ))
     .attr("y", margin.top + (y.bandwidth()/2) - 5)
     .text(function(d) { return d.Democrat + "%" })
      .style("text-anchor","end")
      .attr("font-size", "10px")
      .attr("font-family","Poppins")
      .attr("font-weight", "500");

  svg.append("text")
    .data(data)
     .attr("class","label")
     .attr("x", function(d) { return x(0) + 10; } )
     .attr("y", function(d) { return y(2018) + (y.bandwidth()/2) + 3; })
     .text("53.0%")
      .style("text-anchor","start")
      .attr("font-size", "10px")
      .attr("font-family","Poppins")
      .attr("fill", "white");

  svg.append("text")
    .data(data)
     .attr("class","label2")
     .attr("x", (function(d) { return x(100) - 10; }  ))
     .attr("y", function(d) { return y(2018) + (y.bandwidth()/2) + 3; })
     .text("47.0%")
      .style("text-anchor","end")
      .attr("font-size", "10px")
      .attr("font-family","Poppins")
      .attr("font-weight", "500");

  svg.append("g")
      .attr("class", "x-axis")
      .style("font-family","Poppins")
      .style("font-size", "12px")
      .call(d3.axisTop(x).tickValues([50]).tickSize(-height).tickPadding(10).tickFormat(d => d + "%"))
      .select(".domain")
        .remove();

  svg.append("g")
    .data(data)
    .attr("class", "y-axis")
    .style("font-family","Poppins")
    .style("font-size", "12px")
    .style("color", "#3a3a3a")
    .call(d3.axisLeft(y).ticks(3).tickSize(0).tickPadding(10))
    .select(".domain")
      .remove();

/*
   svg.selectAll(".text")
     .data(data)
      .enter()
      .append("text")
      .attr("class","label")
      .attr("x", (function(d) { return x(d.pctchg) + 15; }  ))
      .attr("y", function(d) { return y(d.data.County) + y.bandwidth()/2 + 3; })
      .text(function(d) { return d.pctchg; })
       .style("text-anchor","middle")
       .attr("font-size", "10px")
       .attr("font-family","Poppins")
       .attr("font-weight", "600");
  */

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
      .attr("x", function(d) { return x(d[0]); })
      .attr("width", function(d) { return x(d[1]) - x(d[0]); });

  svg.selectAll(".x-axis")
      .call(d3.axisTop(x).tickValues([50]).tickSize(-height).tickPadding(10).tickFormat(d => d + "%"))
      .select(".domain")
        .remove();

  svg.selectAll(".label")
      .attr("x", function(d) { return x(0) + 10; } )

  svg.selectAll(".label2")
      .attr("x", (function(d) { return x(100) - 10; }  ));

};
