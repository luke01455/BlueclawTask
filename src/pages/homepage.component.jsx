import React, {useState} from 'react';
import './homepage.styles.scss';

import DataDisplay from '../components/data-display/data-display.component'
import DataButton from '../components/data-button/data-button.component'

const HomePage = () => {
    const [currentDisplay, setCurrentDisplay] = useState(0);

    return (
        <div className='homepage-container'>
            <div className='button-container'>
                <h3 className='buttons-title'> SELECT OPTION BELOW TO VIEW: </h3>
                <DataButton active={currentDisplay === 0 ? 'true' : ''} as='button' onClick={() => setCurrentDisplay(0)} > MANUFACTURER </DataButton>
                <DataButton active={currentDisplay === 1 ? 'true' : ''} as='button' onClick={() => setCurrentDisplay(1)} > BODY STYLE </DataButton>
                <DataButton active={currentDisplay === 2 ? 'true' : ''} onClick={() => setCurrentDisplay(2)} > FUEL TYPE </DataButton>
            </div>
            <DataDisplay currentDisplay={currentDisplay}/>
        </div>
         
    )
}

export default HomePage;