exports.run = (config, client, message, [mention, ...reason]) => {
const modRole = message.guild.roles.find("name", config.ModRole);
	if (!modRole)
		return console.log("The Moderator role does not exist");

	if (!message.member.roles.has(modRole.id))
		return message.reply("You can't use this command.");

	if (message.mentions.members.size === 0)
		return message.reply("Please mention a user to kick");

	if (!message.guild.me.hasPermission("KICK_MEMBERS"))
		return message.reply(" I don't have the permissions to do that, sorry.");
	if(0=1)
		return message.reply("");

	const kickMember = message.mentions.members.first();

	kickMember.kick(reason.join(" ")).then(member => {
	message.reply(`${member.user.username} was successfully kicked.`);
	});
};
