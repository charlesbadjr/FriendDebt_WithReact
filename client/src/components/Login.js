import React, { Component } from 'react';
import { Header, Segment, Form, Button, Divider, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { handleLogin } from '../reducers/user';

class Login extends Component {
  state = { email: '', password: '' };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { dispatch, history } = this.props;
    dispatch(handleLogin(this.state, history));
  }

  render() {
    const { email, password } = this.state;
    return (
      <Segment placeholder >
        <Grid columns={2} relaxed='very' stackable>
           <Grid.Column>
             <Header as="h1" textAlign="center">Login</Header>
             <Form onSubmit={this.handleSubmit}>
              <Form.Field >
                 <label htmlFor="email">Email</label>
                 <Form.Input
                    required
                    id="email"
                    icon="user"
                    iconPosition="left"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={this.handleChange}
                    />
              </Form.Field>

              <Form.Field>
                 <label htmlFor="password">Password</label>
                 <Form.Input
                    required
                    id="password"
                    icon="lock"
                    iconPosition="left"
                    name="password"
                    value={password}
                    placeholder="Password"
                    type="password"
                    onChange={this.handleChange}
                    />
              </Form.Field>
               <Segment textAlign="center" basic>
                 <Button primary type="submit">Submit</Button>
               </Segment>
            </Form>
         </Grid.Column>
         <Grid.Column verticalAlign='middle' >
           <Link to='/register'>
             <Button content="Sign Up" icon='signup' size='big' />
           </Link>
         </Grid.Column>   
        </Grid>
        <Divider vertical>OR</Divider>
      </Segment>
    );
  }
}

export default connect()(Login);

       