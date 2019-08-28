import React, { Component } from 'react';
import LoanChart from './LoanChart';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handlePayment } from '../reducers/debt';
import {Header, Table, Button, Icon, Segment } from 'semantic-ui-react';
import axios from 'axios';




class LoanInfo extends Component {

  state = { payments:{ paymentAmount:'400', 
            payDate:'tuesday', interest:'45.00', 
            loaded:false }, 

             user:{ user:'Charlie', debt:'3000', creditor:'Abby0204', 
                    description:'I owe mother money', monthlyPayment:'200', 
                    interestRate:'0.04' }, 
                  
                    debt: {}
                };

// calculate amount already paid

// calculate running total

// calculate amount due

// button that pays standard payment
  consoleLOG=()=>{
    const { user, debt, payments } = this.props;
   console.log(debt)
 };

// subtrack payment from debt.
   

// button that pays other amount
    // subtracks other amount from debt
   
  
// recalculate chart with updated payment.



 
    render() {
      const { user} = this.props;
      const { debt } = this.state;
        return (
      <Segment >    
          <h1> Welcome: {user.name} </h1>
         <div className="debtTable">
           <Header> Your debt of ${this.state.payments.description} to {this.state.user.creditor}  </Header>      
           <Header as="h5" > {this.state.payments.description} </Header>
           <Segment>
             <LoanChart 
                description={this.state.payments.description}
                creditor={this.state.user.creditor}
                
             />
             <Button color="blue" onClick={this.consoleLOG}> CHECK </Button>
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

