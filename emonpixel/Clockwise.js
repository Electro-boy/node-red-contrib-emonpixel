var parser = require('./parse');
module.exports = function(RED) {

    function clockwiseNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.name = config.name;
        this.color = {
            'red': parseInt(config.red),
            'green': parseInt(config.green),
            'blue': parseInt(config.blue)
        };


        this.on('input', function(msg) {
            var newMsg = {
                payload: 'c' + parser.makeDialString(this.color,msg.payload)
            };
            node.send (newMsg);
        });

    }


    RED.nodes.registerType("emonpixel-clockwise", clockwiseNode);

};
