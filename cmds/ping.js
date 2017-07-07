module.exports.run = async (bot, message, args) => {
    console.log(`Pong! ${bot.ping} ms`);
    message.delete();
    const m = await message.channel.send(`Ping?`);
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
}

module.exports.help = {
    name: "ping"
}