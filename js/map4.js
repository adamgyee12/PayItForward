
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

  a = [-122.490402, 37.786453, "i was mentored by my grade school teacher, and she gave me this token after we spoke about self-pride"];
  b = [-72.389809, 40.72728, "gifted this token by a young man i'm a mentor to, whom i see on a daily basis"];
  c = [50.389809, -20.72728, "was given this token by a student who rides the bus i drive"];

  d = [0.490402, -40, "one of my soccer players gave this to me after practice"];
  e = [100, 0, "my reading partner gave this to me after we read huckleberry fin 2gether"];
  f = [25, -25.72728, "my school bus driver handed these out to our entire bus one day"];

  g = [-50, -40, "an older student in class gave me this"];
  h = [75, -20, "the lunch lady at my school handed these out on each tray"];
  i = [-100, 35, "my neighbor's son gave me this after we talked in the yard yesterday"];

  j = [-8, -4, "the local police officer gave this to me"];
  k = [38, 19, "my mother's best friend handed this to me during graduation"];
  l = [14, -33, "my mailman left this with me after we talked about dogs"];

  pittsburgh = [110,15,sessionStorage.getItem('notes')];

var projection = d3.geoMercator();

svg.selectAll("circle")
.data([j,k,l,pittsburgh]).enter()
.append("circle")
.attr("cx", function (d) { return projection(d)[0]; })
.attr("cy", function (d) { return projection(d)[1]; })
.attr("r", "0px")
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
   })
.transition().duration(1000).ease(d3.easeBounce)
.attr("r", "10px")
.attr("fill", function(d){
  if (d[0] == 110){
    return "#eccc09";
  } else {
    return "#ADD8E6";
  }
});
}, 500);
