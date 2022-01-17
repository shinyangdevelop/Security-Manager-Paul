const { blocked_words } = require('../../config.json')

module.exports = {
    name: "messageCreate",
    once: false,
    execute: async (message) => {
        if(message.author.bot) {
            return
        }
        let isblocked = false
        console.log(message.content)
        for(let counter=0; counter<blocked_words.length; counter+=1) {
            if(message.content.length === blocked_words[counter].length-1) {
                if(message.content.includes(blocked_words[counter].substring(1))) {
                    isblocked=true
                }
            }
            if(message.content.toLowerCase().includes(blocked_words[counter])) {
                isblocked = true
            }
        }
        if(isblocked) {
            message.delete().then(async msg => {
                console.log(`Deleted message from ${msg.author.username}`)
                await message.channel.send(`Blocked message from ${message.author.username} because it contained blocked word`)
            })
        }
    }
}