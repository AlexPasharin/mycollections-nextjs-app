import { dbConnection } from "../utils/db";

const tableName = "artists_2";
const knex = dbConnection();

knex.schema.hasTable(tableName).then(async (alreadyExists) => {
  if (alreadyExists) {
    console.log(`Table ${tableName} already exists!`);
  } else {
    await knex.schema
      .createTable(tableName, (table) => {
        table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
        table.string("name").unique().notNullable();
        table.string("name_for_sorting");
        table.jsonb("parent_artists");
        table.jsonb("other_names");
      })
      .then(() => console.log(`Table ${tableName} succesfully created`))
      .catch((error) => {
        console.log(`Table ${tableName} could not be created:`);
        console.log(error);
      });
  }

  knex.destroy();
});
