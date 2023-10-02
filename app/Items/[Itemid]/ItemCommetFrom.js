'use client';
import { useState } from 'react';
import { createOrUpdateComment } from './ActionsItemComment';

export default function ItemCommetForm() {
  const [comment, setComment] = useState('');

  return (
    <div>
      <form>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.currentTarget.value)}
        />
        <button formAction={async () => await createOrUpdateComment(comment)}>
          Add Comment
        </button>
      </form>
    </div>
  );
}
