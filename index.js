const Discord = require("discord.js");
require("dotenv").config();

const TOKEN = "OTcyMjQ1NjcxOTI1MTIxMDg0.YnWQVw.CseqtX6FKN49JsOt1EO9gWlJ4IE";

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
    if(message.content == "hi") {
        message.reply("Hello World");
    }
});

client.login(process.env.token);