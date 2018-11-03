const commando = require('discord.js-commando');

class SimonFriendCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'simon',
            group: 'friends',
            memberName: 'simon',
            description: "Describes a good of the bot's owner"
        })
    }

    async run(message, args)
    {
        message.channel.send("Simon is a amazing dude who loves Gianny very much!")
    }
}

module.exports = SimonFriendCommand;
