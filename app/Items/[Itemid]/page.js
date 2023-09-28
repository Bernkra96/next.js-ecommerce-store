import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getItem } from '../../database/items';

function addCart() {}

export default function ItemPage(props) {
  const item = getItem(Number(props.params.Itemid));
  return (
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
        width={625}
        height={500}
      />
      <button onClick={addCart()}>Add do Cart</button>
      <p>{item.shortdiscrion}</p>
    </div>
  );
}
