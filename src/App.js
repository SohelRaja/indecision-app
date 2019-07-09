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
function IndecisionApp(){
  const title = "Indecision-App";
  const sub_title = "Put your life in the hands of a computer.";
  const options = ['One','Two','Three','Four'];
  return(
    <div>
      <Header title={title} sub_title={sub_title}/>
      <Action />
      <Options options={options}/>
      <AddOption />
    </div>
  );
}
class Header extends React.Component{
  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.sub_title}</h3>
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
function Options(props){
  return(
    <div>
      <button onClick={handleRemoveAll}>Remove All</button>
      {props.options.map((option) => <Option optionText={option}/>)}
    </div>
  );
}
function handleRemoveAll(){
  alert("handle remove all");
}
function Option(props){
  return(
    <div>
      Option: {props.optionText}
    </div>
  );
}
function AddOption(){
  return(
    <div>
      <form onSubmit={handleAddOption}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
}
function handleAddOption(e){
  e.preventDefault();
  const option = e.target.elements.option.value.trim();
  if(option){
    alert(option);
  }
}

export default IndecisionApp;
