import React from 'react';
import './homepage.styles.scss';
import { Table } from 'semantic-ui-react'
import { data } from '../data/car-info'

const HomePage = () => {
    console.log(data)
    return (
        <div className='homepage-container'>
            <Table celled className="ui inverted table">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Rank</Table.HeaderCell>
                        <Table.HeaderCell>Manufacturer</Table.HeaderCell>
                        <Table.HeaderCell> Avg Emissions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row >
                    <Table.Cell ></Table.Cell>
                    <Table.Cell >2</Table.Cell>
                    <Table.Cell>3</Table.Cell>
                  </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}

export default HomePage;