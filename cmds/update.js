const Discord = require('discord.js');
module.exports.run = async (bot, msg, args) => {
        msg.delete();
    setTimeout(function() {
        msg.reply('update log is being delivered to your dm!')
    }, 2000);
        let embed = new Discord.RichEmbed()
        //.setThumbnail(bot.user.avatarURL)
        //.setThumbnail('https://i3.radionomy.com/radios/400/d8cb20b7-082a-4dc5-b740-7d3ef0f5db39.jpg',)
        .setTitle('Update logs')
        .setDescription('**Saki is currently v1.3;\n' +
        'The prefix is $;\n' +
        `Added commands - [ saruze2 ] , [ eval ] , [ uptime ] , [ serverinfo ] , [ ul ];\n` +
        `Added commands(only for Bot Admins) - [ whoisbanned ];\n` +
        `Updated commands - [ userinfo ] , [ help ] , [ fortune ];\n` +
        `Fixed commands - [ ul ];\n` +
        `Embeds color changes - [ grey ];\n` +
        `$help is a normal help menu;\n` +
        `$qhelp is a quote help menu;\n` +
        `Saki is still being coded.. 25% complete or 50% complete;\n`)
        .addBlankField()
        .setImage('https://i3.radionomy.com/radios/400/d8cb20b7-082a-4dc5-b740-7d3ef0f5db39.jpg')
        .setFooter(`If you see anything wrong with a command, then please report it to #problems in Saki Test Server or directly to Unfσrgσττεn死ね#9982 | ` + new Date())
        setTimeout(function() {
        msg.author.sendEmbed(embed);
        }, 4000);
        setTimeout(function() {
        msg.author.send(`If you want to become a tester - **(<https://discord.gg/2tFxcdd>)**\n`+
        `**If you want to join the community as the early members -** **(<https://discord.gg/AWC2JKB>)**`)
        }, 4050);
    }
module.exports.help = {
    name: "update"
}