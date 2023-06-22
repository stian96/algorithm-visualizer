var treeData = {
    "name": "Root",
    "children": [
        {
            "name": "Node1",
            "children": [
                {
                    "name": "Node1.1",
                    "children": [
                        {
                            "name": "Node1.1.1"
                        },
                        {
                            "name": "Node1.1.2"
                        }
                    ]
                },
                {
                    "name": "Node1.2"
                }
            ]
        },
        {
            "name": "Node2"
        }
    ]
};

// Set the dimensions and margins of the diagram
var margin = {top: 20, right: 90, bottom: 30, left: 90},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// Append a svg placeholder in the div element.
var svg = d3.select("#tree-container").append("svg")
    .attr("width", width + margin-right + margin.left)
    .attr("height", height + margin-top + margin-bottom)
    .append("g")
    .attr("transform", "translate(" + margin-left + "," + margin-top + ")");

var i = 0,
    duration = 750,
    root;

// Declare a tree layout and assign the size.
var treeMap = d3.tree().size([height, width]);

// Assign parent, children, height, depth.
root = d3.hierarchy(treeData, function(d) {return d.children; });
root.x0 = height / 2;
root.y0 = 0;

// Collapse after the second level.
root.children.forEach(collapse);