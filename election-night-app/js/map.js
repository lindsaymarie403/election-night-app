
/*
var margin = {top: 0, right: 0, bottom: 0, left: 0},
    width = 950 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

var svg = d3.select('#map-svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom);
  */


var svg = d3.select('#map-svg')

var sqrtScale = d3.scaleSqrt()
    .domain([0, 300000])
    .range([0, 95]);

function circle_fill(d) {
      if (d > 0.875) {
        return "#ec1c24";
      } else if (d > 0.75) {
        return "#cb2542";
      } else if (d > 0.625) {
        return "#aa2258";
      } else if (d > 0.5) {
        return "#9d246e";
      } else if (d > 0.375) {
        return "#742b88";
      } else if (d > 0.25) {
        return "#5a388f";
      } else if (d > 0.125) {
        return "#384495";
      }
      return "#2e3091";
    };

d3.json("Results.js", function(error, data) {

  var subset = data.Results.filter(function(d) { return d[2] == '2' && d[0] == '12803' || d[2] == '2' && d[0] == '12804'; });

  allegany_votes = subset.filter(function(d) { return d[1] == '1'});

  annearundel_votes = subset.filter(function(d) { return d[1] == '2'});

  baltcity_votes = subset.filter(function(d) { return d[1] == '3'});

  baltcounty_votes = subset.filter(function(d) { return d[1] == '4'});

  calvert_votes = subset.filter(function(d) { return d[1] == '5'});

  caroline_votes = subset.filter(function(d) { return d[1] == '6'});

  carroll_votes = subset.filter(function(d) { return d[1] == '7'});

  cecil_votes = subset.filter(function(d) { return d[1] == '8'});

  charles_votes = subset.filter(function(d) { return d[1] == '9'});

  dorchester_votes = subset.filter(function(d) { return d[1] == '10'});

  frederick_votes = subset.filter(function(d) { return d[1] == '11'});

  garrett_votes = subset.filter(function(d) { return d[1] == '12'});

  harford_votes = subset.filter(function(d) { return d[1] == '13'});

  howard_votes = subset.filter(function(d) { return d[1] == '14'});

  kent_votes = subset.filter(function(d) { return d[1] == '15'});

  montgomery_votes = subset.filter(function(d) { return d[1] == '16'});

  pg_votes = subset.filter(function(d) { return d[1] == '17'});

  queenanne_votes = subset.filter(function(d) { return d[1] == '18'});

  stmary_votes = subset.filter(function(d) { return d[1] == '19'});

  somerset_votes = subset.filter(function(d) { return d[1] == '20'});

  talbot_votes = subset.filter(function(d) { return d[1] == '21'});

  washington_votes = subset.filter(function(d) { return d[1] == '22'});

  wicomico_votes = subset.filter(function(d) { return d[1] == '23'});

  worcester_votes = subset.filter(function(d) { return d[1] == '24'});

  console.log(allegany_votes[0][3] + allegany_votes[1][3]);

  // CHANGE SECOND INDECES TO 3 ON ELECTION NIGHT
  svg.select("#allegany")
      .data(subset)
      .attr("r", sqrtScale(allegany_votes[0][3] + allegany_votes[1][3]))
      .attr("fill", circle_fill( allegany_votes[0][3] / (allegany_votes[0][3] + allegany_votes[1][3])));

  svg.select("#annearundel")
      .data(subset)
      .attr("r", sqrtScale(annearundel_votes[0][3] + annearundel_votes[1][3]))
      .attr("fill", circle_fill( annearundel_votes[0][3] / (annearundel_votes[0][3] + annearundel_votes[1][3])));

  svg.select("#baltcity")
      .data(subset)
      .attr("r", sqrtScale(baltcity_votes[0][3] + baltcity_votes[1][3]))
      .attr("fill", circle_fill( baltcity_votes[0][3] / (baltcity_votes[0][3] + baltcity_votes[1][3])));

  svg.select("#baltcounty")
      .data(subset)
      .attr("r", sqrtScale(baltcounty_votes[0][3] + baltcounty_votes[1][3]))
      .attr("fill", circle_fill( baltcounty_votes[0][3] / (baltcounty_votes[0][3] + baltcounty_votes[1][3])));

  svg.select("#calvert")
      .data(subset)
      .attr("r", sqrtScale(calvert_votes[0][3] + calvert_votes[1][3]))
      .attr("fill", circle_fill( calvert_votes[0][3] / (calvert_votes[0][3] + calvert_votes[1][3])));

  svg.select("#caroline")
      .data(subset)
      .attr("r", sqrtScale(caroline_votes[0][3] + caroline_votes[1][3]))
      .attr("fill", circle_fill( caroline_votes[0][3] / (caroline_votes[0][3] + caroline_votes[1][3])));

  svg.select("#carroll")
      .data(subset)
      .attr("r", sqrtScale(carroll_votes[0][3] + carroll_votes[1][3]))
      .attr("fill", circle_fill( carroll_votes[0][3] / (carroll_votes[0][3] + carroll_votes[1][3])));

  svg.select("#cecil")
      .data(subset)
      .attr("r", sqrtScale(cecil_votes[0][3] + cecil_votes[1][3]))
      .attr("fill", circle_fill( cecil_votes[0][3] / (cecil_votes[0][3] + cecil_votes[1][3])));

  svg.select("#charles")
      .data(subset)
      .attr("r", sqrtScale(charles_votes[0][3] + charles_votes[1][3]))
      .attr("fill", circle_fill( charles_votes[0][3] / (charles_votes[0][3] + charles_votes[1][3])));

  svg.select("#dorchester")
      .data(subset)
      .attr("r", sqrtScale(dorchester_votes[0][3] + dorchester_votes[1][3]))
      .attr("fill", circle_fill( dorchester_votes[0][3] / (dorchester_votes[0][3] + dorchester_votes[1][3])));

  svg.select("#frederick")
      .data(subset)
      .attr("r", sqrtScale(frederick_votes[0][3] + frederick_votes[1][3]))
      .attr("fill", circle_fill( frederick_votes[0][3] / (frederick_votes[0][3] + frederick_votes[1][3])));

  svg.select("#garrett")
      .data(subset)
      .attr("r", sqrtScale(garrett_votes[0][3] + garrett_votes[1][3]))
      .attr("fill", circle_fill( garrett_votes[0][3] / (garrett_votes[0][3] + garrett_votes[1][3])));

  svg.select("#harford")
      .data(subset)
      .attr("r", sqrtScale(harford_votes[0][3] + harford_votes[1][3]))
      .attr("fill", circle_fill( harford_votes[0][3] / (harford_votes[0][3] + harford_votes[1][3])));

  svg.select("#howard")
      .data(subset)
      .attr("r", sqrtScale(howard_votes[0][3] + howard_votes[1][3]))
      .attr("fill", circle_fill( howard_votes[0][3] / (howard_votes[0][3] + howard_votes[1][3])));

  svg.select("#kent")
      .data(subset)
      .attr("r", sqrtScale(kent_votes[0][3] + kent_votes[1][3]))
      .attr("fill", circle_fill( kent_votes[0][3] / (kent_votes[0][3] + kent_votes[1][3])));

  svg.select("#montgomery")
      .data(subset)
      .attr("r", sqrtScale(montgomery_votes[0][3] + montgomery_votes[1][3]))
      .attr("fill", circle_fill( montgomery_votes[0][3] / (montgomery_votes[0][3] + montgomery_votes[1][3])));

  svg.select("#pg")
      .data(subset)
      .attr("r", sqrtScale(pg_votes[0][3] + pg_votes[1][3]))
      .attr("fill", circle_fill( pg_votes[0][3] / (pg_votes[0][3] + pg_votes[1][3])));

  svg.select("#queenanne")
      .data(subset)
      .attr("r", sqrtScale(queenanne_votes[0][3] + queenanne_votes[1][3]))
      .attr("fill", circle_fill( queenanne_votes[0][3] / (queenanne_votes[0][3] + queenanne_votes[1][3])));

  svg.select("#stmary")
      .data(subset)
      .attr("r", sqrtScale(stmary_votes[0][3] + stmary_votes[1][3]))
      .attr("fill", circle_fill( stmary_votes[0][3] / (stmary_votes[0][3] + stmary_votes[1][3])));

  svg.select("#somerset")
      .data(subset)
      .attr("r", sqrtScale(somerset_votes[0][3] + somerset_votes[1][3]))
      .attr("fill", circle_fill( somerset_votes[0][3] / (somerset_votes[0][3] + somerset_votes[1][3])));

  svg.select("#talbot")
      .data(subset)
      .attr("r", sqrtScale(talbot_votes[0][3] + talbot_votes[1][3]))
      .attr("fill", circle_fill( talbot_votes[0][3] / (talbot_votes[0][3] + talbot_votes[1][3])));

  svg.select("#washington")
      .data(subset)
      .attr("r", sqrtScale(washington_votes[0][3] + washington_votes[1][3]))
      .attr("fill", circle_fill( washington_votes[0][3] / (washington_votes[0][3] + washington_votes[1][3])));

  svg.select("#wicomico")
      .data(subset)
      .attr("r", sqrtScale(wicomico_votes[0][3] + wicomico_votes[1][3]))
      .attr("fill", circle_fill( wicomico_votes[0][3] / (wicomico_votes[0][3] + wicomico_votes[1][3])));

  svg.select("#worcester")
      .data(subset)
      .attr("r", sqrtScale(worcester_votes[0][3] + worcester_votes[1][3]))
      .attr("fill", circle_fill( worcester_votes[0][3] / (worcester_votes[0][3] + worcester_votes[1][3])));

/*
  svg.select("#winner")
     //.attr("x", "10%")
     //.attr("y", "10%")
     .attr("fill", "#d3d3d3")
     //.style("text-anchor", "middle")
     .style("font-family","Poppins")
     .style("font-size", "12px")
     .style("font-weight", "600");
*/

  svg.select("#legend-big")
    .attr("r", sqrtScale(250000));

  svg.select("#legend-mid")
    .attr("r", sqrtScale(100000));

  svg.select("#legend-small")
    .attr("r", sqrtScale(25000));

  svg.select(".legend-big-text")
      .data(subset)
    .enter().append(text)
      .attr("class", "legend-big-text")
      .attr("x","20")
      .attr("y", "100")
      .text("250,000 Votes");

/*
  svg.selectAll(".legend-image")
      .data(subset)
   .enter().append("image")
   .attr("class", "legend-image")
   .attr("xlink:href", "assets/legend.png")
   .attr("x", "10%")
   .attr("y", "55%")
   .attr("width", "300")
   .attr("height", "100");
   */

});

document.addEventListener("DOMContentLoaded", resize);
d3.select(window).on('resize', resize);

function resize() {
	console.log('----resize function----');

  width = parseInt(d3.select('#map-svg').style("width"), 10);
  //width = width - margin.left - margin.right;
	console.log('----resize width----'+width);

  sqrtScale.range([0, (width / 10)]);

  svg.select("#allegany")
      .attr("r", sqrtScale(allegany_votes[0][3] + allegany_votes[1][3]));

  svg.select("#annearundel")
      .attr("r", sqrtScale(annearundel_votes[0][3] + annearundel_votes[1][3]));

  svg.select("#baltcity")
      .attr("r", sqrtScale(baltcity_votes[0][3] + baltcity_votes[1][3]));

  svg.select("#baltcity")
      .attr("r", sqrtScale(baltcity_votes[0][3] + baltcity_votes[1][3]));

  svg.select("#baltcounty")
      .attr("r", sqrtScale(baltcounty_votes[0][3] + baltcounty_votes[1][3]));

  svg.select("#calvert")
      .attr("r", sqrtScale(calvert_votes[0][3] + calvert_votes[1][3]));

  svg.select("#caroline")
      .attr("r", sqrtScale(caroline_votes[0][3] + caroline_votes[1][3]));

  svg.select("#carroll")
      .attr("r", sqrtScale(carroll_votes[0][3] + carroll_votes[1][3]));

  svg.select("#cecil")
      .attr("r", sqrtScale(cecil_votes[0][3] + cecil_votes[1][3]));

  svg.select("#charles")
      .attr("r", sqrtScale(charles_votes[0][3] + charles_votes[1][3]));

  svg.select("#dorchester")
      .attr("r", sqrtScale(dorchester_votes[0][3] + dorchester_votes[1][3]));

  svg.select("#frederick")
      .attr("r", sqrtScale(frederick_votes[0][3] + frederick_votes[1][3]));

  svg.select("#garrett")
      .attr("r", sqrtScale(garrett_votes[0][3] + garrett_votes[1][3]));

  svg.select("#harford")
      .attr("r", sqrtScale(harford_votes[0][3] + harford_votes[1][3]));

  svg.select("#howard")
      .attr("r", sqrtScale(howard_votes[0][3] + howard_votes[1][3]));

  svg.select("#kent")
      .attr("r", sqrtScale(kent_votes[0][3] + kent_votes[1][3]));

  svg.select("#montgomery")
      .attr("r", sqrtScale(montgomery_votes[0][3] + montgomery_votes[1][3]));

  svg.select("#pg")
      .attr("r", sqrtScale(pg_votes[0][3] + pg_votes[1][3]));

  svg.select("#queenanne")
      .attr("r", sqrtScale(queenanne_votes[0][3] + queenanne_votes[1][3]));

  svg.select("#stmary")
      .attr("r", sqrtScale(stmary_votes[0][3] + stmary_votes[1][3]));

  svg.select("#somerset")
      .attr("r", sqrtScale(somerset_votes[0][3] + somerset_votes[1][3]));

  svg.select("#talbot")
      .attr("r", sqrtScale(talbot_votes[0][3] + talbot_votes[1][3]));

  svg.select("#washington")
      .attr("r", sqrtScale(washington_votes[0][3] + washington_votes[1][3]));

  svg.select("#wicomico")
      .attr("r", sqrtScale(wicomico_votes[0][3] + wicomico_votes[1][3]));

  svg.select("#worcester")
      .attr("r", sqrtScale(worcester_votes[0][3] + worcester_votes[1][3]));

  svg.select("#legend-big")
    .attr("r", sqrtScale(250000));

  svg.select("#legend-mid")
    .attr("r", sqrtScale(100000));

  svg.select("#legend-small")
    .attr("r", sqrtScale(25000));


};

//CODE FOR CIRCLE LEGEND
/*
var svg2 = d3.select('#legend-svg')

d3.json("Results.js", function(error, data) {
  svg2.select("#legend-big")
    .attr("r", sqrtScale(250000))
});
*/
