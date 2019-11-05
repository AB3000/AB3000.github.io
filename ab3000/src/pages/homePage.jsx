import React from 'react';
import './homeStyle.scss';
import { Link } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import Button from '@material-ui/core/Button';

export default class HomePage extends React.Component {
  render() {
    return (
      <div className='page-container page'>
        <div className='home-page inner-container'>
          <div className='welcome-container'>
            Welcome aboard! Glad to see you here!
              <Link to='/professional'>
                <Button>Hobbies</Button>
              </Link>
              <Link to='/professional'>
                <Button>Professional</Button>
              </Link>
          </div>
        </div>
      </div>
    );
  }
}
