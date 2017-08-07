const leet = require('leet');
module.exports.run = async (bot, message, args) => {
                //message.delete();
                message.channel.send(leet.convert(args.join(" ").substring(0)));
}
module.exports.help = {
    name: "leet"
}
