
exports.seed = function(knex) {
  return knex('tasks')
    .truncate()
    .then(() => {
      return knex('tasks').insert([
        {
          project_id: 1,
          description: 'download necessary dependencies',
          notes: 'use npm!',
          completed: false,
        },
        {
          project_id: 1,
          description: 'plan out structure of components',
          notes: 'are we using hooks?',
          completed: false,
        },
        {
          project_id: 2,
          description: 'lay out building foundation',
          notes: 'plan out dimensions',
          completed: false,
        },
        {
          project_id: 2,
          description: 'coordinate with architect',
          notes: 'do final blueprint evaluations',
          completed: false,
        },
        {
          project_id: 3,
          description: 'plan the colors for the walls',
          notes: 'what room does the sunlight hit?',
          completed: false,
        },
        {
          project_id: 3,
          description: 'plan which room to start with',
          notes: 'keep it clean!',
          completed: false,
        },
      ]);
    });
};