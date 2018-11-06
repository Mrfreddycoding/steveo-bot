const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = 'NTAzMzExNzEyODkyNjE2NzE4.Dr5wrA.Ik9eiabNlMZUDD4gBo8DViOaFUs'

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

bot.login(TOKEN);