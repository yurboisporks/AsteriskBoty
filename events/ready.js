exports.run = (client) => {
  console.log(`Ready to use on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
  client.user.setGame('**help');
}