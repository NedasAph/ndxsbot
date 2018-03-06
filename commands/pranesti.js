const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
  //s-pranesti Labas
  //{BOTAS} Labas
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Neturi teisių");
  let botMsg = args.join(" ");
  message.delete().catch();
  message.channel.send(botMsg);
}

module.exports.help = {
  name: "pranesti"
}
