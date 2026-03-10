const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
intents: [
GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent,
GatewayIntentBits.GuildMembers
]
});

client.once("ready", () => {
console.log("Bot aktif");
});

client.on("messageCreate", async message => {

if(message.author.bot) return;

if(message.content.startsWith("!dmrol")){

let role = message.mentions.roles.first();
if(!role) return message.reply("Rol etiketle!");

let msg = message.content.split(" ").slice(2).join(" ");

role.members.forEach(member => {
member.send(msg).catch(()=>{});
});

message.channel.send("Roldeki herkese DM gönderildi.");
}

});

client.login(process.env.TOKEN);
