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

const getProjectTasks = project_id => {
    return db('tasks')
    .where({ project_id })
};

const getProjectResources = project_id => {
    return db('resources')
    .select('resources.*', 'project_id')
    .join('project_resources', 'resources.resource_id', 'project_resources.resource_id')
    .where({ project_id })
};

module.exports = {
    getAll,
    create,
    getProjectTasks,
    getById,
    getProjectResources
};