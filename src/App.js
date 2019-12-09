import React from 'react';
// import './App.css';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap'
import PhotoWrapper from './PhotoWrapper';
// const photoGen = require('./_App');

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      album: []
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <div>
          </div>
          <header className="App-header">
            <h1>Simple Photo Album</h1>
            <p>Captured by Authors from around the world </p>
          </header>
          <PhotoWrapper/>
        </div>
        <div className="footer">
          <div className="text">Created by Nik Jefni Ariff</div>
        </div>
      </div>
    )
  }
}

export default App;
