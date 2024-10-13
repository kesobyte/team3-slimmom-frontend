import React from 'react';
import { ImCross } from 'react-icons/im';

export default function DiaryProductItem({ product, grams, kcal }) {
  return (
    <li>
      <span>{product}</span>
      <span>{grams} g</span>
      <span>{kcal} kcal</span>
      <button>
        <ImCross />
      </button>
    </li>
  );
}
