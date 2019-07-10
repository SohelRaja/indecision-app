import React from 'react';

//ACTION COMPONENT child of INDECISIONAPP COMPONENT
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

  export default Action;