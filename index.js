const Commando = require('discord.js-commando');
const bot = new Commando.Client({
    owner: "269495733613363200")

bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('friends', 'Friends');
bot.registry.registerGroup('moderation', 'Moderation');
bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};

bot.on('ready',function(){
    console.log('Bot Online!')
})

bot.login(process.evn.BOT_TOKEN);
