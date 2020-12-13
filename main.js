import { config } from 'dotenv-flow';
import Discord from 'discord.js';
import doSetup from './src/setup';
import getCommand from './src/commands';
import { notFoundMessage } from './src/lib/utils/commonMessages';

const client = new Discord.Client();

config();
doSetup(client);

const prefix = process.env.PREFIX;

client.on('guildMemberAdd', (user) => {
  const channel = user.guild.systemChannel;
  channel.send('https://cdn.discordapp.com/attachments/602017731197403163/738499732930035712/another_fag.mp4')
    .catch((e) => console.log(e));
});

client.on('message', async (message) => {
  if (!message.content.startsWith(prefix)) return;
  if (message.channel.type === 'dm') return;
  if (message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const method = getCommand(command);
  if (method) {
    method(client, message, args);
    return;
  }

  notFoundMessage(message.channel);
});
