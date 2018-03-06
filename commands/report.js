const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Narys nerastas.");
    let reason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Žaidėjų nusiskundimų sistema")
    .setColor("#88af49")
    .addField("Narys praneštas", `${rUser} su ID: ${rUser.id}`)
    .addField("Pranešė:", `${message.author} su ID: ${message.author.id}`)
    .addField("Kanalas:", message.channel)
    .addField("Laikas:", message.createdAt)
    .addField("Priežastis:", reason);

    let reportschannel = message.guild.channels.find(`name`, "m-pokalbiai");
    if(!reportschannel) return message.channel.send("Kanalas nerastas.");

    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    return;
}

module.exports.help = {
  name: "report"
}
