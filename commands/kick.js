const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Narys nerastas.");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Pirma turėk moderatoriaus rolę!")
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tas žmogus negali būti išmestas.");


    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Kick sistema")
    .setColor("#e0ff30")
    .addField("Išmestas narys", `${kUser} su ID: ${kUser.id}`)
    .addField("Išmetė", `<@${message.author.id}> su ID: ${message.author.id}`)
    .addField("Laikas", message.createdAt)
    .addField("Priežastis", kReason);

    let kickChannel = message.guild.channels.find(`name`, "botspam");
    if(!kickChannel) return message.channel.send("Kanalas nerastas.");

    message.guild.member(kUser).kick(kReason);
    message.delete().catch(O_o=>{});
    kickChannel.send(kickEmbed);

    return;
}

module.exports.help = {
  name: "kick"
}
