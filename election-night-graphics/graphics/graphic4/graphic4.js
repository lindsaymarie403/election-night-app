
var margin = {top: 10, right: 35, bottom: 40, left: 105},
    width = 600 - margin.left - margin.right,
    height = 750 - margin.top - margin.bottom;

var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleLinear().rangeRound([0, width]),
    y0 = d3.scaleBand().rangeRound([0, height]),//.paddingInner(0.1),
    y1 = d3.scaleBand().paddingInner(0).paddingOuter(0.35),
    z = d3.scaleOrdinal().range(["#f04b4d", "#d3d3d3"]);

// load data
d3.csv("data.csv", function(d, i, columns) {
		for (i = 1, t = 0; i < columns.length; ++i) t += d[columns[i]] = +d[columns[i]];
		return d;
}, function(error, data) {
		if (error) throw error;

	var keys = data.columns.slice(1);

  console.log(data);

  x.domain([0,200000]);
  y0.domain(data.map(function(d) { return d.County; }));
  y1.domain(keys).rangeRound([0, y0.bandwidth()]);
  //z.domain(keys);
  //y.domain([d3.min(data, function(d) { return d.year; }), d3.max(data, function(d) { return d.year; })]);

  svg.append("g")
    .selectAll("g")
    .data(data)
    .enter().append("g")
      .attr("transform", function(d) { return "translate(0," + y0(d.County) + ")"; })
    .selectAll("rect")
    .data(function(d) { return keys.map(function(key) { return {key: key, value: d[key]}; }); })
    .enter().append("rect")
      .attr("x", 0)
      .attr("y", function(d) { return y1(d.key); })
      .attr("width", function(d) { return x(d.value); })
      .attr("height", y1.bandwidth())
      .attr("fill", function(d) { return z(d.key); });

  svg.append("text")
    .data(data)
     .attr("class","label")
     .attr("x", 5)
     .attr("y", 19)
     .text("Votes for Hogan")
      .style("text-anchor","start")
      .attr("font-size", "10px")
      .attr("font-family","Poppins")
      .attr("font-weight", "500")
      .attr("fill", "white");

  svg.append("text")
    .data(data)
     .attr("class","label2")
     .attr("x", 5)
     .attr("y", 36)
     .text("Registered Republicans")
      .style("text-anchor","start")
      .attr("font-size", "10px")
      .attr("font-family","Poppins")
      .attr("font-weight", "500");

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
    .call(d3.axisLeft(y0).ticks(3).tickSize(0).tickPadding(8))
    .select(".domain")
      .remove();

/*
   svg.selectAll(".text")
     .data(function(d) { return keys.map(function(key) { return {key: key, value: d[key]}; }); })
      .enter().append("text")
      .attr("class","label")
      .attr("x", (function(d) { return x(d.value) + 15; }  ))
      .attr("y", function(d) { return y1(d.key) + y.bandwidth()/2 + 3; })
      .text(function(d) { return d.value; })
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
      .attr("width", function(d) { return x(d.value); });

  svg.selectAll(".x-axis")
      .call(d3.axisBottom(x).tickValues([0,50000,100000,150000, 200000]).tickSize(0).tickPadding(8));

};
