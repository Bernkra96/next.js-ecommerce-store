import { cookies } from 'next/headers';
import Image from 'next/image';
import { getItem } from '../database/items';
import CartPageForm from './cartPageFrom';

export default function cartPage() {
  // const cookieStore = cookies();
  // const itemCart = cookieStore.get('itemCart');
  //  const item = getItem(1);

  const getItemCart = cookies().getAll('itemCart');
  const itemCart = getItemCart;
  const regex = /\d+(?=})/gm;
  const itemsid = regex.exec(JSON.stringify(itemCart));
  const item = getItem(Number(itemsid));

  return (
    <>
      <h1>Yor Itmes </h1>
      <div>
        <h2>{item.itemName} </h2>

        <p>{item.brand} </p>
        <p>{'Price = ' + item.price / 100 + '€'} </p>
        <Image
          src={item.img}
          alt={item.itemName}
          unoptimized
          width={350}
          height={600}
        />
      </div>

      <CartPageForm />
      <p>{'Total = ' + item.price / 100 + '€'} </p>
    </>
  );
}
