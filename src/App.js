//Main component of the app
//Display the child component
import React from 'react';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import PhotoWrapper from './PhotoWrapper';

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
