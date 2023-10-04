'use server';

import { redirect } from 'next/navigation';

export async function GoCeckout() {
  return await redirect('/chekout');
}
