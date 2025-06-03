import './Key.css';

function Key({ pressedKeys }) { // Accept array
  return (
    <div className="keyboard">
      <div className="row">
        <div className={`key ${pressedKeys.includes('`') ? 'active' : ''}`}>~`</div>
        <div className={`key ${pressedKeys.includes('1') ? 'active' : ''}`}>1</div>
        <div className={`key ${pressedKeys.includes('2') ? 'active' : ''}`}>2</div>
        <div className={`key ${pressedKeys.includes('3') ? 'active' : ''}`}>3</div>
        <div className={`key ${pressedKeys.includes('4') ? 'active' : ''}`}>4</div>
        <div className={`key ${pressedKeys.includes('5') ? 'active' : ''}`}>5</div>
        <div className={`key ${pressedKeys.includes('6') ? 'active' : ''}`}>6</div>
        <div className={`key ${pressedKeys.includes('7') ? 'active' : ''}`}>7</div>
        <div className={`key ${pressedKeys.includes('8') ? 'active' : ''}`}>8</div>
        <div className={`key ${pressedKeys.includes('9') ? 'active' : ''}`}>9</div>
        <div className={`key ${pressedKeys.includes('0') ? 'active' : ''}`}>0</div>
        <div className={`key ${pressedKeys.includes('-') ? 'active' : ''}`}>-</div>
        <div className={`key ${pressedKeys.includes('=') ? 'active' : ''}`}>=</div>
        <div id="back" className={`key ${pressedKeys.includes('Backspace') ? 'active' :
        ''}`}>Backspace</div>
      </div>

      <div className="row offset-1">
        <div className={`key ${pressedKeys.includes('q') ? 'active' : ''}`}>q</div>
        <div className={`key ${pressedKeys.includes('w') ? 'active' : ''}`}>w</div>
        <div className={`key ${pressedKeys.includes('e') ? 'active' : ''}`}>e</div>
        <div className={`key ${pressedKeys.includes('r') ? 'active' : ''}`}>r</div>
        <div className={`key ${pressedKeys.includes('t') ? 'active' : ''}`}>t</div>
        <div className={`key ${pressedKeys.includes('y') ? 'active' : ''}`}>y</div>
        <div className={`key ${pressedKeys.includes('u') ? 'active' : ''}`}>u</div>
        <div className={`key ${pressedKeys.includes('i') ? 'active' : ''}`}>i</div>
        <div className={`key ${pressedKeys.includes('o') ? 'active' : ''}`}>o</div>
        <div className={`key ${pressedKeys.includes('p') ? 'active' : ''}`}>p</div>
        <div className={`key ${pressedKeys.includes('[') ? 'active' : ''}`}>[</div>
        <div className={`key ${pressedKeys.includes(']') ? 'active' : ''}`}>]</div>
      </div>

      <div className="row offset-2">
        <div className={`key ${pressedKeys.includes('a') ? 'active' : ''}`}>a</div>
        <div className={`key ${pressedKeys.includes('s') ? 'active' : ''}`}>s</div>
        <div className={`key ${pressedKeys.includes('d') ? 'active' : ''}`}>d</div>
        <div className={`key ${pressedKeys.includes('f') ? 'active' : ''}`}>f</div>
        <div className={`key ${pressedKeys.includes('g') ? 'active' : ''}`}>g</div>
        <div className={`key ${pressedKeys.includes('h') ? 'active' : ''}`}>h</div>
        <div className={`key ${pressedKeys.includes('j') ? 'active' : ''}`}>j</div>
        <div className={`key ${pressedKeys.includes('k') ? 'active' : ''}`}>k</div>
        <div className={`key ${pressedKeys.includes('l') ? 'active' : ''}`}>l</div>
        <div className={`key ${pressedKeys.includes(';') ? 'active' : ''}`}>;</div>
        <div className={`key ${pressedKeys.includes("'") ? 'active' : ''}`}>'</div>
      </div>

      <div className="row offset-3">
        <div className={`key ${pressedKeys.includes('z') ? 'active' : ''}`}>z</div>
        <div className={`key ${pressedKeys.includes('x') ? 'active' : ''}`}>x</div>
        <div className={`key ${pressedKeys.includes('c') ? 'active' : ''}`}>c</div>
        <div className={`key ${pressedKeys.includes('v') ? 'active' : ''}`}>v</div>
        <div className={`key ${pressedKeys.includes('b') ? 'active' : ''}`}>b</div>
        <div className={`key ${pressedKeys.includes('n') ? 'active' : ''}`}>n</div>
        <div className={`key ${pressedKeys.includes('m') ? 'active' : ''}`}>m</div>
        <div className={`key ${pressedKeys.includes(',') ? 'active' : ''}`}>,</div>
        <div className={`key ${pressedKeys.includes('.') ? 'active' : ''}`}>.</div>
        <div className={`key ${pressedKeys.includes('/') ? 'active' : ''}`}>/</div>
      </div>
      <div>
         <div id="space" className={`key ${pressedKeys.includes(' ') ? 'active' :
         ''}`}>Space</div>
      </div>
    </div>
  );
}

export default Key;
