import React from 'react';
import Polls from './Polls'
import { Container } from 'react-grid-system';
import './css/normalize.css';
import './css/App.css';

class App extends React.Component {
  render() {
    return (
      <Container className="container" fluid md>
        <Polls url={this.props.API_URL}/>
      </Container>
    )
  }
}

App.defaultProps = {
  API_URL: 'http://localhost:8080'
};

export default App;
