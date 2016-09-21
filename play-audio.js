module.exports = function(RED) {
    function PlayAudioNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {
            if (Buffer.isBuffer(msg.payload)) {
                RED.comms.publish("playaudio", msg.payload);
            }
            else if (typeof msg.payload === "string") {
                RED.comms.publish("playtts", msg.payload);
            }
        });
    }
    RED.nodes.registerType("play audio", PlayAudioNode);
}
