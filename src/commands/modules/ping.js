// eslint-disable-next-line no-unused-vars
const command = (client, message, args) => {
  const pingPong = ['ping', 'pong'];
  if (message.content.slice(2, 6).toLowerCase() === 'pong') pingPong.reverse();

  message.channel.send(`${pingPong[0]}?`)
    .then((sentMessage) => {
      sentMessage.edit(`${pingPong[1]}! ${sentMessage.createdTimestamp - message.createdTimestamp}ms`);
    })
    .catch((e) => console.log(e));
};

const info = 'comando para verificar a latência do bot';

const aliases = ['ping', 'pong'];

const commandLib = {};

aliases.forEach((alias) => {
  commandLib[alias] = {
    info,
    aliases,
    command,
  };
});

export default commandLib;
