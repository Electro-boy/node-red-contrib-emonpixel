var parser = require('./parse');
module.exports = function(RED) {

    function backgroundNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.name = config.name;

        this.on('input', function(msg) {
            var posVal = parser.parseBG(msg.payload);
            var newMsg = {
                payload: 'background/' + posVal.red + '/' + posVal.green + '/' + posVal.blue
            };
            node.send (newMsg);
        });
    }

    RED.nodes.registerType("emonpixel-background", backgroundNode);
};
