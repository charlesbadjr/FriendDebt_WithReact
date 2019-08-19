import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';


// add drop down side bar when hover orver Home Gives account/User Details

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;
    console.log(user)
    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
          <Link to="/UserPage">
             <Menu.Item
                name='Profile'
               />
          </Link>
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu  position="right">
        <Link to="/login">
          <Menu.Item name="Sign Up" />
        </Link>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div >
        <Menu pointing secondary>
          <Link to="/">
            <Menu.Item name="Home" />
          </Link>
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));

