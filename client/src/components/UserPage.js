import React, { Component } from 'react';
import {Segment, Button, Form, Header } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';


class Userpage extends Component {
  state = { userName:'charlie', inDebt:true, creditor:'person1' }
    
  render() {
      return (
        <div className="userPage" > 
          <Header as="h1" textAlign="center">
            Good morning: 
          </Header>
          <div > 
            <Link to="/"> Return Home</Link> 
          </div>
        </div> 
      );
    }
  }
  
    export default UserPage;
  