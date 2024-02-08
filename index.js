import express from "express";
import { pokemonRouter } from "./routes/pokemon.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use('/pokemon', pokemonRouter);
app.use(errorHandler);

app.listen(port,() => {
    console.log(`Pokemon app listening on port ${port}`)
});