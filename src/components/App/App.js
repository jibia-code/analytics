import React, { Component } from 'react';
import Home from '../home/home';
import User from '../user/user';
import Sales from '../sales/sales';
import Business from '../business/Business.js';
import Marketing from '../marketing/marketing';
import Tech from '../Tech/Tech';
import Finance from '../finance/finance';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/user" component={User} />
        <Route path="/business" component={Business} />
        <Route path="/sales" component={Sales} />
        <Route path="/marketing" component={Marketing} />
        <Route path="/tech" component={Tech} />
        <Route path="/finance" component={Finance} />
      </Router>
    );
  }
}

export default App