import React from 'react';
import Option from './Option.js';

//OPTIONS COMPONENT child of INDECISIONAPP COMPONENT
function Options(props){
    return(
      <div>
        <div className="Options">
          <h4>Your Options</h4>
          <button 
            onClick={props.handleDeleteOptions}
          >
            Remove All
          </button>
        </div>
        {props.options.length === 0 && <p className="option_message">Please add an option to get started!</p>}
        {props.options.map((option,index) => 
          <Option 
            key={option}
            optionText={option}
            count={index + 1}
            handleDeleteOption={props.handleDeleteOption}
          />)
        }
      </div>
    );
  }

  export default Options;