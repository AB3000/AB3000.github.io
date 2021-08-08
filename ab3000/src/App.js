import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import HomePage from './pages/jsx/homePage';
import ProfessionalPage from './pages/jsx/professionalPage';
import HobbiesPage from './pages/jsx/hobbiesPage';
//transition group components for smooth transition to pages
import { TransitionGroup, CSSTransition } from 'react-transition-group';

//smooth transition scss
import './pageTransitions/slideTransition.scss'

class App extends Component {
  constructor(props) {
    super(props);
    //to know the current page
    this.state = {
      //previous page's depth
      prevDepth: this.getPathDepth(this.props.location)
    };
  }

  //registers a new propse for the super function
  componentWillReceiveProps() {
    this.setState({ prevDepth: this.getPathDepth(this.props.location) });
  }

  //function to get path's depth
  getPathDepth(location) {
    // gives path e.g: home is '/', professional is '/professional'
    let pathArr = location.pathname.split('/');
    //returns all elements in path that are not empty strings
    pathArr = pathArr.filter(n => n !== '');
    return pathArr.length;
  }

  render() {
    const { location } = this.props;
    //if key (pathname w/o '/' if something after '/') changes, then animation reapplied
    const currentKey = location.pathname.split('/')[1] || '/';
    //time it takes for mounting the components and applying the animation (ms)
    const timeout = { enter: 800, exit: 20};

    return (
      <TransitionGroup component='div' className='App'>
        {/* for smooth animation */}
        <CSSTransition
          key={currentKey}
          timeout={timeout}
          classNames='pageSlider'
          mountOnEnter={false}
          unmountOnExit={true}
        >
          <div
            className={
              this.getPathDepth(location) - this.state.prevDepth >= 0
                ? 'left'
                : 'right'
            }
          >
            <Switch location={location}>
              <Route path='/' exact component={HomePage} /> {/* depth 0*/}
              <Route path='/professional' exact component={ProfessionalPage} />
              <Route path='/hobbies' exact component={HobbiesPage} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default withRouter(App);
