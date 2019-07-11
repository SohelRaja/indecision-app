import React from 'react';
import AddOption from './components/AddOption.js';
import Options from './components/Options.js';
import Action from './components/Action.js';
import Header from './components/Header.js';
import OptionModal from './components/OptionModal.js';
import './App.css';

//PARENT COMPONENT
class IndecisionApp extends React.Component{
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleClearSelectOption = this.handleClearSelectOption.bind(this);
    this.state = {
      options: props.options,//['One','Two','Three','Four']
      error: undefined,
      selectedOption: undefined
    };
  }
  //React Component LifeCycle
  componentDidMount(){
    try{
      const json = localStorage.getItem('options');
      const options = JSON.parse(json); //To Convert STRING to OBJECT
      if(options){
        this.setState(()=>{
          return {
            options: options
          };
        });
      }
    }catch(e){
      //Do nothing at all
    }
  }/*
  componentDidUpdate(prevProps,prevState){
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options); //To Convert OBJECT to STRING
      localStorage.setItem('options',json);
    }
  }*/
  //Clear Modal 
  handleClearSelectOption(){
    this.setState(()=>{
      return{
        selectedOption: undefined
      };
    });
  }
  //Delete All Options
  handleDeleteOptions(){
    this.setState(()=>{
      return {
        options: []
      };
    });
  }
  //Delete One Option
  handleDeleteOption(optionToRemove){
    this.setState((prevState)=>{
      return{
        options: prevState.options.filter((option)=>{
          return optionToRemove !== option;
        })
      };
    });
  }
  //Handle Pick
  handlePick(){
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(()=>{
      return{
        selectedOption: option
      };
    });
  }
  //Handle Add Option
  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    e.target.elements.option.value = '';
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
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
          error={this.state.error}
          handleAddOption={this.handleAddOption}
        />
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleClearSelectOption={this.handleClearSelectOption}
        />
      </div>
    );
  }
}
//Default Props of Indecision-App
IndecisionApp.defaultProps = {
  options: []
}

export default IndecisionApp;
