'use server';

import { redirect } from 'next/navigation';
import { deleteCartBySessionId } from '../../database/CardsControler';
import { removeCookie } from '../../util/cookies';
import { SessionIdManager } from '../../util/SessionIdManger';

export async function BuyItem() {
  const sessionId = await SessionIdManager();
  await deleteCartBySessionId(sessionId);

  await removeCookie('cart');

  await redirect('/thanks');
}
