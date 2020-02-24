import React, {useState} from 'react';
import './homepage.styles.scss';
import { Table } from 'semantic-ui-react'
import { data } from '../data/car-info'

const HomePage = () => {
    const [currentDisplay, setCurrentDisplay] = useState([0])
    console.log(data)
    return (
        <div className='homepage-container'>
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

export default HomePage;