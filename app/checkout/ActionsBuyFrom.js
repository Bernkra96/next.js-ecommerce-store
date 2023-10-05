'use server';

import { redirect } from 'next/';

export async function BuyItem() {
  await redirect('/thanks');
}
