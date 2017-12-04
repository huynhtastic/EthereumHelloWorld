import { Layout, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Web3 from 'web3';

import * as network from 'services/truffle.js';
import VotingTable from 'components/votingtable/VotingTable.js';
import * as VotingContract from 'contracts/Voting.json';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    const devNet = network.networks.development;
    const devUrl = `http://${devNet.host}:${devNet.port}`;
    var web3 = new Web3(devUrl);
    var accounts;

    web3.eth.getAccounts().then((accs) => {
      accounts = accs;
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
