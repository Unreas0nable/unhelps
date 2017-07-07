module.exports.run = async (bot, message, args) => {
    message.delete()
    message.channel.send({
    file: "https://cdn.discordapp.com/attachments/327614673799217152/332126867383386123/unknown.png" // Or replace with FileOptions object
});

}

module.exports.help = {
    name: "pokohknox"
}