/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('resumes', (table) => {
        table.increments('resume_id').primary();
        table.integer('user_id').unsigned().notNullable().references('user_id').inTable('users');
        table.string('title').notNullable();
        table.text('summary');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.json('education');
        table.json('experience');
        table.json('skills');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('resumes');
};
