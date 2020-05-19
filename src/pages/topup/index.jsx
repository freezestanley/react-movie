import React from 'react';
import CardPage from './card';
import DirectPage from './direct';

export default function TopupPage(props) {
  const currentProduct = {
    // type: Math.random() > 0.5 ? 1 : 2,
    type: 1,
  };
  return (
    <>
      {currentProduct.type === 1 && <DirectPage />}
      {currentProduct.type === 2 && <CardPage />}
    </>
  );
}