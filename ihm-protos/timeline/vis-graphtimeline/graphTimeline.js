// import vis from "../basic/bower_components/vis/dist/vis";


class GraphTimeline {


    constructor(container, graph, options) {
        this.timeline = new vis.Timeline(container, graph.nodes, options);
        var items = this.getTimelineItems();
        this.drawArrow(items[1], items[2])
        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        var LineGraph = new LineGraph(this.timeline.body, options)
        // items.forEach(function(item){
        //     console.log(item.content);
        // });
    }

    getTimelineItems() {
        var items = this.timeline.itemSet.items;
        for (var key in items) {
            if (items.hasOwnProperty(key)) {
                console.log(key + " -> " + items[key].content)
            }

        }
        return items;
    }

    drawArrow(startNode, endNode) {
        var startPos = 32;
        var endPos = 500;
        // this.timeline.shape.draw
        // //Make an SVG Container
        // var svgContainer = d3.select("body").append("svg")
        //                                     .attr("width", 200)
        //                                     .attr("height", 200);
        //
        // //Draw the line
        // var line = svgContainer.append("line")
        //                          .attr("x1", 5)
        //                          .attr("y1", 5)
        //                          .attr("x2", 50)
        //                          .attr("y2", 50)
        //                          .attr("stroke-width", 2)
        //                          .attr("stroke", "black");
        
    }
}
