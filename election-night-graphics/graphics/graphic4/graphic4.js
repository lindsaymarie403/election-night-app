
var margin = {top: 30, right: 35, bottom: 40, left: 105},
    width = 600 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleLinear().rangeRound([0, width]),
    y = d3.scaleBand().rangeRound([0, height]).padding(0.35),
    z = d3.scaleOrdinal().range(["#f04b4d", "#f5898b"]);

// load data
d3.csv("data.csv", function(d, i, columns) {
		for (i = 1, t = 0; i < columns.length; ++i) t += d[columns[i]] = +d[columns[i]];
		d.total = t;
		return d;
}, function(error, data) {
		if (error) throw error;

	var keys = data.columns.slice(1);

  console.log(data);

  x.domain([0,200000]);
  y.domain(data.map(function(d) { return d.County; }));
  z.domain(keys);
  //y.domain([d3.min(data, function(d) { return d.year; }), d3.max(data, function(d) { return d.year; })]);

  svg.append("g")
    .selectAll("g")
    .data(d3.stack().keys(keys)(data))
    .enter().append("g")
      .attr("class", "bar")
      .attr("fill", function(d) { return z(d.key); })
    .selectAll("rect")
    .data(function(d) { return d; })
    .enter().append("rect")
      .attr("x", function(d) { return x(d[0]); })
      .attr("y", function(d) { return y(d.data.County); })
      .attr("width", function(d) { return x(d[1]) - x(d[0]); })
      .attr("height", y.bandwidth());

  svg.append("text")
    .data(data)
     .attr("class","label")
     .attr("x", (function(d) { return x(0); }  ))
     .attr("y", 5)
     .text("Republican voters")
      .style("text-anchor","start")
      .attr("font-size", "10px")
      .attr("font-family","Poppins")
      .attr("font-weight", "600");

  svg.append("text")
    .data(data)
     .attr("class","label2")
     .attr("x", (function(d) { return x(142739); }  ))
     .attr("y", 5)
     .text("Votes for Hogan")
      .style("text-anchor","start")
      .attr("font-size", "10px")
      .attr("font-family","Poppins")
      .attr("font-weight", "600");

  svg.append("g")
      .attr("class", "x-axis")
      .attr("transform", "translate(0," + height + ")")
      .style("font-family","Poppins")
      .style("font-size", "12px")
      .style("color", "#3a3a3a")
      .call(d3.axisBottom(x).tickValues([0,50000,100000,150000,200000]).tickSize(0).tickPadding(8));
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
      .call(d3.axisBottom(x).tickValues([0,50000,100000,150000, 200000]).tickSize(0).tickPadding(8));

  svg.selectAll(".label")
      .attr("x", (function(d) { return x(0); } ));

  svg.selectAll(".label2")
      .attr("x", (function(d) { return x(142739); } ));

};
