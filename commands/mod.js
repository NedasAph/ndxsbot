const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Ši komanda tik moderatoriams!");
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("Moderatorių komandos")
  .setColor("#88af49")
  .setThumbnail(bicon)
  .addField("s-kick", "Išmes narį iš serverio `NAUDOJIMAS: s-kick @nick priežastis`")
  .addField("s-ban", "Užblokuos narį iš serverio `NAUDOJIMAS: s-ban @nick priežastis`")
  .addField("s-mute", "Užtildys narį laikui `NAUDOJIMAS: s-mute @nick 1s/m/h/d`")
  .addField("s-valyti", "Išvalo pokalbio žinutes `NAUDOJIMAS: s-valyti 1-100`");

  return message.channel.send(botembed);
}

module.exports.help = {
  name: "mod"
}
