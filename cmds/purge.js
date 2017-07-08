module.exports.run = async (bot, message, args) => {
let messagecount = parseInt(numberofmessages);
  message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));

}

module.exports.help = {
    name: "purge"
}