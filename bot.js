const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("538637523828604940")
setInterval(function() {
channel.send(`لول`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
