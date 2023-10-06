'use server';

import { redirect } from 'next/navigation';

export async function BuyItem() {
  await redirect('/thanks');
}
