
exports.seed = function(knex) {
  return knex('city').insert([
    {name: 'Chicago'},
    {name: 'San Francisco'},
    {name: 'New York'},
    {name: 'Los Angeles'},
    {name: 'Seattle'},
    {name: 'Denver'}
  ]);
};
