import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { VotingTable } from './components/votingtable/VotingTable.js';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={8}>
            <h1>A Simple Hello World Application</h1>
          </Col>
        </Row>
      </Grid>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
