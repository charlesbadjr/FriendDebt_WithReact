import React, { Component } from 'react';
import {Segment, Button, Form, Header } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Axios from 'axios';
import { newDebt } from '../reducers/debt';




class DebtForm extends Component {
    state = { debt:[], description: '', payOffDate:'', 
              amount: '', payments: '', 
              interestAmount: '' };
  

    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    }


  handleStuff = (e) => {
    e.preventDefault()
  const { dispatch } = this.props;
  const { debt, description, payOffDate, amount, payments, interestAmount } = this.state;
   this.setState({ [debt]: description, payOffDate, amount, payments, interestAmount })
    dispatch(newDebt(this.state.debt, debt));
 };


  render() {
      const { amount, payments, description, payOffDate, interestAmount } = this.state;
     
     
    return (
      <div className="debtForm">
        <Segment basic>
          <Header as="h1" textAlign="center" > About the Debt </Header>
          <Form onSubmit={this.handleStuff} >
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


  export default connect()(DebtForm);

//<div class="dropdown">
//  <span>Mouse over me</span>
//  <div class="dropdown-content">
//    <p>Hello World!</p>
//  </div>
//</div> 