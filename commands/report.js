exports.run = (config, client, message, args) => {
	if(args[0] != null){
		let text = args.slice(0).join(" ");
		console.log('-----[REPORT]-----');
		console.log(' ' + text);
		console.log(' Sent by: ' + message.author);
		console.log(' From: ' + message.guild.name);
		console.log('-----[REPORT]-----');
		message.channel.send('Your report has been sent');
	} else{
		message.channel.send('Tell me what to report next time!');
	}
};