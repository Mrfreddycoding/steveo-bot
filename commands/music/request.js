const commando = require('discord.js-commando');
const YTDL = require('ytdl-core')

function Play(connection, message)
{
    var server = servers[message.guild.id]
    server.dipatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}))
    server.queue.shift()
    server.dipatcher.on("end", function(){
        if(server.queue[0])
        {
            Play(connection,message)
        }
        else
        {
            connection.disconnect()
        }
    })
}


class RequestSongCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'request',
            group: 'music',
            memberName: 'request',
            description: "Requests a song of the commander's choice"
        });
    }

    async run(message, args)
    {
        var server = servers[message.guild.id];
        server.queue.push(args);
        Play(connection, message);
    }
}

module.exports = RequestSongCommand;