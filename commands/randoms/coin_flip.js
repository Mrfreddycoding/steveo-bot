const commando = require('discord.js-commando');

class CoinFlipCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'flip',
            group: 'random',
            memberName: 'flip',
            description: 'Flips a coin, landing on either head or talls, or its side if you are unlucky(very rare)' 
        })
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 2)
        if(chance === 0){
            message.reply('Your coin landed on Heads!');
        }
        else if (chance === 1){
            message.reply('Your coin landed on Tails!');
        }
        else
        {
            message.reply('You coin landed on its side!');
        }
    }
}

module.exports = CoinFlipCommand;