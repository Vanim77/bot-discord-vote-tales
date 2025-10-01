const Discord = require('discord.js');
const cron = require('node-cron');
const dotenv = require('dotenv')
dotenv.config()
const { BOT_TOKEN, CHANNEL_ID, ROLE_ID } = process.env;

const client = new Discord.Client({ intents: [Discord.GatewayIntentBits.Guilds ]});

const alertDiscord = () => {
  const channel = client.channels.cache.get(CHANNEL_ID);

  channel.send(`Hora de votar no servidor! https://ragnatales.com.br/profile/vote <@&${ROLE_ID}>`);
}

client.on('ready', () => {
  console.log('Bot online!');

  cron.schedule('0 22 * * *', alertDiscord);
});

client.login(BOT_TOKEN);
