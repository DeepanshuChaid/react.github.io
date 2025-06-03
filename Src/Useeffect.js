import React, {useState, useEffect} from 'react';

function Useeffect() {
  
  const [count, setcount] = useState(0);
  
  useEffect(() => {
    document.title = `count: ${count}`
  }, [count])
  
  function addCount(){
    setcount(c => c + 1)
  }
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addCount}>Add</button>
    </div>  
  )
}

export default Useeffect