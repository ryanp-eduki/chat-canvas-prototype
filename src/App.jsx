import React, { useEffect } from 'react';
import ChatCanvas from './components/ChatCanvas';
import './styles/global.css';

function App() {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 't' || e.key === 'T') {
        // Trigger toggle via custom event
        window.dispatchEvent(new CustomEvent('toggleButtonPosition'));
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, []);

  return (
    <div className="App">
      <ChatCanvas />
    </div>
  );
}

export default App;
