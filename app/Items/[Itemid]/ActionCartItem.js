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
  // let oldCookie = [];
  // let newData = [];
  // const getCookie = lodeCookie;
  let cookie = sessionId;
  // oldCookie.push(getCookie);
  // newData.push(x);
  // const Cookie = oldCookie.concat(newData);
  // console.log(Cookie);
  let sessionIdCart = await getCartBySessionIdAndItemId(sessionId, itemId);
  // await createCart(10100, 11, 5);
  if (sessionIdCart === undefined) {
    await createCart(sessionId, itemId, NumberSelect);
  } else {
    let sum = Number(NumberSelect) + Number(sessionIdCart.quantity);

    await updateCartItemQuanttiyperSessionIdansItemId(sessionId, itemId, sum);
  }

  console.log(sessionIdCart);
  console.log(sessionId);
  console.log(allCarts);
  // Cookie.push(parsed);
  // Cookie.push(x);
  // cookie.(getCookie); //getCookie is an array
  //  let cardId = 1;
  // getCookie += JSON.stringify({ x });
  // stringifyCookie(Cookie);
  console.log(sessionIdCart);
  console.log(cookie);

  cookies().set('cart', cookie);

  // cardId++;()
}
