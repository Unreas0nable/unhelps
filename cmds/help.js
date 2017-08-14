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
            "shows the server picture - `$icon`")
            // .addField("mute",
            // "only permitted to Admin roles to mute a user **working on removing their current roles**")
            .addField("ping",
            "replies pong, along with latency|ms - `$ping`")
            .addField("qhelp",
            "will show list of quote commands `$qhelp`")
            .addField("~~say~~",
            "~~will repeat after what you said!~~")
            .addField("serverinfo",
            "tells the information of a chat server - `$serverinfo`")
            .addField("stats",
            "shows how many users, channels, and servers the bot is connected to.. - `$stats`")
            .addField("tag",
            "You must type `$tag mention a user` to tag.. It will send them a direct message saying `You have been tagged by <insert tagger here>` ")
            .addField("test",
            "**Beep Boop** `Try it out`")
            .addField("update",
            "sends you the update logs via dm - `$update`")
            // .addField("unmute",
            // "only permitted to Admin roles to unmute a user")
            .addField("uptime",
            "shows how long has Saki been online. - `$uptime`")
            .addField("userinfo",
            "shows your discord info, created date, etc. - `$userinfo`")
            .addField("End of Help Panel",
            "There will be more commands, just not worked on yet.")
            .addField("$",
            "will send you a message or an error in the server.");

        message.author.send({embed: embed});
        message.reply("Please check your DM!").then(message => message.delete(5000));

}

module.exports.help = {
    name: "help"
}
