var config = require('../json/config.json');
function checkAdmin(author, config) {
  for (var admin in config.admins) {
    if (author.id == admin) {
      return true;
    }
  }
  return false;
}

module.exports.run = async (bot, msg, args) => {
  if (checkAdmin(msg.author.id, config)) return msg.channel.send(msg.author + ' does not have permission to use this command').then(msg => msg.delete(5000));
    let msgcount = parseInt(args) + 1;
    if (isNaN(msgcount)) {
      return msg.reply('Numbers only :1234:');
    }
    if (msgcount < 2) {
      return msg.reply('Minimum purge is 2 messages or higher');
    }

    if (msgcount < 150 && msgcount > 100) {
      msg.channel.fetchMessages({limit: 100}).then(messages => msg.channel.bulkDelete(messages));
      todel = msgcount - 100;
      msg.channel.fetchMessages({limit: todel}).then(messages => msg.channel.bulkDelete(messages));
      return;
    }
    if (msgcount >= 150 && msgcount <= 1000) {
      var i = 1;
      var x = Math.round(msgcount/100);
      var y = msgcount/100;

      while (i <= x) {
        if (i === x) {
          m = i - 1;
          m = m * 100;
          todelete = msgcount - m;
          msg.channel.fetchMessages({limit: todelete}).then(messages => msg.channel.bulkDelete(messages));
        } else {
          msg.channel.fetchMessages({limit: 100}).then(messages => msg.channel.bulkDelete(messages));
        }
        i++;
      }
    } else {
      msg.channel.fetchMessages({limit: msgcount}).then(messages => msg.channel.bulkDelete(messages));
    }
  }

module.exports.help = {
    name: "purge"
}