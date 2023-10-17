'use client';

import { DeleteCartItem } from './ActionDeleteCartItem';

export default function DeleteCartItemButton(itemId) {
  return (
    <button onClick={async () => DeleteCartItem( itemId)}>
      Delete
    </button>
  );
}
