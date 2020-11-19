import express from 'express';
import { getCocktail, getCocktailById} from '../controllers/cocktail.controller';

const CocktailRouter = express.Router();
CocktailRouter.get('/', getCocktail);
CocktailRouter.get('/:id', getCocktailById);

export default CocktailRouter;