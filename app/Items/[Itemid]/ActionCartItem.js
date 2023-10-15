'use server';

import { get } from 'http';
import { cookies } from 'next/headers';

export async function createOrUpdateCart(x) {
  const lodeCookie = cookies().get('cart');
  // let getCookie = JSON.stringify(lodeCookie);

  // cookie.(getCookie); //getCookie is an array
  //  let cardId = 1;
  // getCookie += JSON.stringify({ x });

  cookies().set('cart', x);

  // cardId++;
}
