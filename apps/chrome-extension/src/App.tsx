import logo from './logo.svg';
import './App.css';
import init, { InitOutput } from 'difftastic';
import { useEffect, useState } from 'react';

function DifftasticAlert() {
  const [difftastic, setDifftastic] = useState<InitOutput>();

  useEffect(() => {
    init().then((exports) => {
      setDifftastic(exports);
    });
  }, []);

  if (!difftastic) {
    return null;
  }

  const { greet } = difftastic;
  return (
    <button type="button" onClick={greet}>
      hello
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <DifftasticAlert />
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
