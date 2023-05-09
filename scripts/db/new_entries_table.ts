import { dbConnection } from "../utils/db";

const tableName = "entries_2";
const knex = dbConnection();

knex.schema.hasTable(tableName).then(async (alreadyExists) => {
  if (alreadyExists) {
    console.log(`Table ${tableName} already exists!`);
  } else {
    await knex.schema
      .createTable(tableName, (table) => {
        table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
        table.string("name").notNullable();
        table.integer("type").unsigned().notNullable();
        table.string("release_date", 10);
        table.uuid("artist_id").notNullable();
        table.uuid("entry_artist_id");
        table.text("comment");
        table.text("discogs_url");
        table.boolean("part_of_queen_collection");
        table.text("relation_to_queen");
        table.jsonb("tags");
        table.jsonb("parent_entries");

        table.foreign("type").references("id").inTable("types");
        table.foreign("artist_id").references("id").inTable("artists_2");
        table.foreign("entry_artist_id").references("id").inTable("artists_2");

        table.unique(["name", "type", "artist_id"], {
          indexName: "entry_unique_index",
        });
      })
      .then(() => console.log(`Table ${tableName} succesfully created`))
      .catch((error) => {
        console.log(`Table ${tableName} could not be created:`);
        console.log(error);
      });
  }

  knex.destroy();
});
