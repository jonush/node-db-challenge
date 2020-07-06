
const cleaner = require('knex-cleaner');

exports.seed = function(knex) {
	return cleaner.clean(knex, {
		ignoreTables: ['knex-migrations', 'knex_migrations_lock']
	});
};
