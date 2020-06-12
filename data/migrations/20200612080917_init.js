
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('name', 255)
        .notNullable()
        .index();
      tbl.text('description');
      tbl.boolean('completed')
        .defaultTo(0);
    })
    .createTable('resources', tbl => {
      tbl.increments();
      tbl.string('name', 255)
        .notNullable()
        .unique()
        .index();
      tbl.text('description');
    })
    .createTable('project_resources', tbl => {
      tbl.increments();
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.text('description')
        .notNullable();
      tbl.text('notes');
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.boolean('completed')
        .defaultTo(0);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
