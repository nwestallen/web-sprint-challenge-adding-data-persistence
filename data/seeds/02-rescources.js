
exports.seed = function(knex) {
  return knex('resources').insert([
    { resource_name: 'Nick', resource_description: 'me' },
    { resource_name: 'Newton', resource_description: 'cat' },
    { resource_name: 'Macbook' }
  ])
};
