import fetch from 'node-fetch';

import HTTPCode from '../constants/httpCode';

export async function getCocktail(req, res) {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                throw (res.error);
            }
            return res;
        })
        .then(res => res.drinks && res.drinks[0])
        .then(cocktail => res.send(cocktail))
        .catch(error => res.status(HTTPCode.error.server).send(error))
};

export async function getCocktailById(req, res) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${req.params.id}`)
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                throw (res.error);
            }
            return res;
        })
        .then(res => res.drinks && res.drinks[0])
        .then(cocktail => res.send(cocktail))
        .catch(error => res.status(HTTPCode.error.server).send(error))
};