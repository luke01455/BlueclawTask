import React from 'react';
import './data-button.styles.scss';

const DataButton = ({children, active, ...props}) => (
        <button className={`data-button-container ${active}`} {...props}>
                    {children}
        </button>
    )


export default DataButton;