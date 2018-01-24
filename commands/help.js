exports.run = (config, client, message, args) => {
	message.channel.send({embed: {
		color: 3447003,
		author: {
			name: client.user.username,
			icon_url: client.user.avatarURL
		},
		title: ('-----[Help]----'),
		description: ('Here is some help for the bot'),
		fields: [{
			name: ('Commands:'),
			value: ('8Ball, ban, embed, help, kick, mute, unmute, ping, report, say, spam')
		},
		{
			name: ('Contact'),	
			value: ('[Discord Server](https://discord.gg/Aw63Fhu)')
		}],
		footer: {
			icon_url: client.user.avatarURL,
			text: "AsteriskBot 2018"
		}
	}});
}