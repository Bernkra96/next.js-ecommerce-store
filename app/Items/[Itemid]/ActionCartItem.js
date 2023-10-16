'use server';

import { stringifyCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';
import {
  createCart,
  getCartsbySessionId,
  getCartsFromSql,
} from '../../../database/CardsControler';
import { up } from '../../../database/CardsSql';
import { SessionIdManager } from '../../../util/SessionIdManger';

export async function createOrUpdateCart(Itemid, NumberSelect) {
  const sessionId = await SessionIdManager();
  const allCarts = await getCartsFromSql();
  // let oldCookie = [];
  // let newData = [];
  // const getCookie = lodeCookie;
  let cookie = sessionId;
  // oldCookie.push(getCookie);
  // newData.push(x);
  // const Cookie = oldCookie.concat(newData);
  // console.log(Cookie);
  let sessionIdCart = await getCartsbySessionId(sessionId);
  // await createCart(10100, 11, 5);
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
