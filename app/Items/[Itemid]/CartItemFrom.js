'use client';

import { useState } from 'react';
import { getItemById } from '../../../database/psotgersControler';
import { createOrUpdateCart } from './ActionCartItem';

export default function CartItemForm(itemid, stock) {
  const [selectNumber, setSelectNumber] = useState(1);
  const itemStock = stock;
  const maxStock = 10;

  return (
    <form>
      <button
        formAction={async () => await createOrUpdateCart(itemid, selectNumber)}
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
