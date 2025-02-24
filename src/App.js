import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <h1>value: {value}</h1>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Increase value
      </button>
      <button
        onClick={() => {
          setValue(0);
        }}
      >
        Reset Value
      </button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
