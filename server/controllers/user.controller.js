const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
import { default as CONFIG } from '../config';
import db from '../data/datastore';
import HTTPCode from '../constants/httpCode';

export async function register(req, res) {
    try {
        let user = await db.users.findOne({ email: req.body.email });
        if (user) return res.status(HTTPCode.error.client.CONFLICT).send({ message: "Email already taken" });

        const data = { email: req.body.email }
        data.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
        user = await db.users.insert(data).then(() => db.users.findOne({ email: data.email }));
        const token = jwt.sign({ _id: user._id, name: user.name, email: user.email }, CONFIG.jwt.secret, CONFIG.jwt.options);
        return res.status(HTTPCode.success.CREATED).send({ token });
    } catch (error) {
        console.log(error);
        return res.status(HTTPCode.error.server.INTERNAL_SERVER_ERROR).send();
    }
};

export async function login(req, res) {
    try {
        const data = { email: req.body.email }
        data.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
        const user = await db.users.findOne({ email: data.email });
        if (!user) {
            return res.status(HTTPCode.error.client.NOT_FOUND).send({ message: "User not exist" });
        } else if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(HTTPCode.error.client.BAD_REQUEST).send({ message: "Password error" });
        } else {
            const token = jwt.sign({ _id: user._id, email: user.email }, CONFIG.jwt.secret, CONFIG.jwt.options);
            return res.status(HTTPCode.success.OK).send({ token });
        }
    } catch (error) {
        console.log(error);
        return res.status(HTTPCode.error.server.INTERNAL_SERVER_ERROR).send();
    }

};