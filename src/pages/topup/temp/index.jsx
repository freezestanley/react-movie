import React, { useReducer } from 'react';
import useInterval from '@/hooks/useInterval';

export default function TopupTemp() {
  const [state, setState] = useReducer((o, n) => ({ ...o, ...n }), {

  })
  return (
    <div>temp</div>
  );
}