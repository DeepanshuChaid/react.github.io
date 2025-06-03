import React, { useState } from 'react';
import './Component.css'


function Component2() {
  const [count, setCount] = useState(0);
  
  const increase = () => {
    setCount(count + 1)
  }
  
  const decrease = () => {
    setCount(count - 1)
  }
  
  const reset = () => {
    setCount(0)
  }
  
  return (
    <div className="comp">
      <h1 className="h1">{count}</h1>
      <button className="reset"  onClick={reset}>reset</button>
      <button className="decrease" onClick={decrease}>decrease</button>
      <button className="increase" onClick={increase}>increase</button>
    </div>  
  )
  
  
}

export default Component2;