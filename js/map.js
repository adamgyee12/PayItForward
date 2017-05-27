
var svg = d3.select("svg");

var path = d3.geoPath();

d3.json("https://d3js.org/us-10m.v1.json", function(error, us) {
  if (error) throw error;

  svg.append("g")
      .attr("class", "states")
    .selectAll("path")
    .data(topojson.feature(us, us.objects.states).features)
    .enter().append("path")
      .attr("d", path);

  svg.append("path")
      .attr("class", "state-borders")
      .attr("d", path(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; })));
});

// add circles to svg
setTimeout(function() {
var div = d3.select("body").append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

aa = [-122.490402, 37.786453, "i was mentored by my grade school teacher, and she gave me this token after we spoke about self-pride"];
bb = [-72.389809, 40.72728, "gifted this token by a young man i'm a mentor to, whom i see on a daily basis"];
cc = [50.389809, -20.72728, "was given this token by a student who rides the bus i drive"];

var projection = d3.geoMercator();

svg.selectAll("circle")
.data([aa,bb,cc]).enter()
.append("circle")
.attr("cx", function (d) { return projection(d)[0]; })
.attr("cy", function (d) { return projection(d)[1]; })
.attr("r", "8px")
.attr("fill", "#ADD8E6")
.on("mouseover", function(d) {
   div.transition()
     .duration(200)
     .style("opacity", .9);
     console.log(d);
   div.html(d[2])
     .style("left", (d3.event.pageX) + "px")
     .style("top", (d3.event.pageY - 28) + "px");
   })
 .on("mouseout", function(d) {
   div.transition()
     .duration(500)
     .style("opacity", 0);
   });
}, 100);
