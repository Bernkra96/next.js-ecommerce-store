'use client';

import { GoCeckout } from './cartPage';

export default function CartPageForm() {
  return (
    <>
      <button type="button" onClick={async () => await GoCeckout()}>
        Buy
      </button>
      <button type="button">Delide Card</button>
    </>
  );
}
