// define your tables and your database in docker compose
// drizzle is used to define what those tables are going to look like, what properties you want on those tables
// remember to name your tables, connect to the correct db package
 import { pgTable, serial } from 'drizzle-orm/pg-core';

 //create table 
 export const bids = pgTable('bb_bids', { //bids= internal variable used in application, bb_bids is your table in postgres
    id: serial('id').primaryKey(),
 }

);