import { useEffect, useState, useRef } from 'react';
import Key from './Key';
import './Key.css';

function App() {
  const [pressedKeys, setPressedKeys] = useState([]);
  const [typedText, setTypedText] = useState('');
  const timers = useRef(new Map());
  const textareaRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;

      if (event.repeat) return;

      setPressedKeys((prev) => {
        if (!prev.includes(key)) return [...prev, key];
        return prev;
      });

      if (
        key.length === 1 ||
        key === ' ' ||
        key === 'Enter' ||
        key === 'Backspace'
      ) {
        setTypedText((prev) => {
          if (key === 'Backspace') {
            return prev.slice(0, -1);
          } else if (key === 'Enter') {
            return prev + '\n';
          } else {
            return prev + key;
          }
        });
      }
    };

    const handleKeyUp = (event) => {
      const key = event.key;

      if (timers.current.has(key)) {
        clearTimeout(timers.current.get(key));
      }

      const timer = setTimeout(() => {
        setPressedKeys((prev) => prev.filter((k) => k !== key));
        timers.current.delete(key);
      }, 100);

      timers.current.set(key, timer);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      timers.current.forEach((timer) => clearTimeout(timer));
      timers.current.clear();
    };
  }, []);

  // Auto-resize textarea height based on content
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto'; // Reset height
      textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`; // Cap at 200px
    }
  }, [typedText]);

  return (
    <div
      className="body"
      style={{
        minHeight: '100vh', // Ensure body takes full viewport height
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          width: '100%',
          margin: '0 auto',
          padding: '20px',
          boxSizing: 'border-box',
          flexGrow: 1, // Allow container to grow with content
        }}
      >
        <Key pressedKeys={pressedKeys} />
        <div
          style={{
            marginTop: '20px',
            width: '100%',
            maxWidth: '90%',
            margin: '32px auto',
          }}
        >
          <textarea
            ref={textareaRef}
            value={typedText}
            onChange={(e) => setTypedText(e.target.value)}
            placeholder="Start typing..."
            style={{
              width: '100%',
              minHeight: '50px',
              maxHeight: '200px', // Limit max height
              padding: '10px',
              fontSize: '18px',
              border: '1px solid #ccc',
              borderRadius: '15px',
              backgroundColor: '#2f2f2f',
              color: 'white',
              resize: 'none',
              overflowY: 'auto', // Scroll within textarea
              boxSizing: 'border-box',
              fontFamily: 'inherit',
              lineHeight: '1.5',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;