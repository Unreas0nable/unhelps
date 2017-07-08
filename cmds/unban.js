module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You do not have admin!");
        let user = args[0];
        if (!user) return message.reply('You must supply a `User Resolvable`, such as a `user id.`').catch(console.error);
            message.delete();
            message.guild.unban(user);
            message.channel.send("**" + "<@" + args.join(" ").substring(0) + ">" +  "'s ban has been lifted**");
}

module.exports.help = {
    name: "unban"
}