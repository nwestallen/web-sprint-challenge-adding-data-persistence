
exports.seed = function(knex) {
  return knex('projects').insert([
    { project_name: 'Clean Room', project_description: 'your room is a mess', project_completed: 1 },
    { project_name: 'Sprint Challenge', project_description: 'adding data persistence web sprint challenge'},
  ])
};
