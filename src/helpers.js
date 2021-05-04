/* Select a random element from values array. */
function choice(values) {
  const randIdx = Math.floor(Math.random() * values.length);
  return values[randIdx];
}

function formatPlayingCard(data) {
  return { image: data.cards[0].image };
}

function formatPokemonCard(data) {
  return {
    front: data.sprites.front_default,
    back: data.sprites.back_default,
    name: data.name,
    stats: data.stats.map((stat) => {
      return {
        name: stat.stat.name,
        value: stat.base_stat,
      };
    }),
  };
}

export { choice, formatPlayingCard, formatPokemonCard };
