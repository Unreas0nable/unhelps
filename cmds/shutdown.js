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
        //if (message.author.id !== '1234') return message.channel.send("You're not close to the west or east side.. you're an 'it'").then(message => message.delete(5000));
    //if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You do not have admin!");
    await message.delete()
    await message.author.send("Process dead, shutting down.");
    await message.channel.send("Process dead, shutting down.");
    //await bot.channels.get('328225959117455362').send("I am shutting down now.. Error 404..");
    bot.destroy()
    process.exit(1);
}

module.exports.help = {
        name: "shutdown"
}
