import React from 'react';
import Modal from 'react-modal';

function OptionModal(props){
    return(
        <Modal
        isOpen={!!props.selectedOption}//!!undefined->false, !!"some string"->true
        onRequestClose={props.handleClearSelectOption}//It will call when we will click to background or 'ESC' key
        contentLabel={'Selected Option'}
        className='Modal'
        >
        <h3 className='Modal_title'>Selected Option</h3>
        {props.selectedOption && <p className='Modal_subtitle'>{props.selectedOption}</p>}
        <button className='Modal_button' onClick={props.handleClearSelectOption}>Okey</button>
        </Modal>
    );
}

export default OptionModal;