import * as network from '../../services/truffle.js';
import Web3 from 'web3';
import React, { Component } from 'react';
import { Table } from 'antd';

class VotingTable extends Component {
  render() {
    const devNet = network.networks.development;
    const devUrl = `http://${devNet.host}:${devNet.port}`;
    var web3 = new Web3(devUrl);
    //    var VotingContract = new web3.eth.Contract(votingContractCode.abi);


    return (
      <h1>Placeholder</h1>
    )
  }
}

export default VotingTable;
