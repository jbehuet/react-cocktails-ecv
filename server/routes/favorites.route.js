import express from 'express';
import { addFavorites, getFavorites, removeFavorites } from '../controllers/favorites.controller';
import { isAuthenticated } from '../middlewares/auth.middleware';

const FavoritesRouter = express.Router();
FavoritesRouter.get('/', isAuthenticated, getFavorites);
FavoritesRouter.post('/', isAuthenticated, addFavorites);
FavoritesRouter.delete('/:id', isAuthenticated, removeFavorites);

export default FavoritesRouter;