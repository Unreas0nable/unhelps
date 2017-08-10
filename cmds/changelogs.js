const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
        let embed = new Discord.RichEmbed()
        //.setThumbnail(bot.user.avatarURL)
        //.setThumbnail('https://i3.radionomy.com/radios/400/d8cb20b7-082a-4dc5-b740-7d3ef0f5db39.jpg',)
        .setTitle('Update logs')
        .setDescription('**Saki is currently v1.2;\n' +
        'The prefix is $;\n' +
        `Added commands - [ saruze2 ] , [ eval ] , [ uptime ] , [ guildinfo ];\n` +
        `Updated commands - [ userinfo ] , [ help ] , [ fortune ]; \n` +
        `Embeds color changes - [ grey ]\n` +
        `$help is a normal help menu;\n` +
        `$qhelp is a quote help menu;\n` +
        `Saki is still work in progress, if you want to become a tester -** click to join __**[Saki Test Server](https://discord.gg/r7vEU6H)**__\n`)
        .addBlankField()
        .setImage('https://i3.radionomy.com/radios/400/d8cb20b7-082a-4dc5-b740-7d3ef0f5db39.jpg')
        //.setTitle('Click here to join Saki Discord Server')
        .setFooter(`If you see anything wrong with a command, then please report it to #problems in Saki Test Server or directly to Unfσrgσττεn死ね#9982 | ` + new Date())
        await message.author.sendEmbed(embed);
    }
module.exports.help = {
    name: "ul"
}
