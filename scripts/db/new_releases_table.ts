import { dbConnection } from "../utils/db";

const tableName = "releases_2";
const knex = dbConnection();

knex.schema.hasTable(tableName).then(async (alreadyExists) => {
  if (alreadyExists) {
    console.log(`Table ${tableName} already exists!`);
  } else {
    await knex.schema
      .createTable(tableName, (table) => {
        table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
        table.uuid("entry_id").notNullable();
        table.string("name");
        table.string("version");
        table.string("format");
        table.text("discogs_url");
        table.string("release_date", 10);
        table.jsonb("countries");
        table.jsonb("cat_numbers");
        table.jsonb("matrix_runout");
        table.text("comment");
        table.text("condition_problems");
        table.uuid("release_artist_id");
        table.boolean("part_of_queen_collection");
        table.text("relation_to_queen");
        table.jsonb("tags");
        table.jsonb("parent_releases");
        table.boolean("jukebox_hole").defaultTo(false);
        table.boolean("picture_sleeve").defaultTo(true);
        table.jsonb("speed");

        table.foreign("entry_id").references("id").inTable("entries_2");
        table.foreign("format").references("id").inTable("formats");
        table
          .foreign("release_artist_id")
          .references("id")
          .inTable("artists_2");
      })
      .then(() => console.log(`Table ${tableName} succesfully created`))
      .catch((error) => {
        console.log(`Table ${tableName} could not be created:`);
        console.log(error);
      });
  }

  knex.destroy();
});
