import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../reducers/user';
import { debt } from '../reducers/money';
import { connect } from 'react-redux';
import {Header, Table, Icon, Segment } from 'semantic-ui-react';
import axios from 'axios';




class LoanChart extends Component {

  state = { paymentAmount:'', amount:'', payDate:'', description:'', interestAmount:'', loaded: false };
  
// need to import data from database

// set state

// calculate amount already paid

// calculate running total

// calculate amount due

// button that pays standard payment
// subtrack payment from debt.
   regularAmount = () => {
      const { paymentAmount } = this.state;

   };

// button that pays other amount
    // subtracks other amount from debt
   otherAmount = (a) => {

    };   
  
// recalculate chart with updated payment.



 
    render() {
        return (
      <Segment >    
          <h1> Welcome {this.user.firstName} </h1>
         <div>
           <Header> Description   Amount:  Payments Left: </Header>      
           <Segment>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Payment Date</Table.HeaderCell>
                    <Table.HeaderCell> Principle Due </Table.HeaderCell>
                    <Table.HeaderCell> Intrest Due </Table.HeaderCell>
                    <Table.HeaderCell> Payment Amount </Table.HeaderCell>
                    <Table.HeaderCell> Payment Status </Table.HeaderCell>
                    <Table.HeaderCell> Running Total </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row >
                   <Table.Cell> {Date} </Table.Cell>
                   <Table.Cell> {this.state.amount} </Table.Cell>
                   <Table.Cell> Hold </Table.Cell>
                   <Table.Cell> Hold </Table.Cell>
                   <Table.Cell> <Icon name="checkmark" /> approved </Table.Cell>
                   <Table.Cell> Hold </Table.Cell>
                  </Table.Row>  

                  <Table.Row positive>
                   <Table.Cell> {this.state.payDate} </Table.Cell>
                   <Table.Cell> {this.state.amount} </Table.Cell>
                   <Table.Cell> Hold </Table.Cell>
                   <Table.Cell> Hold </Table.Cell>
                   <Table.Cell> <Icon name="checkmark" /> Rejected  </Table.Cell>
                   <Table.Cell> Hold </Table.Cell>
                  </Table.Row> 


                </Table.Body>  
              </Table>    
           </Segment>
         </div>
      </Segment>

    );
  }
}


export default LoanChart;
