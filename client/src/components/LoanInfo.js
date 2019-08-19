import React, { Component } from 'react';
import LoanChart from './LoanChart';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handlePayment } from '../reducers/debt';
import {Header, Table, Icon, Segment } from 'semantic-ui-react';
import axios from 'axios';




class LoanInfo extends Component {

  state = { payments:{ paymentAmount:'400', 
            payDate:'tuesday', interest:'45.00', 
            loaded:false }, 

             user:{ user:'Charlie', debt:'3000', creditor:'Abby0204', 
                    description:'I owe mother money', monthlyPayment:'200', 
                    interestRate:'0.04' } };
  
// need to import data from database

// set state

// calculate amount already paid

// calculate running total

// calculate amount due

// button that pays standard payment
  payStandard(){
  
 }

// subtrack payment from debt.
   

// button that pays other amount
    // subtracks other amount from debt
   
  
// recalculate chart with updated payment.



 
    render() {
      const { user, debt } = this.props;
        return (
      <Segment >    
          <h1> Welcome: {user.email} </h1>
         <div className="debtTable">
           <Header> Your debt of ${this.state.payments.description} to {this.state.user.creditor}  </Header>      
           <Header as="h5" > {this.state.payments.description} </Header>
           <Segment>
             <LoanChart 
                
             />
           </Segment>
         </div>
      </Segment>

    );
  }
}

const mapStateToProps = state => {
  return { user: state.user, debt: state.debt };
};
 export default withRouter(connect(mapStateToProps)(LoanInfo));

