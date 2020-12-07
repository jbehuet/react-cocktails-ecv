import express from 'express';
var cors = require('cors')
import HTTPCode from './constants/httpCode';
import UserRouter from './routes/user.route';
import FavoritesRouter from './routes/favorites.route';
import CocktailRouter from './routes/cocktail.route';

const PORT = 8000;

const app = express();
// Middleware d'ajout du body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Setup nos routes
app.use('/api/', UserRouter);
app.use('/api/favorites', FavoritesRouter);
app.use('/api/cocktail', CocktailRouter);


app.get("/", ({ res }) => {
    res.status(HTTPCode.success.OK).send(new Date().toLocaleString());
});

app.listen(PORT, () =>
    console.log(`listening on port ${PORT}!`),
);