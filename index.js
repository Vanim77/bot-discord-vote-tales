const Discord = require('discord.js');
const cron = require('node-cron');
const dotenv = require('dotenv')
dotenv.config()
const { BOT_TOKEN, CHANNEL_ID_VOTE, ROLE_ID_VOTE, CHANNEL_ID_HALLOWEEN_INVASION, ROLE_ID_HALLOWEEN_INVASION } = process.env;

const client = new Discord.Client({ intents: [Discord.GatewayIntentBits.Guilds ]});

const alertDiscord = () => {
  const channel = client.channels.cache.get(CHANNEL_ID_VOTE);

  channel.send(`Hora de votar no servidor! https://ragnatales.com.br/profile/vote <@&${ROLE_ID_VOTE}>`);
}

const alertHalloweenInvasion = () => {
  const channel = client.channels.cache.get(CHANNEL_ID_HALLOWEEN_INVASION);

  const invadedMaps = `
**Mapas Invadidos:**
prt_fild01: Ilusão do Labirinto (Lado de Fora)
prt_fild05: Oeste de Prontera
prt_fild06: Leste de Prontera
prt_fild08: Sul de Prontera
pay_fild01: Sul de Payon
pay_fild03: Oeste de Alberta
pay_fild08: Leste de Payon
moc_fild07: Norte de Morroc
moc_fild12: Sul de Morroc
moc_fild19: Oeste de Morroc
gef_fild00: Leste de Geffen
gef_fild04: Norte de Geffen
gef_fild07: Oeste de Geffen
mjolnir_12: Sul de Aldebaran
yuno_fild01: Norte de Aldebaran
yuno_fild04: Sul de Yuno
lhz_fild01: Norte de Lhz
ra_fild11: Oeste de Rachel
ra_fild12: Leste de Rachel
ve_fild02: Sul de Rachel
ve_fild07: Sul de Veins
ein_fild04: Norte de Einbroch
hu_fild06: Caverna Lago do Abismo > sai > Portal a Direira do mapa
ama_fild01: Campos de Amatsu
ayo_fild01: Campos de Ayothaya
um_fild04: Campos de Umbala
gon_fild01: Campos de Kunlun
lou_fild01: Campos de Louyang
  `;

  channel.send(
    `🎃 Invasão Halloween começando em 3 minutos!  
Use **@halloinvasion** para saber onde e quantos monstros existem por mapa!  
<@&${ROLE_ID_HALLOWEEN_INVASION}>  

${invadedMaps}`
  );
};


client.on('ready', () => {
  console.log('Bot online!');

  cron.schedule('0 22 * * *', alertDiscord);

  cron.schedule('30 6 * * *', alertHalloweenInvasion);  // 06:30
  cron.schedule('30 9 * * *', alertHalloweenInvasion);  // 09:30
  cron.schedule('30 12 * * *', alertHalloweenInvasion); // 12:30
  cron.schedule('30 15 * * *', alertHalloweenInvasion); // 15:30
  cron.schedule('30 18 * * *', alertHalloweenInvasion); // 18:30
  cron.schedule('30 21 * * *', alertHalloweenInvasion); // 21:30
  cron.schedule('30 0 * * *', alertHalloweenInvasion);  // 00:30
  cron.schedule('30 3 * * *', alertHalloweenInvasion);  // 03:30
});

client.login(BOT_TOKEN);
