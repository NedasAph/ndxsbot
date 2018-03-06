const Discord = require("discord.js");
const fs = require("fs");
let saidai = require("../saidai.json");

module.exports.run = async (bot, message, args) => {
  if(!saidai[message.author.id]){
    return message.reply("Tu neturi pakankamai saidų!")
  }

  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

  if(!saidai[pUser.id]){
    saidai[pUser.id] = {
      saidai: 0
    }
  }

  let pSaidai = saidai[pUser.id].coins;
  let sSaidai = saidai[message.author.id].coins;

  if(sSaidai < args[0]) return message.reply("Neužtenka saidų, kad prasiųstum!");

  saidai[message.author.id] = {
    saidai: sSaidai - parseInt(args[1])
  };

  saidai[pUser.id] = {
    saidai: pSaidai + parseInt(args[1])
  };

  message.channel.send(`${message.author} davė ${pUser} ${args[1]} saidų`);

  fs.writeFile("../saidai.json", JSON.stringify(saidai), (err) => {
    if(err) console.log(err)
  });
}

module.exports.help = {
  name: "duoti"
}
