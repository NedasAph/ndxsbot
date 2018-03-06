const Discord = require("discord.js");
let saidai = require("../saidai.json");

module.exports.run = async (bot,message,args) => {
  //s-saidai
  if(!saidai[message.author.id]){
    saidai[message.author.id] = {
      coins: 0
    };
  }

  let uCoins = saidai[message.author.id].saidai;

  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#88af49")
  .addField("💰", `Tu turi: ${uCoins}`);

  message.delete().catch(O_o=>{});
  message.channel.send(coinEmbed).then(msg => {msg.delete(2500)});

}

module.exports.help = {
  name: "saidai"
}
