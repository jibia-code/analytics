import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar'
import TableCard from '../TableCard/TableCard'
import PageVisitsGraph from '../GraphCard/PageVisitsGraph'
import CPUUsageGraph from '../GraphCard/CPUUsageGraph'
import MemoryGraph from '../GraphCard/MemoryGraph'
import SearchClicksGraph from '../GraphCard/SearchClicksGraph'
import { Container, Row, Col } from "react-bootstrap"
import './App.css';

const UPDATE_SPEED_IN_SEC = 3;

class App extends Component {
  state = {
    users: 0,
    activeUsers: 0,
    pageVisits: 0,
    searchClicks: 0,
    cpuPercent: 0.0,
    memPercent: 0.0,
    totalSearchClicks: 0,
  }


  endpoints = () => [
    "/get_user_count",
    "/get_active_user_count",
    "/get_last_hour_pages_count",
    "/get_last_hour_searchclick_count",
    "/get_cpu_percent",
    "/get_mem_percent",
    "/get_total_searchclick_count",
  ]

  requestCount(endpoint) {
    return fetch(`https://api.jibia.nl/api${endpoint}`)
      .then(res => res.json())
      .then(json => json.count)
  }

  updateStats = () => {
    Promise.all(this.endpoints().map(this.requestCount))
      .then(results => {
        this.setState({
          users: results[0],
          activeUsers: results[1],
          pageVisits: results[2],
          searchClicks: results[3],
          cpuPercent: results[4],
          memPercent: results[5],
          totalSearchClicks: results[6],
        })
      })
  }

  componentDidMount() {
    setInterval(this.updateStats, UPDATE_SPEED_IN_SEC * 1000)
  }

  getUserTableData() {
    return [
      {
        variable: "User Count",
        count: this.state.users
      },
      {
        variable: "Active User Count",
        count: this.state.activeUsers
      },
      {
        variable: "Page Visits (Last hour)",
        count: this.state.pageVisits
      },
    ]
  }

  getBusinessTableData() {
    return [
      {
        variable: "Search Clicks (Last hour)",
        count: this.state.searchClicks
      }, 
      {
        variable: "Total Search Clicks",
        count: this.state.totalSearchClicks
      }
    ]
  }

  getServerTableData() {
    return [
      {
        variable: "CPU usage (%)",
        count: `${this.state.cpuPercent}%`
      },
      {
        variable: "Memory (%)",
        count: `${this.state.memPercent}%`
      }
    ]
  }

  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <Row>
            <Col xs={4}>
              <TableCard
                title={"Über stats"}
                data={this.getUserTableData()}
              />
            </Col>
            <Col xs={4}>
              <TableCard
                title="Webshoppies"
                data={this.getBusinessTableData()}
              />
            </Col>
            <Col xs={4}>
              <TableCard
                title="Servertjeeee"
                data={this.getServerTableData()}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <PageVisitsGraph
                stat={this.state.pageVisits}
                time={new Date()}
              />
            </Col>
            <Col xs={4}>
              <SearchClicksGraph
                stat={this.state.searchClicks}
                time={new Date()}
              />
            </Col>
            <Col xs={4}>
              <CPUUsageGraph
                stat={this.state.cpuPercent}
                time={new Date()}

              />
            </Col>
          </Row>
          <Row>
            <Col>
            </Col>
            <Col>
            </Col>

            <Col>
              <MemoryGraph
                stat={this.state.memPercent}
                time={new Date()}
              />
            </Col>
          </Row>

        </Container>
      </div>
    );
  }
}

export default App;
