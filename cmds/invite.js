module.exports.run = async (bot, message, args) => {
            message.delete()
            message.reply("look at your DM!");
            message.author.send("https://discord.gg/2tFxcdd - Unreas0nable Test Server");
}
module.exports.help = {
    name: "invite"
}