import ping from './modules/ping';
import negate from './modules/negate';
import potato from './modules/potato';
import anime from './modules/anime';

const commandLib = {
  ...ping,
  ...negate,
  ...potato,
  ...anime,
};

const getCommand = (alias) => {
  if (!commandLib[alias]) return false;

  return commandLib[alias].command;
};

export default getCommand;
