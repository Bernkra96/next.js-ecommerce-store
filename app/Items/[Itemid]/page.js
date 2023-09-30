import Image from 'next/image';
import { getItem } from '../../database/items';

export default function ItemPage(props) {
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
      <div>
        <p>{item.shortdiscrion}</p>
      </div>
    </>
  );
}
