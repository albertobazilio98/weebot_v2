const negate = (text, word) => {
  let negatedWord;
  if (word.endsWith('n\'t')) {
    negatedWord = word.slice(0, word.lastIndexOf('n\'t'));
  } else if (word.endsWith('nt')) {
    negatedWord = word.slice(0, word.lastIndexOf('nt'));
  } else {
    negatedWord = word.concat('n\'t');
  }

  return `${text} ${negatedWord}`;
};

// eslint-disable-next-line no-unused-vars
const command = (client, message, args) => {
  let text = '';
  if (!args.length) {
    text = 'n\'t';
  } else if (args.length === 1 && (args[0] === 'nt' || args[0] === 'n\'t')) {
    text = '...';
  } else {
    text = args.reduce(negate, '');
  }
  message.channel.send(text)
    .catch((e) => console.log(e));
};

const info = 'comando para verificar a latência do bot';

const aliases = ['negate', '!', 'not'];

const commandLib = {};

aliases.forEach((alias) => {
  commandLib[alias] = {
    info,
    aliases,
    command,
  };
});

export default commandLib;
