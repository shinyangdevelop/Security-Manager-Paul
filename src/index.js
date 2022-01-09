const { Client, Intents, Collection } = require('discord.js')
const { token } = require('secret.json')

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })



client.login(token)