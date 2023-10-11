import 'server-only';
import dotenv from 'dotenv';
import postgres from 'postgres';

type Item = {
  item_name: string;
  brand: string;
  price: number;
  rating: number;
  stock: number;
  img: string;
  short_description: string;
  description: string;
};
dotenv.config();

const sql = postgres();

export function loadDataStart() {
  const start = [
    {
      item_name: 'Nice product 01',
      brand: 'Öko cop',
      price: 123456789,
      stock: 10,
      rating: 2,
      img: 'https://images-assets.nasa.gov/image/sts119-s-005/sts119-s-005~thumb.jpg',
      short_description: 'Cool öko item ',
    },
    {
      item_name: 'Rocket',
      brand: 'Space AG',
      price: 841,
      rating: 3,
      stock: 1,
      img: 'https://images-assets.nasa.gov/image/KSC-20230518-PH-RKL01_0002/KSC-20230518-PH-RKL01_0002~medium.jpg',
      short_description: '3 Stages ',
    },
    {
      item_name: 'Big Rocket',
      brand: 'Y Space',
      price: 119,
      rating: 4,
      img: 'https://images-assets.nasa.gov/image/201401080005HQ/201401080005HQ~medium.jpg',
      short_description: 'Cool öko item ',
    },
    {
      item_name: 'Tool ',
      brand: 'Cool Tools Inc',
      price: 19999109,
      rating: 5,
      stock: 45,
      img: 'https://images-assets.nasa.gov/image/KSC-20220614-PH-CSH01_0044/KSC-20220614-PH-CSH01_0044~large.jpg',
      short_description: 'Cool öko item ',
    },
  ];

  sql`
     insert into items (
       item_name,
       brand,
     price,
     rating,
       stock,
       img,
       short_description
     ) values ${sql(
       start.map(
         (item) =>
           sql`(
           ${item.item_name},
           ${item.brand},
           ${item.price},
           ${item.rating},
           ${item.stock},
           ${item.img},
           ${item.short_description}
        )`,
       ),
     )}`;
}

export async function getItemsFromSql() {
  const newItems = await sql<Item[]>`
   SELECT * FROM items
   `;
  return newItems;
}

export async function getItemsSql() {
  return await getItemsFromSql();
}
