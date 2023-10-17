'use server';
import { redirect } from 'next/dist/server/api-utils';
import { deleteCartBySessionIdAndItemId } from '../../database/CardsControler';
import { SessionIdManager } from '../../util/SessionIdManger';

export async function DeleteCartItem(itemId) {
  const sessionId = await SessionIdManager();
  console.log(sessionId);
  console.log(itemId);
  await deleteCartBySessionIdAndItemId(sessionId, itemId);
  redirect('/cart');
}
