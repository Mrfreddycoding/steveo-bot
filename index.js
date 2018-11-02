const Commando = require('discord.js-commando');
const bot = new Commando.Client();

bot.registry.registerGroup('moderation', 'Moderation');
bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('ready',function(){
    console.log('Bot Online!')
})

bot.login(process.env.BOT_TOKEN);
