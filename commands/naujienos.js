const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = message.guild.displayAvatarURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("SideMC")
    .setColor("#88af49")
    .setThumbnail(bicon)
    .addField("NAUJIENOS", "`Visas serverio naujienas gali rasti teksto kanale: #naujienos. " + "Dar daugiau naujienų mūsų forume: http://sidemc.lt/`");

    return message.channel.send(serverembed);
}

module.exports.help = {
  name: "naujienos"
}
