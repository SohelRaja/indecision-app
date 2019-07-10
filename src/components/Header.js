import React from 'react';

//HEADER COMPONENT child of INDECISIONAPP COMPONENT
function Header(props){
    return(
      <div>
        <h1>{props.title}</h1>
        {props.sub_title && <h3>{props.sub_title}</h3>}
      </div>
    );
  }
  //Default Props of Header Component
  Header.defaultProps = {
    title: "Indecision-App"
  }

  export default Header;