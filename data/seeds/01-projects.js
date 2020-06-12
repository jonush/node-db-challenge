
exports.seed = function(knex) {
  return knex('projects')
    .truncate()
    .then(() => {
      return knex('projects').insert([
        {
          name: 'React Application',
          description: 'Creating an application using create-react-app',
          completed: false
        },
        {
          name: 'Housing Complex',
          description: 'Building the new apartment',
          completed: false
        },
        {
          name: 'Repainting the house',
          description: 'Remodeling project',
          completed: false
        }
      ]);
    });
};