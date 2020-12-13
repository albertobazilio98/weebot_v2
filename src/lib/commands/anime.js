const mal  = require('jikanjs');
// import mal from 'jikanjs';

const mountField = (category) => {
  if (typeof category === 'string') {
    return category;
  }
  if (Array.isArray(category)) {
    if (typeof category[0] === 'string') {
      return category.join(', ');
    }
    return category.map(mountField);
  }
  if (typeof category === 'object') {
    if (category.name && category.url) {
      return `[${category.name}](${category.url})`;
    }
    return Object.values(category).map(mountField).join(', ');
  }
  return null;
};

mountField();

// const mountEmbedFields = (anime) => {
//   const fields = [];
// };

const mountAnimeEmbed = (anime) => {
  // const fields = mountEmbedFields();
  console.log(anime);
  console.log(anime.related);
  return {
    title: `${anime.title} - id:${anime.mal_id}`,
    url: anime.url,
    color: 16466687,
    thumbnail: {
      url: anime.image_url,
    },
    description: `${(anime.synopsis.lenght < 2040) ? `${anime.synopsis.slice(0, 2040)} [...]` : anime.synopsis}`,
    // fields,
  };
};

const findAnime = (q) => {
  return new Promise((resolve) => {
    mal.search('anime', q, 1, { limit: 1 })
      .then((response) => {
        resolve(mal.loadAnime(response.results[0].mal_id).then(mountAnimeEmbed));
      });
  });
};

// export default findAnime;
module.exports = mountField;