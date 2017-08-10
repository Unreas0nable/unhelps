//const botSettings = require("./botsettings.json");
const Discord = require('discord.js');

var prefix = "$"

const fs = require('fs');

const bot = new Discord.Client({disableEveryone: true}, {autoReconnect:true});
bot.commands = new Discord.Collection();

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith("$" + str);
}

var cooldownUsers = [];

// Cooldown Check Function
const checkCooldown = ((userId) => {
  if(cooldownUsers.indexOf(userId) > -1) {
    return true;
  } else {
    return false;
  }
});

// Cooldown Removal Function
const removeCooldown = ((userId, timeInSeconds) => {
  let index = cooldownUsers.indexOf(userId);
  if(index > -1) { 
    setTimeout(() => {
    cooldownUsers = cooldownUsers.splice(index, 0);
    }, timeInSeconds * 1000)
  }
});

// const antispam = require("discord-anti-spam");
// antispam(bot, {
//   warnBuffer: 3, //Maximum amount of messages allowed to send in the interval time before getting warned. 
//   maxBuffer: 5, // Maximum amount of messages allowed to send in the interval time before getting banned. 
//   interval: 1000, // Amount of time in ms users can send a maximum of the maxBuffer variable before getting banned. 
//   warningMessage: "stop spamming or I'll whack your head off.", // Warning message send to the user indicating they are going to fast. 
//   banMessage: "has been banned for spamming, anyone else?", // Ban message, always tags the banned user in front of it. 
//   maxDuplicatesWarning: 7, // Maximum amount of duplicate messages a user can send in a timespan before getting warned 
//   maxDuplicatesBan: 10 // Maximum amount of duplicate messages a user can send in a timespan before getting banned 
// });

function pluck(array) {
    return array.map(function(item) { return item["name"]; });
}

function hasRole(mem, role) {
    if(pluck(mem.roles).includes(role)){
        return true;
    } else {
        return false;
    }
}

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
//
fs.readdir("./cmds/", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No commands to load!");
        return;
    }

    console.log(`Loading ${jsfiles.length} commands!`);

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on("message", async message => {
    if(message.author.bot) return;
    //if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;
    
    let cmd = bot.commands.get(command.slice(prefix.length));
if(checkCooldown(message.author.id)) {
message.channel.send("Please wait 5 seconds to use another commands!");
return;
    }
cooldownUsers.push(message.author.id);
// remove cooldown after 5 seconds
removeCooldown(message.author.id, 5);
    if(cmd) cmd.run(bot, message, args);
    

});

//


bot.on('ready', () => {
    bot.user.setGame("$help | v1.21");
    //bot.user.setStatus('online');
    bot.user.setStatus('idle');
    //bot.user.setAvatar('https://i3.radionomy.com/radios/400/d8cb20b7-082a-4dc5-b740-7d3ef0f5db39.jpg');
    //bot.user.setUsername('Saki Bot');
})

/*bot.on('message', (msg) => {
console.log(`${msg.author.username} sent a message in #${msg.channel.name} - ${msg} - ${bot.guilds.id}`);
})*/

bot.on('message', msg => {
    if (msg.content === "<@" + bot.user.id + ">"){
        let embed = new Discord.RichEmbed()
        //.setThumbnail(bot.user.avatarURL)
        //.setThumbnail('https://i3.radionomy.com/radios/400/d8cb20b7-082a-4dc5-b740-7d3ef0f5db39.jpg',)
        .setTitle('Update logs')
        .setDescription('**Saki is currently v1.21;\n' +
        'The prefix is $;\n' +
        `Added commands - [ saruze2 ] , [ eval ] , [ uptime ] , [ serverinfo ] , [ ul ];\n` +
        `Updated commands - [ userinfo ] , [ help ] , [ fortune ]; \n` +
        `Fixed commands - [ ul ]\n ` +
        `Embeds color changes - [ grey ]\n` +
        `$help is a normal help menu;\n` +
        `$qhelp is a quote help menu;\n` +
        `Saki is still work in progress, if you want to become a tester -** click to join __**[Saki Test Server](https://discord.gg/2tFxcdd)**__\n`)
        .addBlankField()
        .setImage('https://i3.radionomy.com/radios/400/d8cb20b7-082a-4dc5-b740-7d3ef0f5db39.jpg')
        //.setTitle('Click here to join Saki Discord Server')
        .setFooter(`If you see anything wrong with a command, then please report it to #problems in Saki Test Server or directly to Unfσrgσττεn死ね#9982 | ` + new Date())
        msg.author.sendEmbed(embed);
    }
});
    bot.on('ready', async () => {
        console.log('Bot Username');
        console.log([bot.user.username]);
        console.log('bot ID');
        console.log([bot.user.id]);
        console.log('Server Name(s)');
        console.log("I am in" + " - " + [bot.guilds.size] + " - " + "server(s)\n");
        console.log('**Bot Stats**\n\n' +
        `**Users:** ${bot.users.size} \n\n` + 
        `**Servers:** ${bot.guilds.size} \n\n` +
        `**Channels:** ${bot.channels.size} \n\n` 
        );
        await console.log('The bot is online!');
    })

    bot.on("message", message => {
  var args = message.content.split(" ").slice(1);
  var bcg = bot.channels.get('284006673503354881');
  if (message.content.startsWith("calc")) {
    //if(message.author.id !== '343434732144427011') return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      //bot.channels.get('327934828467060740').send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      //message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
});

    bot.on("message", message => {
        if (message.content === "sinvite") {
            if (message.author.id !== '84719369069805568') return message.channel.send(message.author + ' does not have permission to use this command');
        message.author.send('https://discordapp.com/oauth2/authorize?client_id=329135044402741248&scope=bot&permissions=8');
        }
    });


bot.on('message', (msg) => {
if (msg.author.bot) return;
//if(msg.channel.type === "dm") return;
//bot.channels.get('335992000212107264').send(`<@${msg.author.id}> sent a message in <#${msg.channel.id}> | Server Name: ${msg.guild.name} | ${new Date()} | **${msg}**`);
//bot.channels.get('335992000212107264').send(`<@${msg.author.id}> sent a message in <#${msg.channel.id}> | ${new Date()} | **${msg}**`);
    })

//bot.login("MzQ0MTY4MTI0NDA2NTYyODI3.DGozgQ.eljQyIde7LqeYCopLz44v0g1vcw");
bot.login("MzI5MTM1MDQ0NDAyNzQxMjQ4.DDOCaA.soFNmzEe2PCwqm1N2_EqNtsl43Y");
