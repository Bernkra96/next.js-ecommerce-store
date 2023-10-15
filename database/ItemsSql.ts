import { Sql } from 'postgres';

export type Items = {
  id: number;
  itemName: string;
  brand: string | null;
  price: number | null;
  rating: number | null;
  stock: number | null;
  img: string | null;
  shortDescription: string | null;
  description: string | null;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE items (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      item_name varchar(70) NOT NULL,
      brand varchar(70) ,
      price integer ,

      stock integer ,
      img text ,
      short_description text ,
      description text  ,
    );
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE items
  `;
}
