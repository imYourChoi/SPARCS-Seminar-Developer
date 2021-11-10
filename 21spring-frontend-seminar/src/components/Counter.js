import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const onPlus = () => {
    setCount(count + 1);
  }
  const onMinus = () => {
    setCount(count - 1);
  }

  return (
    <div className='counter'>
      <button onClick = {onMinus}>-</button>
      <div>{count}</div>
      <button onClick = {onPlus}>+</button>
    </div>
  )
}

export default Counter;
