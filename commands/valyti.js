const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
  // s-valyti [skaičius, kiek žinučių išvalysime viršuje]
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Šios komandos naudoti negali.");
  if(!args[0]) return message.channel.send("Įrašyk kiek žinučių ištrinti");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Ištrinta ${args[0]} pokalbio žinučių`).then(msg => msg.delete(5000));
  })
}

module.exports.help = {
  name: "valyti"
}
