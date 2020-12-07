import db from '../data/datastore';
import HTTPCode from '../constants/httpCode';

export async function getFavorites(req, res) {
    const favorites = await db.favorites.find({ owner: req.authenticatedUser });
    res.send(favorites);
};

export async function addFavorites(req, res) {
    const { id, name } = req.body;
    let favorites = await db.favorites.find();
    if (favorites.find(f => f.id === id)) {
        // ERROR
        res.status(HTTPCode.error.client.CONFLICT).send();
    } else {
        favorites = await db.favorites.insert({ id, name, owner: req.authenticatedUser }).then(() => db.favorites.find({ owner: req.authenticatedUser }));
        res.status(HTTPCode.success.CREATED).send(favorites);
    }
}

export async function removeFavorites(req, res) {
    let favorites = await db.favorites.find();
    if (!favorites.find(f => f.id === req.params.id)) {
        return res.sendStatus(HTTPCode.error.client.NOT_FOUND);
    }
    favorites = await db.favorites.remove({ id: req.params.id, owner: req.authenticatedUser }).then(() => db.favorites.find({ owner: req.authenticatedUser }));
    res.status(HTTPCode.success.OK).send(favorites);
}