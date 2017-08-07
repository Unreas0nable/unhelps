module.exports.run = async (bot, message, args) => {
    //message.delete()
    bot.channels.get('284006673503354881').send("Update.. type $qhelp");
    bot.channels.get('327614673799217152').send("Update.. type $qhelp");

}

module.exports.help = {
    name: "$prefixupdate"
}
