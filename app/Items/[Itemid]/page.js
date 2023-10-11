import { cookies } from 'next/headers';
import Image from 'next/image';
import { getItem } from '../../database/items.js';
import CartItemForm from './CartItemFrom';

export default function ItemPage(props) {
  const cookieStore = cookies();
  const itemmComments = cookieStore.getAll('itemmComments');
  const item = getItem(Number(props.params.Itemid));

  return (
    <main>
      <div>
        <h1>{item.itemName}</h1>

        <p> {item.brand} </p>
        <p> {'Rating ' + item.rating + ' / 5'} </p>
        <p> {'Price = ' + item.price / 100 + '€'} </p>
        <p> {'Stock : ' + item.stock + ' .stk'} </p>
        <Image
          src={item.img}
          alt={item.itemName}
          unoptimized
          width={350}
          height={600}
        />
      </div>
      <p>{item.shortdiscrion}</p>
      <CartItemForm x={item.id} />
      <ul>
        {itemmComments.map((cookie) => (
          <li key={`cookie-${cookie.id}`}>
            <p>{cookie.id}</p>
            <p>{cookie.comment}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
