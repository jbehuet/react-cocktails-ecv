const jwt = require('jsonwebtoken');
import { default as CONFIG } from '../config';
import HTTPCode from '../constants/httpCode';

export async function isAuthenticated(req, res, next) {
    if (!req.headers.authorization) return res.status(HTTPCode.error.client.BAD_REQUEST).send();

    jwt.verify(req.headers.authorization, CONFIG.jwt.secret, (err, decoded) => {
        if (err) {
            return res.status(HTTPCode.error.client.UNAUTHORIZED).send();
        } else {
            delete decoded.iat;
            delete decoded.exp;
            req.authenticatedUser = decoded;
            next();
        }
    })
}