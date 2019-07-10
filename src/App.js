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
class IndecisionApp extends React.Component{
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: [],//['One','Two','Three','Four']
      error: undefined
    };
  }
  //Delete All Options
  handleDeleteOptions(){
    this.setState(()=>{
      return {
        options: []
      };
    });
  }
  //Handle Pick
  handlePick(){
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  //Handle Add Option
  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if(!option){
      this.setState(()=>{
        return {
          error: "Enter a valid input."
        };
      });
    }else if(this.state.options.indexOf(option) > -1){
      this.setState(()=>{
        return {
          error: "Input Already Exists."
        };
      });
    }else{
      this.setState((prevState)=>{
        return{
          options: prevState.options.concat([option]),
          error: undefined
        };
      });
    }
  }
  render(){
    const title = "Indecision-App";
    const sub_title = "Put your life in the hands of a computer.";
    return(
      <div>
        <Header 
          title={title} 
          sub_title={sub_title}
        />
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption 
          error={this.state.error}
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}
function Header(props){
  return(
    <div>
      <h1>{props.title}</h1>
      <h3>{props.sub_title}</h3>
    </div>
  );
}
function Action(props){
  return(
    <div>
      <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  );
}
function Options(props){
  return(
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.map((option) => <Option optionText={option}/>)}
    </div>
  );
}
function Option(props){
  return(
    <div>
      Option: {props.optionText}
    </div>
  );
}
function AddOption(props){
  return(
    <div>
    {props.error && <p>{props.error}</p>}
      <form onSubmit={props.handleAddOption} autocomplete="off">
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
}

export default IndecisionApp;
