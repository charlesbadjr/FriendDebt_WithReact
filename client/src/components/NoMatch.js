import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NoMatch extends Component {
  render() {
    return (
      <div> 
        <Header as="h1" textAlign="center">
          You've gone too far!
        </Header>
        <div> 
          <Link to="/"> Return Home</Link> 
        </div>
      </div> 
    );
  }
}

  export default NoMatch;


