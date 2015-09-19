module.exports = function(RED) {
	function  PlayAudioNode(config) {
		RED.nodes.createNode(this,config);
		var node = this;
		this.on('input', function(msg) {
			RED.comms.publish("playaudiows", msg.payload);
		});
	}
	RED.nodes.registerType("play audio", PlayAudioNode);
}

