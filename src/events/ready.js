module.exports = {
    name: "ready",
    once: true,
    execute: async(client) => {
        console.log(`Logged in as ${client.user.tag}`)
    }
}