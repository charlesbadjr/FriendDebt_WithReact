import React, { Component } from 'react';
import { Header, Segment, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Home extends Component {

  render() {
    return (
    <div className="home" >  
      <div className="appIntro" >
        <Header as="h1" > Friend Loan Tracker </Header>
        <Header as="h4" > Handy little app that keeps track of repayments your friends are expecting. Also clarify's payments for any misunderstandings. </Header>
      </div>
        <Segment className="homeButtons" >
           <Link to="/Login"> 
              <Button color="green" > New User </Button>
           </Link>
           <Link to="/Create-A-Debt"> 
              <Button color="blue"> Start Tracking </Button>
           </Link>
        </Segment>
       <Header as="h6" className="photoCred" > Photo by Alice Pasqual on Unsplash </Header>
    </div>
    );
  }
}

export default Home;

