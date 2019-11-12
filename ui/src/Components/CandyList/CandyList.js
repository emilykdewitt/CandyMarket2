import React from 'react';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import getAllCandies from '../../Requests/candyRequests';

class CandyList extends React.Component {

    state = {
        candies: []
    };

    componentDidMount() {
        getAllCandies()
        .then(data => {
            this.setState({candies: data});
        })
        .catch(err => {
            console.log('error here', err)});
    }

    buildCandies = () => this.state.candies.map(c => (
        <tr key={c.candyId}>
            <td>{c.name}</td>
            <td>{c.category}</td>
            <td>{c.yearsSinceCreation}</td>
            <td><Button color="info">Add Candy</Button>
            </td>
        </tr>
    ));

    render() {
        return (
            <React.Fragment>
                <Table>
                    <thead>
                        <tr>
                            <th>Candy Name</th>
                            <th>Category</th>
                            <th>Years Since Creation</th>
                            <th>Add to Candy Collection?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.buildCandies()}
                    </tbody>
                </Table>
            </React.Fragment>
        )
    }
}

export default CandyList;