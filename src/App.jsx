import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmitClick = () => {
    setMessage(inputValue);
  };

  const handleDeleteClick = () => {
    setInputValue('');
    setMessage('')
  };

  return (
    <div className="App">
      <h1>Simple Buttons with Input</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter data..."
      />
      <button onClick={handleSubmitClick}>Submit</button>
      <button onClick={handleDeleteClick}>Delete</button>
      <div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default App;