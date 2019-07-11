import React from 'react';

//OPTION COMPONENT child of OPTIONS COMPONENT
function Option(props){
    return(
      <div className="Option">
        <p>{props.count}. {props.optionText}</p>
        <button 
          onClick={(e)=>{
            props.handleDeleteOption(props.optionText)
          }}
        >
           Remove
        </button>
      </div>
    );
  }

  export default Option;