var startTime = Date.now();

const Discord = module.require("discord.js");


module.exports.run = async (bot, message, args) => {

var now = Date.now();
var msec = now - startTime;
      console.log("Uptime is " + msec + " milliseconds");
var days = Math.floor(msec / 1000 / 60 / 60 / 24);
      msec -= days * 1000 * 60 * 60 * 24;
var hours = Math.floor(msec / 1000 / 60 / 60);
      msec -= hours * 1000 * 60 * 60;
var mins = Math.floor(msec / 1000 / 60);
      msec -= mins * 1000 * 60;
var secs = Math.floor(msec / 1000);
var timestr = "";
      if(days > 0) {
        timestr += days + " days ";
      }
      if(hours > 0) {
        timestr += hours + " hours ";
      }
      if(mins > 0) {
        timestr += mins + " minutes ";
      }
      if(secs > 0) {
        timestr += secs + " seconds ";
      }
    let embed = new Discord.RichEmbed()
    .setTitle('Uptime')
    .setDescription("**" + timestr + "**")
    .setColor("#000000")
    message.channel.sendEmbed(embed);

      //message.channel.send("```Uptime: " + timestr);
    }
module.exports.help = {
    name: "uptime"
}
