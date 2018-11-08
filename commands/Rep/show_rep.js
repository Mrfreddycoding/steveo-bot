const commando = require('discord.js-commando')
const reputation = require("../../reputation.json")
const fs = require("fs");
const discord = require('discord.js')

class ShowRepCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'showrep',
            group: 'repuatation',
            memberName: 'showrep',
            description: 'Shows the reputation of the user' 
        })
    }

    async run(message, args)
    {
        let targetUser = message.guild.member(message.mentions.users.first());
        if(!targetUser){
            message.channel.send("Sorry, I couldn't find that user");
            return;
        }
        if(!reputation[message.author.id]){
            reputation[message.author.id] = {
                rep: 0
            };
        }
        let repEmbed = new discord.RichEmbed()
            .setTitle(targetUser.user.username + " Reputation")
            .addField("Reputation", (reputation[message.author.id].rep).toString(),false)
        message.channel.send(repEmbed);
        fs.writeFile("reputation.json", JSON.stringify(reputation), (err) =>{
            if(err){
                console.log(err);
            }
        });
    }
}

module.exports = ShowRepCommand;