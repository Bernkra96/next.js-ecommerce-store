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
              <input
                name="todo"
                required
                data-test-id="checkout-address"
              />{' '}
            </label>{' '}
          </li>{' '}
          <li>
            <label>
              {' '}
              City:
              <input name="todo" required data-test-id="checkout-city" />
            </label>{' '}
          </li>{' '}
          <li>
            <label>
              Postal Code:
              <input
                name="todo"
                required
                data-test-id="checkout-postal-code"
              />{' '}
            </label>{' '}
          </li>{' '}
          <li>
            <label>
              {' '}
              Country:
              <input
                name="todo"
                required
                data-test-id="checkout-country"
              />{' '}
            </label>{' '}
          </li>{' '}
          <li>
            <label>
              {' '}
              Credit Card:
              <input
                name="todo"
                required
                data-test-id="checkout-credit-card"
              />{' '}
            </label>{' '}
          </li>{' '}
          <li>
            <label>
              {' '}
              Expiration-Date:
              <input
                name="todo"
                required
                data-test-id="checkout-expiration-date"
              />
            </label>{' '}
          </li>{' '}
          <li>
            <label>
              {' '}
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
          {'Bey'}{' '}
        </button>
      </form>
    </>
  );
}
