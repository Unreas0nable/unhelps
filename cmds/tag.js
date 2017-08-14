//let str = "<@84719369069805568>"; //Just assuming some random tag.

//removing any sign of < @ ! >... 
//the exclamation symbol comes if the user has a nickname on the server.
module.exports.run = async (bot, message, args) => {
let str = "<@" + args.join(" ") + ">";
let id = str.replace(/[<@!>]/g, '');

bot.fetchUser(id)
    .then(user => {user.send("You've been tagged by " + message.author + " - " + message.author.id)})
}
module.exports.help = {
name: "tag"
}