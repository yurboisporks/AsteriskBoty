exports.run = (config, client, message, args) => {
	const modRole = message.guild.roles.find("name", config.ModRole);
	if(!modRole){
		message.channel.send('The "Moderator" role does not exist');
	} else if (!message.guild.me.hasPermission("MUTE_MEMBERS")){
		return message.reply(" I don't have the permissions to do that, sorry.");
	} else if(message.member.roles.has(modRole.id)){
		let role = message.guild.roles.find("name", "Muted");
		let member = message.mentions.members.first();
		if(member == null){
			message.channel.send('You gave me no one to unmute!');
		}else if(role == null){
			message.channel.send('Please create a role called "Muted"');
		}else{
			member.removeRole(role).catch(console.error);
		}
	}else{
		messgae.channel.send('You do not have the permissions to do that.');
	}
}
