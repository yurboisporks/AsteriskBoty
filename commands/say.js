exports.run = (config, client, message, args) => {
	if(args[0] != null){
		message.delete();
		let text = args.slice(0).join(" ");
		message.channel.send(text);
	} else{
		message.delete();
		message.channel.send('Tell me what to say next time!');
	}
};