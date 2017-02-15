var parser = require('./parse');
module.exports = function(RED) {

    function anticlockwiseNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.name = config.name;
        this.color = {
            'red': parseInt(config.red),
            'green': parseInt(config.green),
            'blue': parseInt(config.blue)
        };

        this.on('input', function(msg) {
            node.send({
                payload: 'a' + parser.makeDialString(this.color, msg.payload)
            });
        });
    }

    RED.nodes.registerType("emonpixel-anticlockwise", anticlockwiseNode);

};
