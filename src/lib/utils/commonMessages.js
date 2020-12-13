const notFoundMessage = (channel) => {
  channel.send('Comando não encontrado >_<')
    .catch((e) => console.log(e));
};

export { notFoundMessage };
