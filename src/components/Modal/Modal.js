import React from 'react';
import './Modal.css'

function Modal(props) {
    if (!props.show) {
        return null
    }

    return (
        <div className='modal' onClick={props.close}>
            <div className='modal-container' onClick={e=> e.stopPropagation()}>
                <div className='modal-body'>
                    <img src={props.img} className='modal-icon' alt='modal icon'/>
                    <p className='modal-text'>{props.msg}</p>
                </div>
            </div>
        </div>
    )
}

export default Modal;