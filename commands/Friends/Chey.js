const commando = require('discord.js-commando');

class CheyFriendCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'chey',
            group: 'friends',
            memberName: 'chey',
            description: "Describes an amazing friend of the bot's maker"
        })
    }

    async run(message, args)
    {
        console.log('Chey is a beautiful amazing girl who deserves so much love!')
    }
}

module.exports = CheyFriendCommand;
