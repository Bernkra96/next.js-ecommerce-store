'use server';

import { cookies } from 'next/headers';
import {
  createCart,
  getCartBySessionIdAndItemId,
  getCartsFromSql,
  updateCartItemQuanttiyperSessionIdansItemId,
} from '../../../database/CardsControler';
import { SessionIdManager } from '../../../util/SessionIdManger';

export async function createOrUpdateCart(Itemid, NumberSelect) {
  const sessionId = await SessionIdManager();
  const allCarts = await getCartsFromSql();
  const itemId = JSON.stringify(Itemid.item);

  let sessionIdCart = allCarts.find(function (value) {
    return value.sessionId === sessionId && value.itemId === itemId;
  });

  if (sessionIdCart === undefined) {
    await createCart(sessionId, itemId, NumberSelect);
  } else {
    let sum = Number(NumberSelect) + Number(sessionIdCart.quantity);

    await updateCartItemQuanttiyperSessionIdansItemId(sessionId, itemId, sum);
  }

  console.log(sessionId);
  console.log(allCarts);

  cookies().set('cart', sessionId);

  // cardId++;()
}
