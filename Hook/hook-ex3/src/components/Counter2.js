import React from 'react'
import { useIncrement } from '../hooks/useIncrement'
export default function Counter2() {
  const [count,increase] = useIncrement(2);
  return (
    <>
      <h2>Count: {count}</h2>
      <button type="" onClick={increase}>Add 2</button>
    </>
  )
}
