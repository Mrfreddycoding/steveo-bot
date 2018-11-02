const commando = require('discord.js-commando');

class EightBallCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: '8ball',
            group: 'random',
            memberName: '8ball',
            description: 'Shakes up a 8ball to give you a anwser' 
        })
    }

    async run(message, args)
    {
        var anwser = Math.floor(Math.random() * 20) + 1
        if(anwser === 1){
            message.reply('It is certain');
        } else if(anwser === 2){
            message.reply('As I see it,yes');
        } else if(anwser === 3){
            message.reply('Reply hazy,try again')
        } else if(anwser === 4){
            message.reply("Dont't count on it")
        } else if(anwser === 5){
            message.reply('It is decidedly so')
        } else if(anwser === 6){
            message.reply('Most likely')
        } else if(anwser === 7){
            message.reply('Ask again later')
        } else if(anwser === 8){
            message.reply('My reply is no')
        } else if(anwser === 9){
            message.reply('Without a doubt')
        } else if(anwser === 10){
            message.reply('Outlook good')
        } else if(anwser === 11){
            message.reply('Better not tell you now')
        } else if(anwser === 12){
            message.reply('My sources say no')
        } else if(anwser === 13){
            message.reply('Yes-definitely')
        } else if(anwser === 14){
            message.reply('Yes')
        } else if(anwser === 15){
            message.reply('Cannot predict now')
        } else if(anwser === 16){
            message.reply('Outlook not so good')
        } else if(anwser === 17){
            message.reply('You may rely on it')
        } else if(anwser === 18){
            message.reply('Signs point to yes')
        } else if(anwser === 19){
            message.reply('Concentrate and ask again')
        } else {
            message.reply('Very doubtful')
        }
    }
}

module.exports = EightBallCommand;
