const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    
        let embed = new Discord.RichEmbed()
            .setTitle("Help Panel")
            .setDescription("Use $ to execute a command shown below")
            .setColor("#000000")
            //.addField("ban",
            //"only permitted to Admin roles to ban user")
            .addField("calc",
            "used as a calculator - there's no prefix for this command `calc 10*10`")
            .addField("fortune",
            "$fortune `insert a sentence or a few words`")
            .addField("icon",
            "shows the server picture")
            // .addField("mute",
            // "only permitted to Admin roles to mute a user **working on removing their current roles**")
            .addField("ping",
            "replies pong, along with latency|ms")
            .addField("qhelp",
            "will show list of quote commands")
            .addField("~~say~~",
            "~~will repeat after what you said!~~")
            .addField("stats",
            "shows how many users, channels, and servers the bot is connected to..")
            .addField("test",
            "**Beep Boop** `Try it out`")
            .addField("ul",
            "ul means update logs.")
            // .addField("unmute",
            // "only permitted to Admin roles to unmute a user")
            .addField("uptime",
            "shows how long has Saki been online.")
            .addField("userinfo",
            "shows your discord info, created date, etc.")
            .addField("End of Help Panel",
            "There will be more commands, just not worked on yet.")
            .addField("$",
            "will send you a message or an error in the server.");

        message.author.send({embed: embed});
        message.reply("Please check your DM!");

}

module.exports.help = {
    name: "help"
}
