import pokeData from "../data/pokeData.json" with { type: "json" };

export const getAllPokemons = (req, res, next) => {
  if (pokeData && pokeData.length === 0) {
    return next({ statusCode:400, message:"There is no data."});
  } else {
    res.status(200).json(pokeData);
  };
};

export const getSinglePokemon = (req, res, next) => {
    const { id } = req.params;
    if(pokeData && pokeData.length === 0) {
      return next({ statusCode:400, message:"There is no data."});
    } else {
        const singlePokemon = pokeData.filter(pokemon => pokemon.id === parseInt(id));
        res.status(200).json(singlePokemon);
    };
};

export const getPokemonInfo = (req, res, next) => {
  const { id, info } = req.params;
  if(pokeData && pokeData.length === 0) {
    return next({ statusCode:400, message:"There is no pokemon data."});
  } else {
      const singlePokemon = pokeData.filter(pokemon => pokemon.id === parseInt(id));
      res.status(200).json(singlePokemon[0][info]);
  };
};