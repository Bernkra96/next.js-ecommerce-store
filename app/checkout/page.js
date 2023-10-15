import Image from 'next/image';
import { getItemById } from '../../database/psotgersControler';
import { getCookie } from '../../util/cookies';
import BuyForm from './BuyFrorm.js';

export const metadata = {
  title: 'Ceckout page ',
  description: 'Generated by create next app',
};

export default async function CheckoutPage() {
  const cookieData = await getCookie('cart');
  const cartItems = [];
  const items = [];
  cartItems.push(cookieData);
  cartItems.push(21);

  for (let i = 0; i < cartItems.length; i++) {
    items.push(await getItemById(cartItems[i]));
  }

  return (
    <main>
      <form>
        <ul>
          <li>
            <label>
              First Name:
              <input name="todo" data-test-id="checkout-first-name" required />
            </label>
          </li>
          <li>
            <label>
              Last Name:
              <input name="todo" data-test-id="checkout-last-name" required />
            </label>
          </li>
          <li>
            <label>
              E-Mail:
              <input name="todo" required data-test-id="checkout-email" />
            </label>
          </li>
          <li>
            <label>
              Address:
              <input name="todo" required data-test-id="checkout-address" />
            </label>
          </li>
          <li>
            <label>
              City:
              <input name="todo" required data-test-id="checkout-city" />
            </label>
          </li>
          <li>
            <label>
              Postal Code:
              <input name="todo" required data-test-id="checkout-postal-code" />
            </label>
          </li>
          <li>
            <label>
              Country:
              <input name="todo" required data-test-id="checkout-country" />
            </label>
          </li>
          <li>
            <label>
              Credit Card:
              <input name="todo" required data-test-id="checkout-credit-card" />
            </label>
          </li>
          <li>
            <label>
              Expiration-Date:
              <input
                name="todo"
                required
                data-test-id="checkout-expiration-date"
              />
            </label>
          </li>
          <li>
            <label>
              Security Code:
              <input
                name="todo"
                required
                data-test-id="checkout-security-code"
              />
            </label>
          </li>
        </ul>
      </form>
      <h1>Yor Itmes </h1>
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
      <BuyForm />
    </main>
  );
}
