import React, { Component } from 'react';
import {Segment, Button, Form, Header } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Axios from 'axios';
//import { debt } from '../reducers/money';




class DebtForm extends Component {
    state = { debt:[], description: '', payOffDate:'', 
              amount: '', payments: '', 
              interestAmount: '' };
  

    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
     const { debt, amount, payments, description, payOffDate, interestAmount } = this.state;
      Axios.post('/api/debts', {amount, payments, description, payOffDate, interestAmount })
     .then( ({ data }) => { this.setState({ debt: [data, ...debt], name:'' })
      })
    };

 // handleStuff = (e) => {
 //   e.preventDefault()
 //   const { dispatch, debt } = this.props
 //   const { Debt } = this.state
 //   const Debt = { description, payOffDate, amount, payments, interestAmount }
 //   dispatch({ type: 'Add_debt', Debt })
 //   dispatch({ type: 'INC_ID' })
 //   this.setState({ name: '' })
 // }


  render() {
      const { amount, payments, description, payOffDate, interestAmount } = this.state;
     
     
    return (
      <div className="debtForm">
        <Segment basic>
          <Header as="h1" textAlign="center" > About the Debt </Header>
          <Form onSubmit={this.handleSubmit} >
            <Form.Field>
               <input
                 autoFocus
                 required
                 id="amount"
                 icon="dollar sign"
                 name="amount"
                 value={amount}
                 placeholder="Total Amount Due"
                 onChange={this.handleChange}
                 />
             </Form.Field>
             <Form.Field>  
              <input
                required
                id="description"
                type="textbox"
                name="description"
                value={description}
                placeholder="Debt Description"
                onChange={this.handleChange}
                />
            </Form.Field>
            <Form.Field> 
              <input
                required
                id="payOffDate"
                name="payOffDate"
                value={payOffDate}
                placeholder="Pay off Date"
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              
              <input
                required
                id="payments"
                name="payments"
                value={payments}
                placeholder="Number of Payments"
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              
              <input
                type="percent"
                id="APR"
                name="interestAmount"
                value={interestAmount}
                placeholder="Apply Intrest?"
                onChange={this.handleChange}
              />
            </Form.Field>
            
            <Segment textAlign="center" basic>
                 <Button color="red" 
                         type="submit"  > Submit </Button>
            </Segment>
          </Form>
              <Header as='h6' >  Photo by Yiqun Tang on Unsplash </Header>
        </Segment>
    </div>  
      );
    }
  }


  export default DebtForm;

//<div class="dropdown">
//  <span>Mouse over me</span>
//  <div class="dropdown-content">
//    <p>Hello World!</p>
//  </div>
//</div> 