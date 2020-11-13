import express from 'express';
import { addFavorites, getFavorites, removeFavorites } from '../controllers/cocktails.controller';

const CocktailRouter = express.Router();
CocktailRouter.get('/', getFavorites);
CocktailRouter.post('/', addFavorites);
CocktailRouter.delete('/:id', removeFavorites);

export default CocktailRouter;