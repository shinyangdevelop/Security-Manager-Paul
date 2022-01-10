const fs = require('fs')
const { Client, Intents, Collection } = require('discord.js')
const { token } = require('../secret.json')

const eventFiles = fs.readdirSync('./src/events').filter(file => file.endsWith('.js'))
const client = new Client({ intents: [Intents.FLAGS.GUILDS], partials: ["CHANNEL"]})

client.on("message", message => {
    console.log(message.content)
})

for(const file of eventFiles) {
    const event = require(`./events/${file}`)
    if(event.once) {
        client.once(event.name, (...args) => event.execute(...args))
        console.log(`Registered event ${event.name}`)
    }
    else {
        client.on(event.name, (...args) => event.execute(...args))
        console.log(`Registered event ${event.name}`)
    }
}

client.login(token)