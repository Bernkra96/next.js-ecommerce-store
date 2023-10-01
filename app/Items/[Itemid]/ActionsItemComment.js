'use server';

import { cookies } from 'next/headers';

export async function createOrUpdateComment(Commet) {
  await cookies().set(
    'itemmComments',
    JSON.stringify([{ id: 1, comment: Commet }]),
  );
}
