import Image from 'next/image';
import Link from 'next/link';
import { getItems } from './database/items.js';
import { getItemsFromSql } from './database/psotgersControler';

export default async function Home() {
  const items = getItems();
  const newItems = await getItemsFromSql();
  console.log(newItems);

  return (
    <main>
      <h1> Bernhard Shop </h1>
      <p> Welcome to Bernhard's Shop</p>
      <h2>Our Products </h2>

      <ul>
        {items.map((item) => (
          <li key={`item.id ${item.id}`}>
            <Link href={`/Items/${item.id}`}>{item.itemName}</Link>
            <p> {item.brand} </p>
            <p> {'Rating ' + item.rating + ' / 5'} </p>
            <p> {'price = ' + item.price / 100 + '€'} </p>
            <Link href={`/Items/${item.id}`}>
              <Image
                src={item.img}
                alt={item.itemName}
                unoptimized={true}
                width={255}
                height={340}
              />
            </Link>
            <p> {'Stock : ' + item.stock + ' .stk'} </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
