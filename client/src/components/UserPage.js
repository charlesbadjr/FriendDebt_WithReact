import React, { Component } from 'react';
import {Segment, Button, Form, Header, Icon  } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';



class UserPage extends Component {
  state = { debts:[], searchName:'' };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value});
  };



  render() {
    const { user  } = this.props;
    const {searchName } = this.state;
      return (
        <div className="userPage" > 
         <Form className="memberSearch">
          <Form.Field >
             <input    
                placeholder="SearchUser"
                Icon="Search"
                value={searchName}
                required
                name='searchName'
                handleChange={this.onChange}
              />
           </Form.Field>
           <Button color="blue"> Search </Button>
         </Form>
          <Header as="h1" textAlign="center">
            Good morning: {user.nickname}
          </Header>
          <Segment>
            <p> You're currently indebt to: </p>
            <p> For the amount of: </p>
          </Segment>
          <div className="yourInfo"  >
            <h3> Your Information: </h3>
            <p> UserName: {user.nickname} </p>
            <p> Email: {user.email} </p>
            <p> Total Debt: </p>
          </div>
          <div > 
            <Link to="/"> Return Home</Link> 
            <Link to="RepaymentHistory"> See Repayment Plan</Link>

          </div>
        </div> 
      );
    }
  }

  const mapStateToProps = state => {
    return { user: state.user };
  };
   export default withRouter(connect(mapStateToProps)(UserPage));
  