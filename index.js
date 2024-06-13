const Discord = require('discord.js');
const cron = require('node-cron');
const dotenv = require('dotenv')
dotenv.config()
const { BOT_TOKEN, CHANNEL_ID } = process.env;

const client = new Discord.Client({ intents: [Discord.GatewayIntentBits.Guilds ]});

const alertDiscord = () => {
  const channel = client.channels.cache.get(CHANNEL_ID);

  channel.send('Hora de votar / marcar presença de pet! @everyone');
}

client.on('ready', () => {
  console.log('Bot online!');

  cron.schedule('0 21 * * *', alertDiscord);
});

client.login(BOT_TOKEN);
