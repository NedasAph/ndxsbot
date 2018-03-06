const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //s-mute @user 1s/m/h/d/

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Narys nerastas.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Šio žmogaus užmutinti negalima!");
  let muterole = message.guild.roles.find(`name`, "Užtildytas");
// Kuria rolę
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Užtildytas",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
            SNED_MESSAGES: false,
            ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //Baigia kurti
  let mutetime = args[1];
  if(!mutetime) return message.reply("Prirašyk kiek laiko nori užtildyti!");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> buvo užtildytas ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> buvo atitildytas`)
  }, ms(mutetime));

  message.delete().catch(O_o=>{});
//Baigiasi modulis
}

module.exports.help = {
  name: "mute"
}
