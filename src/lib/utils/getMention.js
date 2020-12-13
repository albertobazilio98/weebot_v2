const getMention = (client, mention) => {
  if (mention && mention.startsWith('<@') && mention.endsWith('>')) {
    let userId = mention.slice(2, -1);

    if (userId.startsWith('!')) {
      userId = userId.slice(1);
    }

    return client.users.get(userId);
  }

  return false;
};

export default getMention;
