// tree map start
var root = {
  "name": "TreeMap",
  "color": "#6B74DB",
  "children": [{
    "name": "Step-1.1",
    "fullname": "Full Name Step-1.1",
    "color": "#68B771",
    "value": 25,
    "text": "100 K Spent",
    "children": [{
      "name": "Step-2.1",
      "fullname": "Full Name Step-2.1",
      "color": "#68B771",
      "value": 25,
      "text": "100 K Spent",
      "children": [{
        "name": "Step-3.1",
        "fullname": "Full Name Step-3.1",
        "color": "#68B771",
        "value": 25,
        "text": "100 K Spent"
      }]
    }]
  }, {
    "name": "Step-1.2",
    "fullname": "Full Name Step-1.2",
    "color": "#F370FF",
    "value": 100,
    "text": "2.56 M Spent",
    "children": [{
      "name": "Step-2.1",
      "fullname": "Full Name Step-2.1",
      "color": "#68B771",
      "value": 100,
      "text": "1.96 M Spent",
      "children": [{
        "name": "Step-3.1",
        "fullname": "Full Name Step-3.1",
        "color": "#68B771",
        "value": 100,
        "text": "601.14 K Spent"
      }, {
        "name": "Step-3.2",
        "fullname": "Full Name Step-3.2",
        "color": "#F370FF",
        "value": 67,
        "text": "345.64 K Spent"
      }, {
        "name": "Step-3.3",
        "fullname": "Full Name Step-3.3",
        "color": "#E56D4B",
        "value": 62,
        "text": "306.27 K Spent"
      }, {
        "name": "Step-3.4",
        "fullname": "Full Name Step-3.4",
        "color": "#F99857",
        "value": 49,
        "text": "202.29 K Spent"
      }, {
        "name": "Step-3.5",
        "fullname": "Full Name Step-3.5",
        "color": "#6BACDB",
        "value": 37,
        "text": "107.47 K Spent"
      }, {
        "name": "Step-3.6",
        "fullname": "Full Name Step-3.6",
        "color": "#86B768",
        "value": 36,
        "text": "101.74 K Spent"
      }, {
        "name": "Step-3.7",
        "fullname": "Full Name Step-3.7",
        "color": "#904CFF",
        "value": 35,
        "text": "97.63 K Spent"
      }, {
        "name": "Step-3.8",
        "fullname": "Full Name Step-3.8",
        "color": "#E54B77",
        "value": 32,
        "text": "73.34 K Spent"
      }, {
        "name": "Step-3.9",
        "fullname": "Full Name Step-3.9",
        "color": "#F95767",
        "value": 31,
        "text": "60.44 K Spent"
      }, {
        "name": "Step-3.10",
        "fullname": "Full Name Step-3.10",
        "color": "#6BACDB",
        "value": 29,
        "text": "48.42 K Spent"
      }, {
        "name": "Step-3.11",
        "fullname": "Full Name Step-3.11",
        "color": "#86B768",
        "value": 25,
        "text": "11.76 K Spent"
      }]
    }, {
      "name": "Step-2.2",
      "fullname": "Full Name Step-2.2",
      "color": "#F370FF",
      "value": 25,
      "text": "604.41 K Spent",
      "children": [{
        "name": "Step-3.1",
        "fullname": "Full Name Step-3.1",
        "color": "#68B771",
        "value": 100,
        "text": "400.78 K Spent"
      }, {
        "name": "Step-3.2",
        "fullname": "Full Name Step-3.2",
        "color": "#F370FF",
        "value": 25,
        "text": "203.63 K Spent"
      }]
    }]
  }, {
    "name": "Step-1.3",
    "fullname": "Full Name Step-1.3",
    "color": "#E56D4B",
    "value": 42,
    "text": "689.28 K Spent",
    "children": [{
      "name": "Step-2.1",
      "fullname": "Full Name Step-2.1",
      "color": "#68B771",
      "value": 25,
      "text": "689.28 K Spent",
      "children": [{
        "name": "Step-3.1",
        "fullname": "Full Name Step-3.1",
        "color": "#68B771",
        "value": 100,
        "text": "210 K Spent"
      }, {
        "name": "Step-3.2",
        "fullname": "Full Name Step-3.2",
        "color": "#F370FF",
        "value": 76,
        "text": "152.04 K Spent"
      }, {
        "name": "Step-3.3",
        "fullname": "Full Name Step-3.3",
        "color": "#E56D4B",
        "value": 65,
        "text": "123.39 K Spent"
      }, {
        "name": "Step-3.4",
        "fullname": "Full Name Step-3.4",
        "color": "#F99857",
        "value": 47,
        "text": "78.67 K Spent"
      }, {
        "name": "Step-3.5",
        "fullname": "Full Name Step-3.5",
        "color": "#6BACDB",
        "value": 43,
        "text": "69.58 K Spent"
      }, {
        "name": "Step-3.6",
        "fullname": "Full Name Step-3.6",
        "color": "#86B768",
        "value": 29,
        "text": "33 K Spent"
      }, {
        "name": "Step-3.7",
        "fullname": "Full Name Step-3.7",
        "color": "#904CFF",
        "value": 25,
        "text": "22.60 K Spent"
      }]
    }]
  }]
};
Height = $(window).height() - 50;

function wraponly(textelement, boxelement, x_padding, y_padding, line_padding) {
  var x_pos = parseInt(boxelement.getAttributeNS(null, 'x')),
    y_pos = parseInt(boxelement.getAttributeNS(null, 'y')),
    boxwidth = parseInt(boxelement.getAttributeNS(null, 'width')),
    fz = parseInt(window.getComputedStyle(textelement)['font-size']); // We use this to calculate dy for each TSPAN.
  x_padding = parseInt(x_padding);
  y_padding = parseInt(y_padding);

  var line_height = fz + line_padding;

  var testnode = textelement.cloneNode(false); // false means discard any child nodes (ie. TSPANs and text)
  testnode.setAttributeNS(null, 'visibility', 'hidden'); // Comment this out to debug.
  var tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
  var textnode = document.createTextNode(textelement.textContent);
  tspan.appendChild(textnode);
  testnode.appendChild(tspan);
  var tester = document.getElementsByTagName('svg')[0].appendChild(testnode); // tester is a pointer to the SVG node

  var words = textelement.textContent.split(" "),
    line = line2 = "",
    linecounter = 0,
    testwidth;

  while (textelement.firstChild) textelement.removeChild(textelement.firstChild); // This works in Chrome and IE while innerHTML = "" only works in Chrome.

  for (var n = 0; n < words.length; n++) {

    line2 = line + words[n] + " ";
    testnode.textContent = line2;
    testwidth = testnode.getBBox().width;

    if ((testwidth + 2 * x_padding) > boxwidth) {
      tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
      tspan.setAttributeNS(null, 'x', 0); // Set x to 0 to align text left and ensure that translate(x,y) positions correctly.
      tspan.setAttributeNS(null, 'dy', line_height); // Ensures each line is below the previous one.

      textnode = document.createTextNode(line);
      tspan.appendChild(textnode);
      textelement.appendChild(tspan);

      line = words[n] + " ";
      linecounter++;
    } else {
      line = line2;
    }
  }

  tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan'); // Don't use null here or it will make a HTML node instead of an SVG one, which won't show up although the element looks fine in the browser Elements tab.
  tspan.setAttributeNS(null, 'x', 0);
  tspan.setAttributeNS(null, 'dy', line_height);

  textnode = document.createTextNode(line);
  tspan.appendChild(textnode);

  textelement.appendChild(tspan);
  textelement.removeAttributeNS(null, 'x');
  textelement.removeAttributeNS(null, 'y');
  textelement.setAttributeNS(null, 'transform', "translate(" + parseInt(x(x_pos) + x_padding) + "," + parseInt(y(y_pos) + y_padding) + ")");
  testnode.parentNode.removeChild(testnode);

  return linecounter;
}

var margin = {
    top: 20,
    right: 0,
    bottom: 0,
    left: 0
  },
  width = $('#chart').width(),
  height = Height,
  formatNumber = d3.format(",.1f"),
  transitioning
x_padding = 6,
  y_padding = 0,
  line_padding = 2;

var svg = "";
var grandparent = "";
var x = "";
var y = "";
var treemap = "";

function createSvg() {
  x = d3.scale.linear()
    .domain([0, width])
    .range([0, width]);

  y = d3.scale.linear()
    .domain([0, height])
    .range([0, height]);

  treemap = d3.layout.treemap()
    .children(function(d, depth) {
      return depth ? null : d._children;
    })
    .sort(function(a, b) {

      return a.amount - b.amount;
    })
    .ratio(height / width * 0.5 * (1 + Math.sqrt(5)))
    .round(false)
    .value(function(d) {
      return d.value;
    });

  svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.bottom + margin.top)
    .style("margin-left", -margin.left + "px")
    .style("margin.right", -margin.right + "px")
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .style("shape-rendering", "geometricPrecision");

  grandparent = svg.append("g")
    .attr("class", "grandparent");

  grandparent.append("rect")
    .attr("y", -margin.top) // -20px to force it to appear above the main plotting area.
    .attr("width", width - 500)
    //.attr("rx", "20")
    //.attr("ry", "20")
    .attr("height", margin.top + 10);

  grandparent.append("text")
    .attr("x", 25)
    .attr("y", 6 - margin.top + 3)
    .attr("dy", ".75em");
}

function initialize(root) {
  root.x = root.y = 0;
  root.dx = width;
  root.dy = height;
  root.depth = 0;
}

function accumulate(d) {
  return (d._children = d.children) ? d.amount = d.children.reduce(function(p, v) {
    return p + accumulate(v);
  }, 0) : d.amount;
}

function layout(d) {
  if (d._children) {
    var dummy = treemap.nodes({
      _children: d._children
    });

    d._children.forEach(function(c) {
      c.x = d.x + c.x * d.dx;
      c.y = d.y + c.y * d.dy;
      c.dx *= d.dx;
      c.dy *= d.dy;
      c.parent = d;
    });
  }
}

function dennnn(d) {
  return d.parent ? dennnn(d.parent) + " > " + d.name : d.name
}

function display(d) {

  grandparent
    .datum(d.parent)
    .on("click", transition)
    .select("text")
    .text(dennnn(d));

  var g1 = svg.insert("g", ".grandparent")
    .datum(d)
    .attr("class", "depth");

  var g = g1.selectAll("g")
    .data(d._children)
    .enter().append("g");

  g.filter(function(d) {
      return d._children;
    })
    .classed("children", true)
    .on("click", transition);

  g.append("rect")
    .attr("class", "parent")
    .call(rect)
    //.attr("rx", "20")
    //.attr("ry", "20")
    .style("fill", function(d) {
      return d.color;
    })
    .append("title")
    .text(function(d) {
      return d.fullname;
    });

  g.selectAll(".child")
    .data(function(d) {
      layout(d);
      return d._children || [d];
    })
    .enter().append("rect")
    .attr("class", "child")
    // .attr("rx", "20")
    // .attr("ry", "20")
    .call(rect);

  g.append("text")
    .classed("overlaidText1", true)
    .text(function(d) {
      return d.name;
    })
    .call(middletext1);

  g.append("text")
    .classed("overlaidText", true)
    .text(function(d) {
      return d.text
    })
    .call(middletext); // New function based on Mike's text() original.

  function transition(d) {

    if (transitioning || !d) return;
    transitioning = true;

    var g2 = display(d), // g2 is the view to be transitioned to, with the clicked d (node) as the root.
      t1 = g1.transition().duration(1000), // g1 is node that contains all the graphics apart from the grandparent. So it's the current view.
      t2 = g2.transition().duration(1000).delay(0);

    x.domain([d.x, d.x + d.dx]);
    y.domain([d.y, d.y + d.dy]);

    svg.style("shape-rendering", null); // Why bother when lines are not diagonal?

    svg.selectAll(".depth").sort(function(a, b) {
      return a.depth - b.depth;
    });

    g2.selectAll("text")
      .style("fill-opacity", 0);

    t1.selectAll("text:not(.overlaidText)").call(middletext1).style("fill-opacity", 0);
    t2.selectAll("text:not(.overlaidText)").call(middletext1).style("fill-opacity", 1);
    t1.delay(0).selectAll(".overlaidText").call(middletext).style("fill-opacity", 0);
    t2.delay(0).selectAll(".overlaidText").call(middletext).style("fill-opacity", 1);
    t1.selectAll("rect").call(rect);
    t2.selectAll("rect").call(rect);

    t1.remove().each("end", function() {
      svg.style("shape-rendering", "geometricPrecision");
      transitioning = false;
    });
  }
  return g;
}

function text(text) {
  text.attr("x", function(d) {
      return x(d.x) + 6;
    })
    .attr("y", function(d) {
      return y(d.y) + 2;
    });
}

function transformtext(text) {
  text.attr("transform", function(d) {
    var temp = "translate(" + parseInt(x(d.x) + x_padding) + "," + parseInt(y(d.y) + y_padding) + ")";
    return temp
  });
}

function middletext(text) {
  text.attr("x", function(d) {
      return x(d.x + d.dx / 2);
    })
    .attr("y", function(d) {
      return y(d.y + d.dy / 2) + 18;
    });
}

function middletext1(text) {
  text.attr("x", function(d) {
      return x(d.x + d.dx / 2);
    })
    .attr("y", function(d) {
      return y(d.y + d.dy / 2) - 3.5;
    });
}

function rect(rect) {
  rect.attr("x", function(d) {
      return x(d.x);
    })
    .attr("y", function(d) {
      return y(d.y) - 6;
    })
    .attr("width", function(d) {
      return x(d.x + d.dx) - x(d.x);
    })
    .attr("height", function(d) {
      return y(d.y + d.dy) - y(d.y);
    })
    .attr("rx", "0px");
}

createSvg();
initialize(root);
accumulate(root);
layout(root);
display(root);
