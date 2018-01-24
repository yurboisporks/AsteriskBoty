exports.run = (config, client, message, args) => {
	const modRole = message.guild.roles.find("name", config.ModRole);
	if(!modRole){
		message.channel.send('The "Moderator" Role does not exist');
	} else if (!message.guild.me.hasPermission("MUTE_MEMBERS")){
		return message.reply(" I don't Have the permissions to do that sorry.");
	} else if(message.member.roles.has(modRole.id)){
		let role = message.guild.roles.find("name", "Muted");
		if(!role){
			let role = message.guild.createRole({
				name: 'Muted',
				color: '#FF0000',
				permissions: []
			});
		}
		let member = message.mentions.members.first();
		if(member == null){
			message.channel.send('You gave me noone to mute!');
		}else{
			member.addRole(role).catch(console.error);
		}
	}else{
		message.channel.send('You do not have the Permission to do that.');
	}
}