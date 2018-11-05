const Commando = require('discord.js-commando');
const bot = new Commando.Client({
    commandPrefix: '*',
    owner: '269495733613363200'
});

bot.registry.registerGroup('friends', 'Friends');
bot.registry.registerGroup('moderation', 'Moderation');
bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.user.setActivity("Offline!");

bot.on('ready',function(){
    console.log('Bot Online!')
})

bot.login(process.env.BOT_TOKEN);
