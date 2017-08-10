const Discord = module.require("discord.js");
module.exports.run = async (bot, message, args) => {
    if(message.author.id !== '84719369069805568') return;
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("This is the user's info!")
            .setColor("#000000")
            .addField("Full Username", message.author.tag)
            .addField("ID", message.author.id)
            .addField("Created At", message.author.createdAt)
            //.addField("Is in", message.author.mutualGuild)
            .setImage('https://cdn.discordapp.com/attachments/344962382399012865/345028243830865922/image.jpg');

        message.channel.send({embed: embed});

}

module.exports.help = {
    name: ".userinfo"
}