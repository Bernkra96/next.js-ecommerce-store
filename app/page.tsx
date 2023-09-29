import Image from 'next/image';
import Link from 'next/link';
import { getItems } from './database/items';

const items = getItems();
export default function Home() {
  return (
    <main>
      <h1> Bernhard Shop </h1>

      <p> Willkommen in Bernahrd's Shop</p>

      <h2>Unsre Protuckte </h2>

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
                unoptimized
                width={255}
                height={340}
              />
            </Link>
            <p> {'Stock : ' + item.stock + ' .stk'} </p>

            <p>{item.shortdiscrion}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
