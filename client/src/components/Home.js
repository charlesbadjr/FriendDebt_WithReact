import React, { Component } from 'react';
import { Header, Segment, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Home extends Component {

  render() {
    return (
    <div>  
      <Header as="h1" textAlign="center"> Friend Loan Tracker </Header>
      <div className="appIntro" >
        <Header as="h4" textAlign="center"> Handy little app that keeps track of repayments your friends are expecting. Also clarify's payments for any misunderstandings. </Header>
      </div>
      <div>
        <Segment textAlign="center" >
           <Link to="/Login"> 
              <Button color="green"> New User </Button>
           </Link>
           <Link to="/Create-A-Debt"> 
              <Button color="blue"> Start Tracking </Button>
           </Link>
        </Segment>
      </div>

    </div>
    );
  }
}

export default Home;

