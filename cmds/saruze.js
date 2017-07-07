module.exports.run = async (bot, message, args) => {
    message.delete()
    message.channel.send({
    file: "https://cdn.discordapp.com/attachments/284006673503354881/329674311008911380/image.png" // Or replace with FileOptions object
});

}

module.exports.help = {
    name: "saruze"
}