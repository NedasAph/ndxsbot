const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
  // s-klausimelis <klausimas>
  if(!args[1]) return message.reply("Paklausk ilgesnio klausimo!");
  let replies = ["O tai ne", "Tai jo jo", "Nežinau", "Nelabai", "Ne!!!", "Iš kur man žinoti??"];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(1).join(" ");

  let klausembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#88af49")
  .addField("Klausimas", question)
  .addField("Atsakymas", replies[result]);

  message.channel.send(klausembed)

}

module.exports.help = {
  name: "klausimelis"
}
