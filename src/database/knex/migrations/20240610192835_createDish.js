exports.up = knex => knex.schema.createTable("dish", table => {
    table.increments("id");
    table.text("name");
    table.text("image");
    table.decimal("price");
    table.integer("category_id").references("id").inTable("category");
    table.integer("ingredient_id").references("id").inTable("ingredients");

	table.boolean("delete").default(false);
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
    
}); 

exports.down = knex => knex.schema.dropTable("dish"); 
