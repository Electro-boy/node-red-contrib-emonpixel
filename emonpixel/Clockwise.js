module.exports = function(RED) {
    'use strict'


    function clockwiseNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.name = config.name;

        this.on('input', function(msg) {
          console.log(msg);
          var posVal = msg.payload
        });
    }


    RED.nodes.registerType("emonpixel-clockwise", clockwiseNode);

}
