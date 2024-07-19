// Specifying where your migration scripts will live 
//drizzle kit push will read this config file -> which then reads our schema file 
// -> and figure out how to automatically write your migration scripts and apply them to your db
import { env } from "@/env";
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    dialect: "postgresql",
    schema: "./src/db/schema.ts",
    out: "./drizzle",
    dbCredentials: {
        url: env.DATABASE_URL
    },
    verbose: true, 
    strict: true,
});