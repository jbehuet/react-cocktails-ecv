import favorites from '../data/favorites';
import HTTPCode from '../constants/httpCode';

export async function getFavorites(req, res) {
    res.send(favorites);
};

export function addFavorites(req, res) {
    const { id, name } = req.body;
    if (favorites.find(f => f.id === id)) {
        // ERROR
        res.status(HTTPCode.error.client.CONFLICT).send("Cocktail déjà en favoris")
    } else {
        favorites.push({ id, name })
        res.status(HTTPCode.success.CREATED).send(favorites);
    }
}

export function removeFavorites(req, res) {
    if (!favorites.find(f => f.id === req.params.id)) {
        return res.sendStatus(HTTPCode.error.client.NOT_FOUND);
    }
    favorites = favorites.filter(f => f.id === req.params.id);
    res.status(HTTPCode.success.OK).send(favorites);
}