'use client';

import { BuyItem } from './ActionsBuyFrom';

export default function BuyForm(id) {
  return <button onClick={async () => await BuyItem(id)}> Buy Confirm </button>;
}
