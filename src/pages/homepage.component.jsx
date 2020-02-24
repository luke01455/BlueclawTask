import React, {useState} from 'react';
import './homepage.styles.scss';

import DataDisplay from '../components/data-display/data-display.component'
import DataButton from '../components/data-button/data-button.component'

const HomePage = () => {
    const [currentDisplay, setCurrentDisplay] = useState(0);

    return (
        <div className='homepage-container'>
            <div className='button-container'>
                <button onClick={() => setCurrentDisplay(0)} > Manufacturer </button>
                <button onClick={() => setCurrentDisplay(1)} > Body Style </button>
                <button onClick={() => setCurrentDisplay(2)} > Fuel Type </button>
            </div>
            <DataDisplay currentDisplay={currentDisplay}/>
        </div>
         
    )
}

export default HomePage;