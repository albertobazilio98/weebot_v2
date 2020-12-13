// const mal = require('./../Funcs/mal-messages')
import mal from '../../lib/commands/anime';

// eslint-disable-next-line no-unused-vars
const command = async (client, message, args) => {
  mal(args.join(' ')).then((embed) => {
    message.channel.send('', { embed });
  });
};

const info = 'aaa';

const aliases = ['anime', 'ani'];

const commandLib = {};

aliases.forEach((alias) => {
  commandLib[alias] = {
    info,
    aliases,
    command,
  };
});

export default commandLib;
