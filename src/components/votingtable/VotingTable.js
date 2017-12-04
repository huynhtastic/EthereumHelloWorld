import React, { Component } from 'react';
import { Table } from 'antd';

class VotingTable extends Component {
  render() {
    const columns = [{
      title: 'Candidate',
      dataIndex: 'candidate',
      key: 'candidate',
    }, {
      title: 'Votes',
      dataIndex: 'votes',
      key: 'votes',
    }];
    const dataSource = [{
      key: '1',
      candidate: 'Richard',
      votes: 0
    }, {
      key: '2',
      candidate: 'Ronly',
      votes: 0
    }, {
      key: '3',
      candidate: 'Mary',
      votes: 0
    }];


    return (
      <Table columns={columns} dataSource={dataSource} />
    )
  }
}

export default VotingTable;
