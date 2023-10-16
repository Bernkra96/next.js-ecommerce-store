import { Sql } from 'postgres';
import { sql } from './connect';

export type Carts = {
  id: number;
  sessionId: number;
  itemId: number; // from items table foreign key
  quantity: number;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE carts (id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,session_id integer NOT NULL,item_id integer NOT NULL,quantity integer NOT NULL);
  `;
}


// CREATE TABLE carts (id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,session_id integer NOT NULL,item_id integer NOT NULL,quantity integer NOT NULL);

export async function down(sql: Sql) {
  await sql`
    DROP TABLE carts
  `;
}
