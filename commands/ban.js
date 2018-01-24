exports.run = (config, client, message, [mention, ...reason]) => {
const modRole = message.guild.roles.find("name", config.ModRole);
	if (!modRole)
		message.channel.send("The Moderator role does not exist");

	if (!message.member.roles.has(modRole.id))
		return message.reply("You can't use this command.");

	if (message.mentions.members.size === 0)
		return message.reply("Please mention a user to ban");

	if (!message.guild.me.hasPermission("BAN_MEMBERS"))
		return message.reply(" I don't Have the permissions to do that sorry.");

	const banMember = message.mentions.members.first();

	banMember.ban(reason.join(" ")).then(member => {
	message.reply( `THE BAN HAMMER HAS FALLEN, "${member.user.username}" was succesfully banned. :)`);
	});
};