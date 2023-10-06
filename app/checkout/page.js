import BuyForm from './BuyFrorm';

export default function CheckoutPage() {
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
      <div>
        <BuyForm />
      </div>
    </main>
  );
}
