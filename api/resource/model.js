// build your `Resource` model here
const db = require('../../data/dbConfig');

const getAll = () => {
    return db('resources')
};

const getById = resource_id => {
    return db('resources')
    .where({ resource_id })
    .first()
};

module.exports = {
    getAll,
    getById
};
