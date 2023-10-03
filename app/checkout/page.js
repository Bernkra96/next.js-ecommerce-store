import { cookies } from 'next/headers';
import Image from 'next/image';
import { isTemplateExpression } from 'typescript';
import { getItem } from '../database/items';
import { deleteCart } from '../Items/[Itemid]/ActionCartItem';

export default function CheckoutPage() {
  const getItemCart = cookies().getAll('itemCart');
  const itemCart = getItemCart;
  const regex = /\d+(?=})/gm;
  const itemsid = regex.exec(JSON.stringify(itemCart));
  const item = getItem(Number(itemsid));

  return (
    <div>
      <h2>Checkout </h2>

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
        <button type="button" data-test-id="checkout-confirm-order">
          'Bey'
        </button>
      </form>

      <div>
        {' '}
        <h1>Yor Itmes </h1>
        <div>
          <h2>{item.itemName} </h2>

          <p>{item.brand} </p>
          <p>{'Price = ' + item.price / 100 + '€'} </p>
          <Image
            src={item.img}
            alt={item.itemName}
            unoptimized
            width={160}
            height={300}
          />
        </div>
        <p>{'Total = ' + item.price / 100 + '€'} </p>
      </div>
    </div>
  );
}
