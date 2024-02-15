import express from "express";
import {
  getAllPokemons,
  getSinglePokemon
} from "../controllers/pokemon.js";

export const pokemonRouter = express.Router();

pokemonRouter.get("/", getAllPokemons);
pokemonRouter.get("/:id", getSinglePokemon);
