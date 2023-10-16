'use server';

import { stringifyCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';
import { SessionIdManager } from '../../../util/SessionIdManger';

export async function createOrUpdateCart(Itemid, NumberSelect) {
  const sessionId = await SessionIdManager();

  // let oldCookie = [];
  // let newData = [];
  // const getCookie = lodeCookie;
  let cookie = sessionId;
  // oldCookie.push(getCookie);
  // newData.push(x);
  // const Cookie = oldCookie.concat(newData);
  // console.log(Cookie);

  // Cookie.push(parsed);
  // Cookie.push(x);
  // cookie.(getCookie); //getCookie is an array
  //  let cardId = 1;
  // getCookie += JSON.stringify({ x });
  // stringifyCookie(Cookie);
  console.log(cookie);

  cookies().set('cart', cookie);

  // cardId++;()
}
