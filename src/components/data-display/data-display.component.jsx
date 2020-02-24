import React, { useEffect, useState } from 'react';
import './data-display.styles.scss';
import { Table } from 'semantic-ui-react'
import { data } from '../../data/car-info'

const DataDisplay = ({currentDisplay}) => {
    let [largestAndSmallest, setLargestAndSmallest] = useState([])
    //let largestAndSmallest = [];

    const findLargestAndSmallest = (data) => {
        let currentLargest = 0
        let largestCar
        let currentSmallest = 2000
        let smallestCar

        for(let i = 0; i <= data[currentDisplay].rankings.length -1; i++) {
            if(data[currentDisplay].rankings[i].avgEmissions >= currentLargest) {
                currentLargest = data[currentDisplay].rankings[i].avgEmissions
                largestCar = data[currentDisplay].rankings[i]
            }
        }
        for(let i = 0; i <= data[currentDisplay].rankings.length -1; i++) {
            if(data[currentDisplay].rankings[i].avgEmissions <= currentSmallest) {
                currentSmallest = data[currentDisplay].rankings[i].avgEmissions
                smallestCar = data[currentDisplay].rankings[i]
            }
        }
        setLargestAndSmallest([largestCar, smallestCar])
    }

    useEffect(() => {
        findLargestAndSmallest(data)
    }, [currentDisplay]);

    console.log(data)
    return (
        <div className='data-display-container'>
            <div className='high-low-container'>
                <div className='high-container'>
                    <h3> Highest CO2 Emissions: </h3>
                    {
                        largestAndSmallest[0] ?
                        <h1>{largestAndSmallest[0].name} {largestAndSmallest[0].avgEmissions} </h1> :
                        <h1> loading... </h1>
                    }
                    
                </div>
                <div className='low-container'>
                    <h3> Lowest CO2 Emissions: </h3>
                    {
                        largestAndSmallest[1] ?
                        <h1> {largestAndSmallest[1].name} {largestAndSmallest[1].avgEmissions} </h1> :
                        <h1> loading... </h1>
                    }
                </div>
                
            </div>
            <Table celled className="ui table">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Rank</Table.HeaderCell>
                        <Table.HeaderCell>{data[currentDisplay].option}</Table.HeaderCell>
                        <Table.HeaderCell> Avg Emissions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    { data && 
                    data[currentDisplay].rankings.map(carInfo => (
                    <Table.Row key={carInfo.avgEmissions}>
                        <Table.Cell className='selectable'> {carInfo.ranking}</Table.Cell>
                        <Table.Cell >{carInfo.name}</Table.Cell>
                        <Table.Cell>{carInfo.avgEmissions}</Table.Cell>
                    </Table.Row>
                    ))}
                  <Table.Row >
                  </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}

export default DataDisplay;