'use client';

import { useState } from 'react';
import { createOrUpdateCart } from './ActionCartItem';

export default function CartItemForm(itemID) {
  const [selectNumber, setSelectNumber] = useState(1);

  return (
    <form>
      <button
        formAction={async () => await createOrUpdateCart(itemID, selectNumber)}
      >
        Add to Cart
      </button>
      <input
        type="number"
        min="1"
        max="10"
        defaultValue="1"
        value={selectNumber}
        onChange={(e) => setSelectNumber(e.currentTarget.value)}
      />
    </form>
  );
}
