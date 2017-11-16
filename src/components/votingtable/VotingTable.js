import Web3 from 'web3';
import { React, Component } from 'react';
import { Table } from 'react-bootstrap';

class VotingTable extends Component {
  render() {
    var solc = require('solc');

    return (
      <Table bordered>
        <thead>
          <tr>
            <th>Candidate</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </Table>
    )
  }
}
