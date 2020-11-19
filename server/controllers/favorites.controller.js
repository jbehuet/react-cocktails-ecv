import db from '../data/datastore';
import HTTPCode from '../constants/httpCode';

export async function getFavorites(req, res) {
    const favorites = await db.find();
    res.send(favorites);
};

export async function addFavorites(req, res) {
    const { id, name } = req.body;
    let favorites = await db.find();
    if (favorites.find(f => f.id === id)) {
        // ERROR
        res.status(HTTPCode.error.client.CONFLICT).send("Cocktail déjà en favoris");
    } else {
        favorites = await db.insert({ id, name }).then(() => db.find());
        res.status(HTTPCode.success.CREATED).send(favorites);
    }
}

export async function removeFavorites(req, res) {
    let favorites = await db.find();
    if (!favorites.find(f => f.id === req.params.id)) {
        return res.sendStatus(HTTPCode.error.client.NOT_FOUND);
    }
    favorites = await db.remove({ id: req.params.id }).then(() => db.find());
    res.status(HTTPCode.success.OK).send(favorites);
}