const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
let saidai = require("./saidai.json");

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} užsikrovė`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} prisijungęs prie ${bot.guilds.size} serverių!`);
  bot.user.setActivity("sidemc.lt | s-help", {type: "WATCHING"});

});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  if(!saidai[message.author.id]){
    saidai[message.author.id] = {
      saidai: 0
    }
  }

  let coinAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;

  if(coinAmt === baseAmt){
    saidai[message.author.id] = {
      saidai: saidai[message.author.id].saidai + coinAmt
    };
  fs.writeFile("./saidai.json", JSON.stringify(saidai), (err) => {
    if (err) console.log(err)
  });
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#88af49")
  .addField("💰", `duota ${coinAmt} saidų`);

  message.channel.send(coinEmbed).then(msg => {msg.delete(2500)});
  }

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});

bot.login(tokenfile.token);
