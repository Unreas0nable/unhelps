//const botSettings = require("./botsettings.json");
const Discord = require('discord.js');

var prefix = "$"

const fs = require('fs');

const bot = new Discord.Client({disableEveryone: true}, {autoReconnect:true});
bot.commands = new Discord.Collection();

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith("u?" + str);
}

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
    if(cmd) cmd.run(bot, message, args);

});

//


bot.on('ready', () => {
    bot.user.setGame("$help | 24/7 testing");
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
	    msg.author.send(
        "```\n" +
        `The prefix is **$**\n` +
    	`From now on, this will be like a update logs stuff, I will be making a different kind of message to make it better in a couple updates.\n` +
        `######################################\n` +
        `Recently added commands - [ saruze2 ] , [ eval ]..\n` +
        `$help is for a normal help menu..\n` +
        `$qhelp is for a quote help menu..\n` +
        `######################################\n` +
        `Saki Bot is still work in progress.. if you are a tester or just wants to become a tester, type $invite\n` +
        `If there's any bugs or glitch, contact Unfσrgσττεn死ね#9982 **- the owner of Saki Bot**\n` +
	`######################################\n` +
	`Nothing else to read here, yet... :) \n` +
        "\n```")
        }
    });
bot.on('message', msg => {
    if (msg.content === "$changelogs"){
	    msg.author.send(
        "```\n" +
        `The prefix is **$**\n` +
    	`From now on, this will be like a update logs stuff, I will be making a different kind of message to make it better in a couple updates.\n` +
        `######################################\n` +
        `Recently added commands - [ saruze2 ] , [ eval ]..\n` +
        `$help is for a normal help menu..\n` +
        `$qhelp is for a quote help menu..\n` +
        `######################################\n` +
        `Saki Bot is still work in progress.. if you are a tester or just wants to become a tester, type $invite\n` +
        `If there's any bugs or glitch, contact Unfσrgσττεn死ね#9982 **- the owner of Saki Bot**\n` +
	`######################################\n` +
	`Nothing else to read here, yet... :) \n` +
        "\n```")
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
  if (message.content.startsWith(prefix + "eval")) {
    //if(message.author.id !== '343434732144427011') return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      bot.channels.get('327934828467060740').send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      //message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
});

      bot.on('ready', (message) => {
        //bot.channels.get('284006673503354881').send("Currently being recoded.");
//        bot.channels.get('327614673799217152').send("Currently being recoded.");

bot.on('message', (msg) => {
if (msg.author.bot) return;
//if(msg.channel.type === "dm") return;
//bot.channels.get('335992000212107264').send(`<@${msg.author.id}> sent a message in <#${msg.channel.id}> | Server Name: ${msg.guild.name} | ${new Date()} | **${msg}**`);
bot.channels.get('335992000212107264').send(`<@${msg.author.id}> sent a message in <#${msg.channel.id}> | ${new Date()} | **${msg}**`);
})
    })
    bot.on('message', message => {
        var args = message.content.split(/[ ]+/);

/*        if(commandIs("delete", message)){
        if(hasRole(message.member, "Moderator") || hasRole(message.member, "Co-owner") || hasRole(message.member, "Owner")){
            if(args.length >= 3){
//                console.log(message.author.username + args);
                message.channel.sendMessage('You did not define a argument. Usage: `uj!delete (number of messages to delete)`');
            } else {
                var msg;
                if(args.length === 1){
                    msg=2;
                } else {
//                console.log(message.author.username + args);
                    msg=parseInt(args[1]) + 1;
                }
                message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
//                client.channels.get('328225959117455362').sendMessage(`${msg.author.username} - #${msg.channel.name} - ${msg}`);
            }
        } else {
            message.channel.sendMessage('You are not an `Admin`.');
        }
    }
 */   
    /*if(commandIs("vote", message)){
     message.channel.send(`Click the reaction button to vote!`);
     message.react("👍")
    }*/
       //if(message.content === "@UnforgottenBot |Helper") {
	//message.author.send(`Type $help to execute the help menu.. <@${msg.author.id}>`);
     //}
     //if (message.content === "(╯°□°）╯︵ ┻━┻"){
        //message.channel.send("┬─┬ ノ( ゜-゜ノ) **Not hating though.. ;c**");
//         bot.channels.get('327919432246624277').send("**Pls ;c People loves me**");
//         bot.channels.get('327919432246624277').send("**Keep spamming, I'll probably start joining the chill zone, which I ♥ the most**");
     //}

});

bot.login("MzI5MTM1MDQ0NDAyNzQxMjQ4.DDOCaA.soFNmzEe2PCwqm1N2_EqNtsl43Y");
