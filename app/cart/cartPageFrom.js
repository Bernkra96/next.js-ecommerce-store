'use client';

import { GoCeckout } from './cartPage';

export default function CartPageForm() {
  return (
    <div>
      {' '}
      <a href="/checkout">Buy</a>
      <button type="button" onClick={async () => await GoCeckout()}>
        Buy
      </button>
      <button type="button">Delide Card</button>
    </div>
  );
}
