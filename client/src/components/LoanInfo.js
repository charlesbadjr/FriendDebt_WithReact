import React, { Component } from 'react';
import LoanChart from './LoanChart';
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
 componentDidMount(){
  axios.get('api/debts')
 };
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
      
        return (
      <Segment >    
          <h1> Welcome: {this.state.user.user} </h1>
         <div className="debtTable">
           <Header> Your debt of ${this.state.user.debt} to {this.state.user.creditor}  </Header>      
           <Header as="h5" > {this.state.user.description} </Header>
           <Segment>
             <LoanChart 
                
             />
           </Segment>
         </div>
      </Segment>

    );
  }
}


export default LoanInfo;
