import React, { Component } from 'react';
import { Header, Form, Button, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { registerUser } from '../reducers/user';
import { setFlash } from '../reducers/flash';

class Register extends Component {
  state = { email: '', password: '', passwordConfirmation: '', name: '', nickname: '' };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, history } = this.props;
    const { password, passwordConfirmation, name, nickname } = this.state
    if (password === passwordConfirmation) {
      dispatch(registerUser(this.state, history));
    } else dispatch(setFlash('Passwords dont match!, please try again', 'red'));
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password, passwordConfirmation, name, nickname } = this.state;

    return (
      <Segment basic>
        <Header as="h1" textAlign="center">A little About You:</Header>
        <Form onSubmit={this.handleSubmit}>
        <Form.Field>
            <label htmlFor="Name"> Your Name </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Smith"
              value={name}
              onChange={this.handleChange}
            />
        </Form.Field>
        <Form.Field>
            <label htmlFor="text"> UserName </label>
            <input
              id="nickname"
              name="nickname"
              type="text"
              placeholder="OwesMyM0M395"
              required
              value={nickname}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              required
              value={password}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="passwordConfirmation">Password Confirmation</label>
            <input
              id="passwordConfirmation"
              placeholder="Password Confirmation"
              name="passwordConfirmation"
              type="password"
              required
              value={passwordConfirmation}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Segment basic textAlign="center">
             <Button type="submit" color="green" >Submit</Button> 
          </Segment>
        </Form>
      </Segment>
    );
  }
}

export default connect()(Register);

