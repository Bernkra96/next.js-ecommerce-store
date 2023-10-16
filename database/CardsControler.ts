import { cache } from 'react';
import { Carts } from './CardsSql';
import { sql } from './connect';

export const getCartsFromSql = cache(async () => {
  const carts = await sql<Carts[]>`
    SELECT
      *
    FROM
      carts
  `;
  return carts;
});

export const createCart = cache(
  async (sessionId: number, itemId: number, quantity: number) => {
    const [cart] = await sql<Carts[]>`
 INSERT INTO carts
        (session_id, item_id, quantity)
      VALUES
        (${sessionId}, ${itemId}, ${quantity})
      RETURNING *

    `;
    return cart;
  },
);

export const getCartById = cache(async (id: number) => {
  const [cart] = await sql<Carts[]>`
    SELECT
      *
    FROM
      carts
    WHERE
      id = ${id}
  `;
  return cart;
});

export const getCartsbySessionId = cache(async (sessionId: number) => {
  const [carts] = await sql<Carts[]>`
    SELECT
      *
    FROM
      carts
    WHERE session_id = ${sessionId}

  `;
  return carts;
});

export const updateCart = cache(
  async (id: number, sessionId: number, itemId: number, quantity: number) => {
    const [cart] = await sql<Carts[]>`
    UPDATE carts
    SET
      session_id = ${sessionId},
      item_id = ${itemId},
      quantity = ${quantity}
    WHERE
      id = ${id}
    RETURNING *
  `;
    return cart;
  },
);

export const updateCartBySessionId = cache(
  async (sessionId: number, itemId: number, quantity: number) => {
    const [cart] = await sql<Carts[]>`
    UPDATE carts
    SET
      session_id = ${sessionId},
      item_id = ${itemId},
      quantity = ${quantity}
    WHERE
      session_id = ${sessionId}
    RETURNING *
  `;
    return cart;
  },
);

export const updateCartItemQuanttiyperSessionIdansItemId = cache(
  async (sessionId: number, itemId: number, quantity: number) => {
    const [cart] = await sql<Carts[]>`
    UPDATE carts
    SET
      session_id = ${sessionId},
      item_id = ${itemId},
      quantity = ${quantity}
    WHERE
      session_id = ${sessionId} AND item_id = ${itemId}
    RETURNING *
  `;
    return cart;
  },
);

export const deleteCart = cache(async (id: number) => {
  const [cart] = await sql<Carts[]>`
    DELETE FROM carts
    WHERE id = ${id}
    RETURNING *
  `;
  return cart;
});

export const deleteCartBySessionId = cache(async (sessionId: number) => {
  const carts = await sql<Carts[]>`
    DELETE FROM carts
    WHERE session_id = ${sessionId}
    RETURNING *
  `;
  return carts;
});
