﻿const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
        let embed = new Discord.RichEmbed()
            .setTitle("Help Panel")
            .setDescription("Use u? to execute a command shown below")
            .setColor("#DB3498")
            .addField("capri",
	    "---------")
	    .addField("help",
            "to show the normal commands")
	    .addField("pokohknox",
	    "---------")
            .addField("saruze",
            "---------")
            .addField("End of Help Panel",
            "There will be more quotes, message Unfσrgσττεn [Discord.js]#9982 if you want your quote to be requested.");

        message.channel.send({embed: embed});

}

module.exports.help = {
    name: "qhelp"
}