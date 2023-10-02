'use client';

import { createOrUpdateCart } from './ActionCartItem';

export default function CartItemForm({ x }) {
  return (
    <div>
      <form>
        <button formAction={async () => await createOrUpdateCart(x)}>
          Add to Cart
        </button>
      </form>
    </div>
  );
}
