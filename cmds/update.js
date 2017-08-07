module.exports.run = async (bot, message, args) => {
    //message.delete()
    bot.channels.get('284006673503354881').send("Tag me for a few updates.");
    bot.channels.get('327614673799217152').send("Tag me for a few updates.");

}

module.exports.help = {
    name: "$update"
}