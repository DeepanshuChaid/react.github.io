import react, {useState} from 'react'

function Component() {
  
  let [count, setcount] = useState(0);
  
  function decrease() {
    setcount(count - 1)
  }
  function reset() {
    setcount(0)
  }
  function increase() {
    setcount(c => c + 1)
  }
  
  const [car, setcar] = useState({year: 2025,
                                  make: "frog",
                                  model: "toyota"
  })
  
  function yearchange(e) {
    setcar(car => ({...car,  year: e.target.value}))
  }
  
  function makechange(e) {
    setcar(car => ({...car,  make: e.target.value}))
  }
  
  function modelchange(e) {
    setcar(car => ({...car,  model: e.target.value}))
  }
  
  const [food, setfood] = useState(["apple", "burger", "pineapple", "dahi"])
  
  function handleaddfood() {
    const newfood = document.getElementById("foodinput").value
    document.getElementById("foodinput").value = ""
    
    if (newfood === "") {
      
    } else {
      setfood(f => [...f, newfood])
    }
  }
  
  function handleremovefood(index) {
    setfood(food.filter((_, i) => i !== index))
  }
                   
    
    
    let styles = {
      display: "flex",
      flexDirection: "row",
      gap: "24px",
    };               
                                                                          
  return (
    <div>
      
      <div>
        <h2>List of food</h2>
        <ul>
          {food.map((food, index) => <div style={styles}> <li key={index}>{food}</li> <button
          onClick={() => handleremovefood(index)}>Remove</button> </div>)}
        </ul>
        <input type="text" id="foodinput" placeholder="Enter your food name"/>
        <button onClick={handleaddfood}>Add Food</button>
      </div>
    
      <div>
        <h1>Count: {count}</h1>
        <button onClick={decrease}>decrease</button>
        <button onClick={reset}>reset</button>
        <button onClick={increase}>increase</button>
      </div>
      
      <div>
        <p>your fav car is: {car.year} {car.model} {car.make} </p>
        
        <input type="number" value={car.year} onChange={yearchange}></input>
        <input type="text" value={car.make} onChange={makechange}></input>
        <input type="text" value={car.model} onChange={modelchange}></input>
      </div>
      
    </div>
  )
}

export default Component