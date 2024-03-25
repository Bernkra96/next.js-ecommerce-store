'use server';

import { redirect } from 'next/navigation';

export async function GoCeckout() {
  await redirect('/checkout');
