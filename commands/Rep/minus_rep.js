const commando = require('discord.js-commando')
const reputation = require("../../reputation.json")
const fs = require("fs");

class MinusRepCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'minusrep',
            group: 'repuatation',
            memberName: 'minusrep',
            description: 'Subtracts repuatation from the user' 
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
        reputation[messgae.author.id].rep = reputation[message.author.id].rep - 1;
        fs.writeFile("reputation.json", JSON.stringify(reputation), (err) =>{
            if(err){
                console.log(err);
            }
        });
    }
}

module.exports = MinusRepCommand;