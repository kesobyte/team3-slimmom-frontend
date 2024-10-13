import React from 'react';
import DiaryProductItem from 'components/DiaryProductItem/DiaryProductItem';

export default function DiaryProductsList() {
  return (
    <ul>
      <DiaryProductItem product="Pizza" grams="100" kcal="200" />
    </ul>
  );
}
