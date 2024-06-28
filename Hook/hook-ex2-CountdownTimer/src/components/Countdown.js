import { useState, useEffect, useRef } from 'react'

export default function Countdown(props) {
  const [countDown, setCountdown] = useState(props.seconds);
  const timerID = useRef();
  useEffect(() => {
    timerID.current = setInterval(() => {
      setCountdown(prev => prev - 1)
    }, 1000)
    return () => clearInterval(timerID.current)
  }, []);
  useEffect(() => {
    if (countDown < 0) {
      clearInterval(timerID.current);
      alert("Time’s up");
    }
  }, [countDown]);
  return (
    <>
      <h2>Countdown: {countDown}</h2>
    </>
  )
}
