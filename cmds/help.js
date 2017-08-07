const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
        let embed = new Discord.RichEmbed()
            .setTitle("Help Panel")
            .setDescription("Use $ to execute a command shown below")
            .setColor("#DB3498")
            //.addField("ban",
            //"only permitted to Admin roles to ban user")
            .addField("fortune",
            "$fortune `insert a sentence or a few words`")
            .addField("icon",
            "shows your profile picture")
            .addField("invite",
            "will DM you the invite to Unreas0nable Test Server")
            .addField("mute",
            "only permitted to Admin roles to mute a user **working on removing their current roles**")
            .addField("ping",
            "replies pong, along with latency|ms")
            .addField("qhelp",
            "will show list of quote commands")
            .addField("say",
            "will repeat after what you said!")
            .addField("stats",
            "shows how many users, channels, and servers the bot is connected to..")
            .addField("test",
            "**Beep Boop** `Try it out`")
            .addField("$",
            "will send you a message or an error in the server.")
            //.addField("UnforgottenBot",
            //"try it out!")
            .addField("unmute",
            "only permitted to Admin roles to unmute a user")
            .addField("userinfo",
            "shows your discord info, created date, etc.")
            .addField("End of Help Panel",
            "There will be more commands, just not worked on yet.");

        message.author.send({embed: embed});
        message.reply("Please check your DM!");

}

module.exports.help = {
    name: "help"
}
