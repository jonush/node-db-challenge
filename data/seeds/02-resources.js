
exports.seed = function(knex) {
  return knex('resources')
    .truncate()
    .then(() => {
      return knex('resources').insert([
        {name: 'Laptop', description: 'need it to code'},
        {name: 'Office', description: 'a nice quiet place'},
        {name: 'Wood', description: 'something sturdy'},
        {name: 'Tiles', description: 'basic floor blocks'},
        {name: 'Paint', description: 'some blue, some beige'},
        {name: 'Paintbrush', description: 'a roller may also work'}
      ]);
    });
};