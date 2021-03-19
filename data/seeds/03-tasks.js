
exports.seed = function(knex) {
  return knex('tasks').insert([
    { task_description: 'pick up clothes', project_id: 1 },
    { task_description: 'make bed', project_id: 1 },
    { task_description: 'clear off desk', project_id: 1},
    { task_description: 'setup package.json', project_id: 2, task_completed: 1 },
    { task_description: 'migration files', project_id: 2, task_completed: 1 },
    { task_description: 'seed data', project_id: 2 },
    { task_description: 'create data model', project_id: 2 },
    { task_description: 'create middleware', project_id: 2 },
    { task_description: 'create endpoints', project_id: 2 }
  ])
};
