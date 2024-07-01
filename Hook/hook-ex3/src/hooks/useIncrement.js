import {useState} from 'react'
export const useIncrement = addAmount => {
    const [count, setCount] = useState(0);
    function increase() {
        const newState = count + addAmount;
        setCount(newState);
    }
    return [count, increase];
}