import react, {useState} from 'react';

export default function Colorpicker() {
  
  const [color, setcolor] = useState("#ffffff");
  
  function colorchange(e) {
    setcolor(e.target.value)
  }
  
  return (
    <div clasName="color-picker">
      <h1>Color picker</h1>
      <div className="colordisplay" style={{backgroundColor: color}}>
        <p>selected color</p>
      </div>
      
      <label>select a color</label>
      <input type="color" value={color} onChange={colorchange}/>
      
    </div>
  )
  
  
  
}
