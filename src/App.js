import Alphabets from "./Alphabets";
import Button from "./Button";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <Button>
          <h1>Titre de ma page</h1>
          <h2>Test</h2>
        </Button>
        <Alphabets onlyVowels={false} />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
