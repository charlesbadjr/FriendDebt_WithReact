import React, { Component } from 'react';
import {Segment, Button, Form, Header } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
//import { debt } from '../reducers/money';




class DebtForm extends Component {
    state = { description: '', payOffDate:'', 
              amount: '', amountleft:'', payments: '', 
              interestAmount: '' };
  

    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    }
  
    handleSubmit = (event) => {
      event.preventDefault();

    };



    render() {
      const { amount, payments, amountleft, description, payOffDate, interestAmount } = this.state;
     
     
      return (
        <Segment basic>
          <Header as="h1" textAlign="center"> About the Debt </Header>
          <Form >
            <Form.Field>
               <input
                 autoFocus
                 required
                 id="amount"
                 icon="cash"
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
                name="intrestAmount"
                value={interestAmount}
                placeholder="Apply Intrest?"
                onChange={this.handleChange}
              />
            </Form.Field>
            
            <Segment textAlign="center" basic>
              <Link to="./RepaymentHistory">
                 <Button color="red" 
                         type="submit" > Submit </Button>
              </Link> 
            </Segment>
          </Form>
        </Segment>
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