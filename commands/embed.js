exports.run = (config, client, message, args) => {
	if(args[0] != null) {
		message.delete();
		message.channel.send({embed: {
  			color: 3447003,
  			description:   (args.join(" "))
		}});
	}
};