module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You do not have admin!");
    await message.author.send("I am shutting down now");
    await bot.channels.get('328225959117455362').send("I am shutting down now - Error 404");
    process.exit();

}

module.exports.help = {
        name: "shutdown"
}