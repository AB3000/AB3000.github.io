import React from 'react';
import './homeStyle.scss';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default class HobbiesPage extends React.Component {
  render() {
    return (
      <div className='page-container page'>
        <div className='home-page inner-container'>
          <div className='welcome-container'>
            HOBBIES
              <Link to='/'>
                <Button>Home</Button>
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
