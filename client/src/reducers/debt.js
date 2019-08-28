import React from 'react';
import axios from 'axios';
import { setFlash } from './flash';
const ADD_CREDITOR = 'ADD_CREDITOR';
const ADD_PAYMENT = 'ADD_PAYMENT';
const ADD_DEBT = 'ADD_DEBT';


export const add_creditor = (creditor) => {
  return { type: ADD_CREDITOR, creditor};
}

export const add_payment = (debt) => {
  return { type: ADD_PAYMENT, debt };
}

export const add_debt = (debt) => {
  return { type: ADD_DEBT, debt };
}

export const handlePayment = (payment) => {
  return (dispatch) => {
    axios.post('/api/debts', payment)
      .then(res => {
        const { data: { data: payment } } = res;
        dispatch(add_payment(payment));
      })
      .catch( res => {
        let errors = res.response.data.errors ? res.response.data.errors : ['Something went wrong']
        if (!Array.isArray(errors))
          errors = [errors]
        const messages =
          errors.map( (message, i) =>
            <div key={i}>{message}</div>);
        dispatch(setFlash(messages, 'red'));
      });
  };
};

export const newDebt = (debt) => {
  return (dispatch) => {
    console.log(debt)
    axios.post('/api/debts', debt)
      .then(res => {
        const { data: { data: debt } } = res;
        dispatch(add_debt(debt));
      });
    };
  };


const debt = ( state = [], action ) => {
  switch(action.type) {
    case 'ADD_CREDITOR':
      return action.debt
    case 'ADD_PAYMENT':
      return [action.debt, ...state];
    case 'ADD_DEBT':
      return [action.debt, ...state];
    default:
      return state
  }
}

export default debt;