'use client';

import { BuyItem } from './ActionsBuyFrom';

export default function BuyForm() {
  return <button onClick={async () => await BuyItem()}> Buy Confirm </button>;
}
