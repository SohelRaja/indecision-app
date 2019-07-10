import React from 'react';

function AddOption(props){
    return(
      <div>
      {props.error && <p>{props.error}</p>}
        <form onSubmit={props.handleAddOption} autoComplete="off">
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }

  export default AddOption;