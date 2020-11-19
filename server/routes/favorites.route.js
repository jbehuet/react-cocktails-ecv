import express from 'express';
import { addFavorites, getFavorites, removeFavorites } from '../controllers/favorites.controller';

const FavoritesRouter = express.Router();
FavoritesRouter.get('/', getFavorites);
FavoritesRouter.post('/', addFavorites);
FavoritesRouter.delete('/:id', removeFavorites);

export default FavoritesRouter;