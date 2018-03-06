const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let bicon = message.guild.displayAvatarURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("SideMC")
    .setColor("#88af49")
    .setThumbnail(bicon)
    .addField("Serverio statusas", "`UŽDARYTAS`")
    .addField("Discord serveryje žmonių", message.guild.membersCount);

    return message.channel.send(serverembed);
}

module.exports.help = {
  name: "info"
}
