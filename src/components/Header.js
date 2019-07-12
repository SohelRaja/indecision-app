import React from 'react';

//HEADER COMPONENT child of INDECISIONAPP COMPONENT
function Header(props){
    return(
      <div className="Header">
        <div className="container">
          <div className="col-md-8 col-lg-6 mx-auto">
            <h2 className="Header_title">{props.title}</h2>
            {props.sub_title && <h5 className="Header_subtitle">{props.sub_title}</h5>}
          </div>
        </div>
      </div>
    );
  }
  //Default Props of Header Component
  Header.defaultProps = {
    title: "Indecision-App"
  }

  export default Header;