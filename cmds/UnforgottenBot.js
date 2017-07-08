module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You do not have admin!");
        message.author.send("A new function from this command `u?UnforgottenBot` is probably going to be lame or epic.. Who knows! ~ <@84719369069805568>");


}
module.exports.help = {
        name: "UnforgottenBot"
}