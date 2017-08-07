module.exports.run = async (bot, message, args) => {
    //message.delete()
    bot.channels.get('284006673503354881').send("There will probably be some functions that will not work, entering maintenance mode.");
    bot.channels.get('327614673799217152').send("There will probably be some functions that will not work, entering maintenance mode.");

}

module.exports.help = {
    name: "$maintenance"
}
