import { cookies } from 'next/headers';

export default function cartPage() {
  const getItemCart = cookies().getAll('itemCart');
  const itemCart = JSON.stringify(getItemCart);
  const regex = /\d+(?=})/gm;
  const items = regex.exec(itemCart);

  console.log(itemCart);
  return (
    <>
      <h1>Yor Itmes </h1>

      <p> {items} </p>

      <div></div>

      <h3>Yor Total </h3>

      <h3> Ceckot </h3>

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
    </>
  );
}
