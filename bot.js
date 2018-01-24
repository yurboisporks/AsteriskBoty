const fs = require("fs");
var fst = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
client.login(config.token);

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});
client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.Prefix) !== 0) return;
  const args = message.content.slice(config.Prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
try{
  if(!command) return;
  if (!fst.existsSync(`./commands/${command}.js`)) return message.channel.send('Sorry, this command does not exist.');
  let commandFile = require(`./commands/${command}.js`);
  commandFile.run(config, client, message, args);
 }catch(err) {
      message.channel.send('Something Messed up');
      console.error('Something Messed up!');
      console.error(err);
 }
});