const Discord = module.require("discord.js");
module.exports.run = async (bot, message, args) => {
    if(message.author.id !== '84719369069805568') return;

    bot.user.setStatus(args.join(" "));
}

module.exports.help = {
    name: "status"
}