const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setAuthor("Botą sukūrė: @nedaxs#3653")
    .setColor("#88af49")
    .setThumbnail(bicon)
    .addField("s-ip", "`Serverio IP adresas`")
    .addField("s-info", "`Discord ir Minecraft serverio informacija`")
    .addField("s-naujienos", "`Visos naujienos susijusios su SideMC`")
    .addField("s-web", "`Serverio svetainė`")
    .addField("s-report", "`Pranešti apie narį (naudojimas: s-report @nick [priežastis])`")
    .addField("s-saidai", "`Saidų balansas. SAIDAI yra serverio valiuta!`")
    .addField("s-duoti", "`Duoti saidų kitam žaidėjui (naudojimas: s-duoti @nick [suma])`");

    return message.channel.send(botembed);
}

module.exports.help = {
  name: "help"
}
