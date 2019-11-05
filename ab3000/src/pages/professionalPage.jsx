import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default class AboutPage extends React.Component {
  render() {
    return (
      <div className='page-container page'>
      <div className='home-page inner-container'>
        <div className='welcome-container'>
          Welcome aboard! Glad to see you here!
            <Link to='/'>
              <button className='btn'>Translate to Next Page</button>
            </Link>
        </div>
      </div>
    </div>
    );
  }
}
