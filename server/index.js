import express from 'express';
import HTTPCode from './constants/httpCode';
import CocktailRouter from './routes/cocktails.route';

const PORT = 8000;

const app = express();
// Middleware d'ajout du body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup nos routes
app.use('/api/cocktails/favorites', CocktailRouter);


app.get("/", ({ res }) => {
    res.status(HTTPCode.success.OK).send(new Date().toLocaleString());
});

app.listen(PORT, () =>
    console.log(`listening on port ${PORT}!`),
);