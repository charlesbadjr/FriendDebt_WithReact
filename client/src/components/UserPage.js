import React, { Component } from 'react';
import {Segment, Button, Form, Header } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Axios from 'axios';


class UserPage extends Component {
  


  render() {
    const { user, dispatch, history } = this.props;
      return (
        <div className="userPage" > 
          <Header as="h1" textAlign="center">
            Good morning: {user.nickname}
          </Header>
          <Segment>
            <p> You're currently indebt to: </p>
            <p> For the amount of: </p>
          </Segment>
          <div className="yourInfo"  >
            <h3> Your Information: </h3>
            <p> Email: {user.email} </p>
            <p> Total Debt: </p>
          </div>
          <div > 
            <Link to="/"> Return Home</Link> 
          </div>
        </div> 
      );
    }
  }

  const mapStateToProps = state => {
    return { user: state.user };
  };
   export default withRouter(connect(mapStateToProps)(UserPage));
  