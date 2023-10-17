'use server';
import { cookies } from 'next/headers';

export async function getCookie(name: string) {
  return await cookies().get(name)?.value;
}

export async function setCookie(name: string, value: any) {
  await cookies().set(name, value);
  return;
}

export async function removeCookie(name: string) {
  await cookies().delete(name);
  return;
}
