import { Layout, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Web3 from 'web3';

import * as network from 'services/truffle.js';
import VotingTable from 'components/votingtable/VotingTable.js';
import * as VotingContDef from 'contracts/Voting.json';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    var accounts;
    var deployedContract;
    var candidates = ['Richard', 'Ronly', 'Mary'];

    const devNet = network.networks.development;
    const devUrl = `http://${devNet.host}:${devNet.port}`;
    var web3 = new Web3(devUrl);
    var votingContract = new web3.eth.Contract(VotingContDef.abi);

    web3.eth.getAccounts().then((accs) => {
      accounts = accs;
      votingContract.deploy({
        data: VotingContDef.abi,
        arguments: [candidates.map(name => web3.utils.asciiToHex(name))],
      })
      .send({
        from: accounts[0],
        gas: 4500000,
        gasLimit: '30000000000000',
      })
      .then((contract) => { deployedContract = contract; });
    });

    return (
      <Layout className='layout'>
        <Content style={{ padding: '0 50px', textAlign: 'center' }}>
          <Row type='flex' justify='center'>
            <Col span={12}>
              <h1>A Simple Hello World Application</h1>
              <VotingTable />
            </Col>
          </Row>
        </Content>
      </Layout>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
