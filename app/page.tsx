import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import {
  createCart,
  deleteCartBySessionId,
  getCartsFromSql,
} from '../database/CardsControler';
import { up } from '../database/CardsSql';
import { sql } from '../database/connect';
import { createTables } from '../database/databaseSetup';
import { getItemsFromSql } from '../database/psotgersControler';
import { setCookie } from '../util/cookies';
import { SessionIdManager } from '../util/SessionIdManger';

export const metadata = {
  title: 'Mainpage  page',
  description: 'Generated by create next app',
};

export default async function Home() {
  const newItems = await getItemsFromSql();
  // await crateItem('test01', 'test02', 100, 100, 'test03IMG', 'test04', 'testG');
  // await up(sql);

  // await deleteCartBySessionId(70129);

  /// await createTables();
  const sessionId = await SessionIdManager();

  // console.log(getItemsFromSql().then((resA) => console.log(resA)));
  // console.log(getItemsFromSql().then((rB) => console.log(rB)));
  console.log(sessionId);

  console.log(await getCartsFromSql());
  return (
    <main>
      <h1> Bernhard Shop </h1>
      <p> Welcome to Bernhard's Shop</p>
      <h2>Our Products </h2>

      <ul>
        {newItems.map((newitem) => (
          <li key={`item.id ${newitem.id}`}>
            <Link href={`/Items/${newitem.id}`}>{newitem.itemName}</Link>
            <p> {newitem.brand} </p>

            <p> {'price = ' + newitem.price + '€'} </p>
            <Link href={`/Items/${newitem.id}`}>
              <Image
                src={newitem.img}
                alt={newitem.itemName}
                unoptimized={true}
                width={255}
                height={340}
              />
            </Link>
            <p> {'Stock : ' + newitem.stock + ' .stk'} </p>
            <p> {newitem.shortDescription} </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
