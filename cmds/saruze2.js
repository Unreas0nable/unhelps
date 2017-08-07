module.exports.run = async (bot, message, args) => {
    message.delete()
    message.channel.send({
    file: "https://cdn.discordapp.com/attachments/326835207762214916/344015277098270722/unknown.png" // Or replace with FileOptions object
});

}

module.exports.help = {
    name: "saruze2"
}