const Discord = module.require("discord.js");
module.exports.run = async (bot, message, args) => {
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("This is the user's info!")
            .setColor("#000000")
            .addField("Full Username", message.author.tag)
            .addField("ID", message.author.id)
            .addField("Created At", message.author.createdAt)
            //.addField("Is in", message.member.mutualGuilds)
            .addField("Image", message.author.avatarURL)
            .setImage(message.author.avatarURL);

        message.channel.send({embed: embed});

}

module.exports.help = {
    name: "userinfo"
}