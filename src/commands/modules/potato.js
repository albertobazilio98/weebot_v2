const randonPotato = () => {
  const batata = [
    'Batataaaa!',
    'Potatoooo!',
    'Batata ftw',
    '"You monster" \n - PotatOS, 2011',
    'PoTaTo',
    'BaTaTa',
    'Batata >> cenoura',
    'Derptato',
    'Derpatata',
  ];
  return batata[Math.floor(Math.random() * batata.length)];
};

// eslint-disable-next-line no-unused-vars
const command = (client, message, args) => {
  message.channel.send(randonPotato())
    .catch((e) => console.log(e));
};

const info = randonPotato();

const aliases = ['batata', 'potato'];

const commandLib = {};

aliases.forEach((alias) => {
  commandLib[alias] = {
    info,
    aliases,
    command,
  };
});

export default commandLib;
