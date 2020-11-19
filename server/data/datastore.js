import Datastore from 'nedb-promises';
const db = Datastore.create('./server/store.db');

export default db;