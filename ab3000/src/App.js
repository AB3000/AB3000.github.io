import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homePage';
import ProfessionalPage from './pages/professionalPage'

//transition group components for smooth transition to pages
import { TransitionGroup, CSSTransition } from 'react-transition-group'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  //gets path's depth
  getPathDepth(location){
    // gives path e.g: home is '/', professional is '/professional'
    let pathArr = location.pathname.split('/');
    //returns all elements in path that are not empty strings
    pathArr = pathArr.filter(n => n !== '');
    return pathArr.length; 
  }

  render() {
    const { location } = this.props;

    //time it takes for mounting the components and applying the animation (ms)
    const { timeout } = { enter: 800, exit: 400 };
    return (
      <TransitionGroup component='div' className='App'>
        {/* for smooth animation */}
        <CSSTransition timeout={timeout} className='pageSlider' mountOnEnter={false} mountOnExit={true} >
          <Switch location={location} >
            <Route path='/' exact component={HomePage} />   {/* depth 0*/}
            <Route path='/professional' exact component={ProfessionalPage} />  {/* depth 1*/}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default withRouter(App);
