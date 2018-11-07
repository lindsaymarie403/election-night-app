
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
      if (d > 0.833) {
        return "#db2025";
      } else if (d > 0.667) {
        return "#c62752";
      } else if (d > 0.5) {
        return "#c71a6a";
      } else if (d == 0.5) {
        return "#992986"
      } else if (d > 0.333) {
        return "#562a79";
      } else if (d > 0.167) {
        return "#38367b";
      }
      return "#1e1d67";
    };

// https://cnsmaryland.org/interactives/fall-2018/election-night-app/data-proxy-example/data-proxy.php
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

  //console.log(allegany_votes[0][3] + allegany_votes[1][3]);

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
      //.attr("r", sqrtScale(300000))
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
      //.attr("r", sqrtScale(300000))
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

  // LEGEND
  svg.append("text")
    .attr("class", "legend-title")
    .attr("x","20%")
    .attr("y", "51%")
    .text("Vote Total")
    .style("font-family","Poppins")
    .style("font-weight", "600")
    .style("text-transform", "uppercase");

  svg.select("#legend-big")
    .attr("r", sqrtScale(250000));

  svg.select("#legend-mid")
    .attr("r", sqrtScale(100000));

  svg.select("#legend-small")
    .attr("r", sqrtScale(25000));

  svg.append("text")
    .attr("class", "legend-big-text")
    .attr("x","20%")
    .attr("y", "55.5%")
    .text("250K")
    .style("font-weight", "400");

  svg.append("text")
    .attr("class", "legend-mid-text")
    .attr("x","20%")
    .attr("y", "58.5%")
    .text("100K")
    .style("font-weight", "400");

  svg.append("text")
    .attr("class", "legend-small-text")
    .attr("x","20%")
    .attr("y", "62.5%")
    .text("25K")
    .style("font-weight", "400");

  svg.append("text")
    .attr("class", "color-title")
    .attr("x","20%")
    .attr("y", "77%")
    .text("Vote Share")
    .style("font-family","Poppins")
    .style("font-weight", "600")
    .style("text-transform", "uppercase");

  svg.append("image")
   .attr("class", "legend-image")
   .attr("xlink:href", "assets/legend4.png")
   .attr("x", "-5")
   .attr("y", "77%")
   .attr("width", "40%")
   .attr("height", "15%");

   // MOVE COUNTY NAMES
   function movetext(d) {
     if (d.width < 60) {
       return d.y - 5;
     } return d.y + (d.width/2);
   }

   var montbounds = svg.select('#montgomery').node().getBBox();

   svg.select('#mont-text')
      .attr("y", movetext(montbounds));

   var baltcobounds = svg.select('#baltcounty').node().getBBox();

   svg.select('#baltco-text')
       .attr("y", movetext(baltcobounds));

   var pgbounds = svg.select('#pg').node().getBBox();

   svg.select('#pg-text')
        .attr("y", movetext(pgbounds));

   var annebounds = svg.select('#annearundel').node().getBBox();

   svg.select('#anne-text')
        .attr("y", movetext(annebounds));

    var baltcitybounds = svg.select('#baltcity').node().getBBox();

    svg.select('#baltcity-text')
       .attr("y", movetext(baltcitybounds));

    var fredbounds = svg.select('#frederick').node().getBBox();

    svg.select('#fred-text')
        .attr("y", movetext(fredbounds));

    var carrbounds = svg.select('#carroll').node().getBBox();

    svg.select('#carr-text')
         .attr("y", movetext(carrbounds));

    var harfbounds = svg.select('#harford').node().getBBox();

    svg.select('#harf-text')
         .attr("y", movetext(harfbounds));

   var howbounds = svg.select('#howard').node().getBBox();

   svg.select('#how-text')
      .attr("y", movetext(howbounds));

   var charbounds = svg.select('#charles').node().getBBox();

   svg.select('#char-text')
       .attr("y", movetext(charbounds));

   var garrbounds = svg.select('#garrett').node().getBBox();

   svg.select('#garr-text')
        .attr("y", movetext(garrbounds));

   var allegbounds = svg.select('#allegany').node().getBBox();

   svg.select('#alleg-text')
        .attr("y", movetext(allegbounds));

    var washbounds = svg.select('#washington').node().getBBox();

    svg.select('#wash-text')
       .attr("y", movetext(washbounds));

    var cecilbounds = svg.select('#cecil').node().getBBox();

    svg.select('#cecil-text')
        .attr("y", movetext(cecilbounds));

    var calvbounds = svg.select('#calvert').node().getBBox();

    svg.select('#calv-text')
         .attr("y", movetext(calvbounds));

    var stmarybounds = svg.select('#stmary').node().getBBox();

    svg.select('#stmary-text')
         .attr("y", movetext(stmarybounds));

     var kentbounds = svg.select('#kent').node().getBBox();

     svg.select('#kent-text')
        .attr("y", movetext(kentbounds));

     var queenbounds = svg.select('#queenanne').node().getBBox();

     svg.select('#queen-text')
         .attr("y", movetext(queenbounds));

     var carobounds = svg.select('#caroline').node().getBBox();

     svg.select('#caro-text')
          .attr("y", movetext(carobounds));

     var talbbounds = svg.select('#talbot').node().getBBox();

     svg.select('#talb-text')
          .attr("y", movetext(talbbounds));

      var dorchbounds = svg.select('#dorchester').node().getBBox();

      svg.select('#dorch-text')
         .attr("y", movetext(dorchbounds));

      var wicobounds = svg.select('#wicomico').node().getBBox();

      svg.select('#wico-text')
          .attr("y", movetext(wicobounds));

      var somebounds = svg.select('#somerset').node().getBBox();

      svg.select('#some-text')
           .attr("y", movetext(somebounds));

      var worcbounds = svg.select('#worcester').node().getBBox();

      svg.select('#worc-text')
           .attr("y", movetext(worcbounds));

});

document.addEventListener("DOMContentLoaded", resize);
d3.select(window).on('resize', resize);

function resize() {
	console.log('----resize function----');

  width = parseInt(d3.select('#map-svg').style("width"), 10);
  //width = width - margin.left - margin.right;
	console.log('----resize width----'+width);

  sqrtScale.range([0, (width / 16)]);

  svg.select("#allegany")
      .attr("r", sqrtScale(allegany_votes[0][3] + allegany_votes[1][3]));

  svg.select("#annearundel")
      .attr("r", sqrtScale(annearundel_votes[0][3] + annearundel_votes[1][3]));

  svg.select("#baltcity")
      .attr("r", sqrtScale(baltcity_votes[0][3] + baltcity_votes[1][3]));

  svg.select("#baltcounty")
      //.attr("r", sqrtScale(300000));
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
      //.attr("r", sqrtScale(300000));
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

  function movetext(d) {
    if (d.width < 60) {
      return d.y - 5;
    } return d.y + (d.width/2);
  }

  var montbounds = svg.select('#montgomery').node().getBBox();

  svg.select('#mont-text')
     .attr("y", movetext(montbounds));

  var baltcobounds = svg.select('#baltcounty').node().getBBox();

  svg.select('#baltco-text')
      .attr("y", movetext(baltcobounds));

  var pgbounds = svg.select('#pg').node().getBBox();

  svg.select('#pg-text')
       .attr("y", movetext(pgbounds));

  var annebounds = svg.select('#annearundel').node().getBBox();

  svg.select('#anne-text')
       .attr("y", movetext(annebounds));

   var baltcitybounds = svg.select('#baltcity').node().getBBox();

   svg.select('#baltcity-text')
      .attr("y", movetext(baltcitybounds));

   var fredbounds = svg.select('#frederick').node().getBBox();

   svg.select('#fred-text')
       .attr("y", movetext(fredbounds));

   var carrbounds = svg.select('#carroll').node().getBBox();

   svg.select('#carr-text')
        .attr("y", movetext(carrbounds));

   var harfbounds = svg.select('#harford').node().getBBox();

   svg.select('#harf-text')
        .attr("y", movetext(harfbounds));

  var howbounds = svg.select('#howard').node().getBBox();

  svg.select('#how-text')
     .attr("y", movetext(howbounds));

  var charbounds = svg.select('#charles').node().getBBox();

  svg.select('#char-text')
      .attr("y", movetext(charbounds));

  var garrbounds = svg.select('#garrett').node().getBBox();

  svg.select('#garr-text')
       .attr("y", movetext(garrbounds));

  var allegbounds = svg.select('#allegany').node().getBBox();

  svg.select('#alleg-text')
       .attr("y", movetext(allegbounds));

   var washbounds = svg.select('#washington').node().getBBox();

   svg.select('#wash-text')
      .attr("y", movetext(washbounds));

   var cecilbounds = svg.select('#cecil').node().getBBox();

   svg.select('#cecil-text')
       .attr("y", movetext(cecilbounds));

   var calvbounds = svg.select('#calvert').node().getBBox();

   svg.select('#calv-text')
        .attr("y", movetext(calvbounds));

   var stmarybounds = svg.select('#stmary').node().getBBox();

   svg.select('#stmary-text')
        .attr("y", movetext(stmarybounds));

    var kentbounds = svg.select('#kent').node().getBBox();

    svg.select('#kent-text')
       .attr("y", movetext(kentbounds));

    var queenbounds = svg.select('#queenanne').node().getBBox();

    svg.select('#queen-text')
        .attr("y", movetext(queenbounds));

    var carobounds = svg.select('#caroline').node().getBBox();

    svg.select('#caro-text')
         .attr("y", movetext(carobounds));

    var talbbounds = svg.select('#talbot').node().getBBox();

    svg.select('#talb-text')
         .attr("y", movetext(talbbounds));

     var dorchbounds = svg.select('#dorchester').node().getBBox();

     svg.select('#dorch-text')
        .attr("y", movetext(dorchbounds));

     var wicobounds = svg.select('#wicomico').node().getBBox();

     svg.select('#wico-text')
         .attr("y", movetext(wicobounds));

     var somebounds = svg.select('#somerset').node().getBBox();

     svg.select('#some-text')
          .attr("y", movetext(somebounds));

     var worcbounds = svg.select('#worcester').node().getBBox();

     svg.select('#worc-text')
          .attr("y", movetext(worcbounds));



};
