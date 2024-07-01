import React from 'react'
import { useIncrement } from '../hooks/useIncrement'
export default function Counter() {
  const [count,increase] = useIncrement(1);
  return (
    <>
      <h2>Count: {count}</h2>
      <button type="" onClick={increase}>Add 1</button>
    </>
  )
}
