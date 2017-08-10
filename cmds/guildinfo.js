const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle('Server Information')
    .setDescription(`**Server Owner: <@` + message.guild.owner.id + ">\n" +
    message.guild.channels.size + " channels\n" +
    message.guild.memberCount + " users in this server\n" +
    message.guild.roles.size + " roles\n")
    .setImage(message.guild.avatarURL)
    .setColor("#000000")
    message.channel.sendEmbed(embed);
}
module.exports.help = {
    name: "serverinfo"
}