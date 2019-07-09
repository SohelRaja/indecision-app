import React from 'react';
//import logo from './logo.svg';
import './App.css';

/*function App() {
  return (
    <div className="App">
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
}*/
class Header extends React.Component{
  render(){
    return(
      <div>
        <h1>Indecision-App</h1>
        <h3>Put your life in the hands of a computer.</h3>
      </div>
    );
  }
}
function Action(){
  return(
    <div>
      <button>What should I do?</button>
    </div>
  );
}
function Options(){
  return(
    <div>
      Options Components...
    </div>
  );
}
function AddOption(){
  return(
    <div>
      AddOptions Components...
    </div>
  );
}
function App(){
  return(
    <div>
      <Header />
      <Action />
      <Options />
      <AddOption />
    </div>
  );
}
export default App;
