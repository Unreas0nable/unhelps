module.exports.run = async (bot, message, args) => {
var fortunes = [
    "Yes.",
    "Hmm, ask again. 🤔",
    "No.",
    "👌",
    "Certainly not.",
    "Sorry, it's a no.. 👎",
    "Ask again. 🤔",
    "Sorry, can you repeat that? 🤔",
    "Absolutely!👍",
    "I can not answer that, maybe next time.",
    "Certain--... **SakiBot.exe has stopped working, please re-do..**"

]
            if(args[1]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.send("SakiBot.exe has stopped working, in other words; **ERROR**");
            return;
}
module.exports.help = {
    name: "fortune"
}