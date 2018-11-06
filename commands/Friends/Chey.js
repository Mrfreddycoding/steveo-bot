const commando = require('discord.js-commando');

class CheyFriendCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'chey',
            group: 'friends',
            memberName: 'chey',
            description: "I dont have weirds for her"
        })
    }

    async run(message, args)
    {
        message.channel.send("I am sorry, I am so sorry! I didn't mean to cause all of this!")
    }
}

module.exports = CheyFriendCommand;
