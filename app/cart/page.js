import Image from 'next/image';
import { getItemById } from '../../database/psotgersControler';
import { getCookie } from '../../util/cookies';
import CartPageForm from './cartPageFrom';

export const metadata = {
  title: 'Cart page ',
  description: 'Generated by create next app',
};

export default async function CartPage() {
  const cookieData = await getCookie('cart');
  const cartItems = [];
  const items = [];
  cartItems.push(cookieData);

  for (let i = 0; i < cartItems.length; i++) {
    items.push(await getItemById(cartItems[i]));
  }

  return (
    <main>
      <h1>Cart page</h1>
      <h2>Cart Items</h2>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h3>{item.itemName}</h3>
            <p>{item.stock + '.Stk'}</p>
            <p>{item.price + '€'}</p>
            <p> {item.shortDescription}</p>
          </li>
        ))}
      </ul>

      <CartPageForm />
    </main>
  );
}
