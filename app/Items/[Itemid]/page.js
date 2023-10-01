import { cookies } from 'next/headers';
import Image from 'next/image';
import { getItem } from '../../database/items';
import ItemCommetForm from './ItemCommetFrom';

export default function ItemPage(props) {
  const cookieStore = cookies();
  const itemmComments = cookieStore.getAll('itemmComments');
  const item = getItem(Number(props.params.Itemid));

  return (
    <>
      <div>
        <h1>{item.itemName}</h1>

        <p> {item.brand} </p>
        <p> {'Rating ' + item.rating + ' / 5'} </p>
        <p> {'price = ' + item.price / 100 + '€'} </p>
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

      <ItemCommetForm />

      <itemmComments />

      <ul>
        {itemmComments.map((cookie) => (
          <li key={`cookie-${cookie.id}`}>
            <p>{cookie.id}</p>
            <p>{cookie.comment}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
