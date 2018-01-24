exports.run = (config, client, message, mention) => {
	message.delete();
	message.channel.send(mention);
	message.channel.send(mention);
	message.channel.send(mention);
	message.channel.send(mention);
	message.channel.send(mention);	
};