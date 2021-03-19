// build your `Project` model here
const db = require('../../data/dbConfig');

const getAll = () => {
    return db('projects');
};

const getById = project_id => {
    return db('projects')
    .where({ project_id })
    .first()
};

const create = project => {
    return db('projects')
    .insert(project)
    .then(id => getById(id));
};

module.exports = {
    getAll,
    create
}