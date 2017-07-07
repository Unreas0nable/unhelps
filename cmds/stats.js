module.exports.run = async (bot, message, args) => {

        message.channel.send('**Bot Stats**\n\n' +
        `**Users:** ${bot.users.size} \n\n` + 
        `**Servers:** ${bot.guilds.size} \n\n` +
        `**Channels:** ${bot.channels.size}` 
        );

        // message.channel.send(message, '**Bot Stats**\n\n' + '**Users:** ' + bot.users.length + '**Servers:** ' + bot.servers.length + '**Channels:** ' + bot.channels.length );
        
    
}

module.exports.help = {
    name: "stats"
}