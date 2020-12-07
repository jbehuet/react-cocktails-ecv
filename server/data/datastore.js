import Datastore from 'nedb-promises';
const users = Datastore.create('./server/data/users.db');
const favorites = Datastore.create('./server/data/favorites.db');
const db = { favorites, users }

export default db;