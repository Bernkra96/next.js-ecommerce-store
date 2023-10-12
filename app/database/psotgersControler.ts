import dotenv from 'dotenv';
import postgres, { Sql } from 'postgres';

dotenv.config();

type items = {
  itemName: string;
  brand: string;
  price: number;
  rating: number;
  stock?: number;
  img: string;
  shortDescription: string;
  description: string;
};

declare module global {
  let postgresSqlClient: Sql;
}

function connectToPostgres() {
  global.postgresSqlClient = postgres({
    ssl: process.env.POSTGRES_URL
      ? {
          rejectUnauthorized: false,
        }
      : false,
    transform: {
      ...postgres.camel,
    },
  });

  return (...sqlParameters: Parameters<typeof global.postgresSqlClient>) => {
    return global.postgresSqlClient(...sqlParameters);
  };
}

connectToPostgres();

export async function getItemsFromSql() {
  const newItems = await global.postgresSqlClient<items[]>`
   SELECT * FROM items
   `;
  return newItems;
}

export async function getItemsSql() {
  return await getItemsFromSql;
}
