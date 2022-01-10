module.exports = {
    name: "messageCreate",
    once: false,
    execute: async (message) => {
        console.log(message.content)
        await message.reply("Test!")
    }
}