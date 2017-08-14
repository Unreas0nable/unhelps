var config = require('../json/config.json');
function checkAdmin(author, config) {
  for (var admin in config.admins) {
    if (author.id == admin) {
      return true;
    }
  }
  return false;
}

module.exports.run = async (bot, message, args) => {
  if (checkAdmin(message.author.id, config)) return message.channel.send(message.author + ' does not have permission to use this command').then(message => message.delete(5000));
    var bans;
    message.guild.fetchBans()
     .then(function(bans) {
       if (bans.size == 0) {
         message.channel.send("No one has been banned yet :white_check_mark:");
       } else {
         var res = "**Banned Users**\n";
         bans.forEach(function (user) {
        res += '```\n • ' + user.tag + " - " + user.username + " - " + user.id +++ '```';
        })
         message.channel.send(res);
       }
     })
     .catch(console.error);
	}

module.exports.help = {
    name: "whoisbanned"
}