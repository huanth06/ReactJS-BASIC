import React from 'react'
import {useState} from 'react'
export default function useIncrement(addAmount) {
    const [count, setCount] = useState(0);
    let increase =() =>{
        setCount(count + addAmount);
    }
  return () => console.log(increase);
}
