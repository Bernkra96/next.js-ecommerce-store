'use client';

import { useState } from 'react';
import { BuyItem } from './ActionsBuyFrom';

export default function BuyForm() {
  const [select, setSelect] = useState(1);

  return (
    <div>
      <form>
        <button
          type="button"
          onClick={async () => {
            return await BuyItem();
          }}
          data-test-id="checkout-confirm-order"
        >
          'Buy'
        </button>

        <select value={select} onChange={(e) => setSelect(e.target.value)}>
          <h4> {select} </h4>
          <option>01</option>
          <option>02</option>
          <option>03</option>
          <option>04</option>
          <option>05</option>
        </select>
      </form>
    </div>
  );
}
