'use server';

import { cookies } from 'next/headers';

export async function createOrUpdateCart(Item) {
  await cookies().set('itemCart', JSON.stringify([{ id: 1, ItemId: Item }]));
}

export async function deleteCart() {
  await cookies().set('itemCart');
}
