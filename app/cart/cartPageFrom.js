'use client';

import { GoCeckout } from './cartPage';

export default function CartPageForm() {
  return <button onClick={async () => await GoCeckout()}> Buy </button>;
}
