import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homePage';
import ProfessionalPage from './pages/professionalPage'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { location } = this.props;
    return (
      <div className='App'>
        <Switch location={location}>
          <Route path = '/' exact component={HomePage} />
          <Route path = '/professional' exact component={ProfessionalPage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
