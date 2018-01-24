exports.run = (config, client, message, args) => {
	message.channel.send('Pong! -> '+ message.client.ping);
}