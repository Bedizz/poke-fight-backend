import express from "express";
import {
  getAllPokemons,
  getSinglePokemon,
  getPokemonInfo
} from "../controllers/pokemon.js";

export const pokemonRouter = express.Router();

pokemonRouter.get("/", getAllPokemons);
pokemonRouter.get("/:id", getSinglePokemon);
pokemonRouter.get("/:id/:info", getPokemonInfo);
