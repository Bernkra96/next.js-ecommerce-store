'use client';

import { useState } from 'react';
import { createOrUpdateCart } from './ActionCartItem';

export default function CartItemForm(item) {
  const [selectNumber, setSelectNumber] = useState(1);

  return (
    <form>
      <button
        formAction={async () => await createOrUpdateCart(item, selectNumber)}
      >
        Add to Cart
      </button>
      <input
        type="number"
        min="1"
        max="100"
        defaultValue="1"
        value={selectNumber}
        onChange={(e) => setSelectNumber(e.currentTarget.value)}
      />
    </form>
  );
}
