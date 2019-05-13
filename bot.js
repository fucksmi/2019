const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("564090121918480445")
setInterval(function() {
channel.send(`رمضان كريم`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
