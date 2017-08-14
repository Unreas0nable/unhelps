//const botSettings = require("./botsettings.json");
const Discord = require('discord.js');

var config = require('./json/config.json');
var t1 = (config.token1);
var t2 = (config.token2);

const fs = require('fs');

const bot = new Discord.Client({disableEveryone: true}, {autoReconnect:true});
bot.commands = new Discord.Collection();

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith("$" + str);
}

function checkAdmin(author, config) {
  for (var admin in config.admins) {
    if (author.id == admin) {
      return true;
    }
  }
  return false;
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
var cooldownUsers2 = [];

// Cooldown Check Function
const checkCooldown2 = ((userId) => {
  if(cooldownUsers.indexOf(userId) > -1) {
    return true;
  } else {
    return false;
  }
});

// Cooldown Removal Function
const removeCooldown2 = ((userId, timeInSeconds) => {
  let index = cooldownUsers.indexOf(userId);
  if(index > -1) { 
    setTimeout(() => {
    cooldownUsers = cooldownUsers.splice(index, 0);
    }, timeInSeconds * 1000)
  }
});
var cooldownUsers3 = [];

// Cooldown Check Function
const checkCooldown3 = ((userId) => {
  if(cooldownUsers.indexOf(userId) > -1) {
    return true;
  } else {
    return false;
  }
});

// Cooldown Removal Function
const removeCooldown3 = ((userId, timeInSeconds) => {
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

    if(!command.startsWith(config.prefix)) return;
    
    let cmd = bot.commands.get(command.slice(config.prefix.length));
if(checkCooldown(message.author.id)) {
message.channel.send("Please wait for 5 seconds to use another commands!").then(message => message.delete(5000));
return;
    }
cooldownUsers.push(message.author.id);
// remove cooldown after 5 seconds
removeCooldown(message.author.id, 5);
    if(cmd) cmd.run(bot, message, args);
    

});

//


bot.on('ready', () => {
    bot.user.setGame(config.spel); // spel = game
    bot.user.setUsername(config.naam); // naam = name
    //bot.user.setAvatar('https://i3.radionomy.com/radios/400/d8cb20b7-082a-4dc5-b740-7d3ef0f5db39.jpg');
    bot.user.setStatus(config.staat); // staat = status
});

/*bot.on('message', (msg) => {
console.log(`${msg.author.username} sent a message in #${msg.channel.name} - ${msg} - ${bot.guilds.id}`);
})*/

bot.on('message', msg => {
    if (msg.content === "<@" + bot.user.id + ">"){
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
    if (message.content.startsWith("calc " + 'bot')) return message.reply('Access Denied').then(message => message.delete(5000));
    if (message.content.startsWith("calc " + 'message')) return message.reply('Access Denied').then(message => message.delete(5000));
    if (message.content.startsWith("calc " + 'guild')) return message.reply('Access Denied').then(message => message.delete(5000));
    if (message.content.startsWith("calc " + 'send')) return message.reply('Access Denied').then(message => message.delete(5000));
    if (message.content.startsWith("calc " + 'kick')) return message.reply('Access Denied').then(message => message.delete(5000));
    if (message.content.startsWith("calc " + 'ban')) return message.reply('Access Denied').then(message => message.delete(5000));
    //if (message.content.startsWith("calc " + 'bcg')) return message.reply('Access Denied').then(message => message.delete(5000));
    else {
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
  }
});

    bot.on("message", message => {
        if (message.content === "sinvite") {
        if (checkAdmin(message.author.id, config)) return message.channel.send(message.author + ' does not have permission to use this command').then(message => message.delete(5000)); {
        message.author.send('https://discordapp.com/oauth2/authorize?client_id=329135044402741248&scope=bot&permissions=8');
            }
        }
    });


bot.on('message', (msg) => {
if (msg.author.bot) return;
//if(msg.channel.type === "dm") return;
//bot.channels.get('335992000212107264').send(`<@${msg.author.id}> sent a message in <#${msg.channel.id}> | Server Name: ${msg.guild.name} | ${new Date()} | **${msg}**`);
//bot.channels.get('335992000212107264').send(`<@${msg.author.id}> sent a message in <#${msg.channel.id}> | ${new Date()} | **${msg}**`);
})

if (config.welcome.enabled) {
  bot.on("guildMemberAdd", (member) => {
    var welcometxt = config.welcome.message;
    welcometxt = welcometxt.replace('{server}', member.guild.name);
    welcometxt = welcometxt.replace('{user}', member.user);
    if (config.welcome.add_role.enabled) { //Add to role if set in config.
      var role = member.guild.roles.find("name", config.welcome.add_role.role);
      if (role) {
        member.addRole(role.id);
      } else {
        console.log("Unable to add user to role: " + config.welcome.add_role.role);
      }
    }
  	member.guild.defaultChannel.send(welcometxt);
  });
}

if (config.goodbye.enabled) {
  bot.on("guildMemberRemove", (member) => {
    var goodbyetxt = config.goodbye.message;
    goodbyetxt = goodbyetxt.replace('{server}', member.guild.name);
    goodbyetxt = goodbyetxt.replace('{user}', member.user.username);
    if (config.goodbye.remove_role.enabled) { //Add to role if set in config.
      var role = member.guild.roles.find("name", config.goodbye.remove_role.role);
      if (role) {
        member.removeRole(role.id);
      } else {
        console.log("Unable to remove user from a role: " + config.goodbye.remove_role.role);
      }
    }
  	member.guild.defaultChannel.send(goodbyetxt);
  });
}
//level system
//let points = JSON.parse(fs.readFile("./nodemon.json"));
let points = JSON.parse(fs.readFileSync("./json/points.json", "utf8"));
const prefix = "-";
bot.on("message", message => {
  if (message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
    level: 0
  };
  let userData = points[message.author.id];
  userData.points++;

  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
  if (curLevel > userData.level) {
    // Level up!
    userData.level = curLevel;
    let embed = new Discord.RichEmbed()
    .setTitle(message.author.username)
    .setDescription(`You are now level **${curLevel}**!`);
    message.channel.sendEmbed(embed);
  }

  if (message.content == "!level") {
if(checkCooldown2(message.author.id)) {
message.channel.send("Please wait for 60 seconds to use this command!").then(message => message.delete(5000));
return;
    }
cooldownUsers2.push(message.author.id);
// remove cooldown after 5 seconds
removeCooldown2(message.author.id, 60);
    message.reply(`You are currently level ${userData.level}, with ${userData.points} points.`);
  }
  fs.writeFile("./json/points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });
});

<<<<<<< HEAD
//bot.login(t2);
bot.login(t1);
=======
//bot.login("token");
bot.login("token");
>>>>>>> 476946f3ada1df262799e37ed9e7f953fc49ff4d
