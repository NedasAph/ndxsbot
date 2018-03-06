const Discord =  require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Narys nerastas.");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Pirma turėk moderatoriaus rolę!")
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tas žmogus negali būti išmestas.");


    let banEmbed = new Discord.RichEmbed()
    .setDescription("Ban sistema")
    .setColor("#ba0000")
    .addField("Užblokuotas narys", `${bUser} su ID: ${bUser.id}`)
    .addField("Užblokavo", `<@${message.author.id}> su ID: ${message.author.id}`)
    .addField("Laikas", message.createdAt)
    .addField("Priežastis", bReason);

    let banChannel = message.guild.channels.find(`name`, "botspam");
    if(!banChannel) return message.channel.send("Ban pranešimų kanalas nerastas.");

    message.guild.member(bUser).ban(bReason);
    message.delete().catch(O_o=>{});
    banChannel.send(banEmbed);

    return;
}

module.exports.help = {
  name: "ban"
}
