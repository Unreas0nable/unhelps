module.exports.run = async (bot, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You do not have admin!");
        //if(hasRole(message.member, "Moderator") || hasRole(message.member, "Owner") || hasRole(message.member, "Tester") || hasRole(message.member, "3rd Arashikage")){
            message.channel.send(`**Beep Boop** ${Math.round(bot.ping)}ms`);            
        }

module.exports.help = {
    name: "test"
}