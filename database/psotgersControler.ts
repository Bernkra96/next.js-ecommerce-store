import 'server-only';
import { cache } from 'react';
import { sql } from './connect';
import { Items } from './ItemsSql';

export const getItemsFromSql = cache(async () => {
  const items = await sql<Items[]>`
    SELECT
      *
    FROM
      items
  `;
  return items;
});

export const crateItem = cache(
  async (
    itemName: string,
    brand: string,
    price: number,

    stock: number,
    img: string,
    shortDescription: string,
    description: string,
  ) => {
    const [item] = await sql<Items[]>`
 INSERT INTO items
        (item_name, brand, price,stock,img,short_description,description)
      VALUES
        (${itemName}, ${brand}, ${price},${stock},${img}, ${shortDescription},${description})
      RETURNING *

    `;
    return item;
  },
);

export const getItemById = cache(async (id: number) => {
  const [item] = await sql<Items[]>`
    SELECT
      *
    FROM
      items
    WHERE
      id = ${id}
  `;
  return item;
});

export const getItemsByIdS = cache(async (id: number) => {
  const items = await sql<Items[]>`
    SELECT
      *
    FROM
      items
    WHERE id = ${id}

  `;
  return items;
});

export const deleteItem = cache(async (id: number) => {
  const [item] = await sql<Items[]>`
    DELETE FROM items
    WHERE id = ${id}
    RETURNING *
    `;
  return item;
});
