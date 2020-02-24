import React from 'react';
import './data-button.styles.scss';

const DataButton = ({children}) => {
    return (
        <div className='data-button-container'>
                <button > 
                    {children}
                </button>
        </div>
    )
}

export default DataButton;