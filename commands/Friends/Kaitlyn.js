const commando = require('discord.js-commando');

class KaitlynFriendCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'kaitlyn',
            group: 'friends',
            memberName: 'kaitlyn',
            description: "An amazing girl"
        })
    }

    async run(message, args)
    {
        message.channel.send("Kaitlyn, a girl that the bot maker loves with all his heart, and wants to be with her so much, and he wants to do anything in his power to make her happy")
    }
}

module.exports = KaitlynFriendCommand;