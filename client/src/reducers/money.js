
import React from 'react';
import axios from 'axios';
import { setFlash } from './flash';
const debt = 'DEBT';
const LOGOUT = 'LOGOUT';

export const debt = (user) => {
  return { type: debt, user };
}

const logout = () => {
  return { type: LOGOUT };
}



export const setDebtInfo = (debt, history) => {
    return (dispatch) => {
      axios.post('/api/contacts', debt)
      .then( (res) => {
        const { data: { data: debt } } = res;
        dispatch(login(debt));
        history.push('/')
      })
      .catch( res => {
        const messages = 
        res.response.data.errors.full_messages.map(message=>
          <div>{message}</div>);
            dispatch(setFlash(messages, 'red'));
          }) 
        } 
     }

     export default (state = {}, action) => {
        switch (action.type) {
          case LOGIN:
            return action.user;
          case LOGOUT:
            return {};
          default:
            return state;
        }
      };

      