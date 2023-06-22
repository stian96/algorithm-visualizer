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