/*
var svg = d3.select('#map-svg')

d3.json("data.json", function(error, data) {

    data.forEach(function(d) {
        d[0] = d.candidate;
        d[1] = d.jurisdiction;
        d[2] = d.district;
        d[3] = +d.votes;
    });

    svg.select("#garrett")
      .data(data)
      .attr("r", function(d) {
        if (d.jurisdiction == '12' && d.district == '2') {
          return d.votes; }
        });

  });
*/
