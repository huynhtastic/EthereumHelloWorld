import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';
import VotingTable from './components/votingtable/VotingTable.js';

class App extends Component {
  render() {
    return (
      <Row>
        <Col span={12}>
          <h1>A Simple Hello World Application</h1>
          <VotingTable />
        </Col>
      </Row>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
