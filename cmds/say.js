module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You do not have admin!");
            if(args.length === 1){
                message.delete()
                message.channel.send(args.join(" ").substring(0));
                bot.channels.get('328225959117455362').sendMessage("**" + message.author.username + ":" + " u!say " + args.join(" ").substring(0) + "**");

            }
}
module.exports.help = {
    name: "say"
}