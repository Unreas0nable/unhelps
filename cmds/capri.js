module.exports.run = async (bot, message, args) => {
    message.delete()
    message.channel.send({
    file: "https://cdn.discordapp.com/attachments/284006673503354881/332170946586869762/capri.PNG" // Or replace with FileOptions object
});

}

module.exports.help = {
    name: "capri"
}