DROP DATABASE IF EXISTS project_3_local;

CREATE DATABASE project_3_local;

// Credit card display if needed to install 'npm install --save react-credit-cards', just not sure where we would want this to end up

import React from 'react';
import Cards from 'react-credit-cards';

export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form>
        	<input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          ...
        </form>
      </div>
    );
  }
}

// Dont forget to import the react-credit-cards/lib/styles.scss if you are using SASS in your project.
// Or you can import the CSS:
// import 'react-credit-cards/es/styles-compiled.css';

// https://www.npmjs.com/package/react-credit-cards if you need more information such as props and sizing/font options

// Raffle npm pulls winners and can have multiple winners if the raffle is for multiple items
// https://www.npmjs.com/package/pick-random
// Usage
const pickRandom = require('pick-random');

pickRandom(['Sindre', 'Stephen', 'Unicorn', 'Pascal', 'Addy', 'Pony'], {count: 2});
//=> ['Unicorn', 'Pony']
pickRandom(input, [options])
// Returns an Array.

// input
// Type: Array

// List to pick from.

// options
// Type: Object

// count
// Type: number
// Default: 1

// Number of picks.

// Must be smaller or the same length as input.

// Related
// pick-random-cli - CLI for this module


// Dropdown for login from mainpage navbar
npm install react-bootstrap-dropdown-menu --save
// Include bootstrap in your project(if not already included)

<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"

// This is the setup on npm page
// https://www.npmjs.com/package/react-bootstrap-dropdown-menu

import React from 'react';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';

class SettingsMenu extends React.Component {
  constructor() {
    super();
    this.deleteAccount = this.deleteAccount.bind(this);
    this.logout = this.logout.bind(this);
  }

  deleteAccount(e) {
    console.log("Deleting Account")
  }

  logout(e) {
    console.log("Logging out")
  }

  render() {
    return (
      <DropdownMenu userName="Chris Smith">
        <MenuItem text="Home" location="/home" />
        <MenuItem text="Edit Profile" location="/profile" />
        <MenuItem text="Change Password" location="/change-password" />
        <MenuItem text="Privacy Settings" location="/privacy-settings" />
        <MenuItem text="Delete Account" onClick={this.deleteAccount} />
        <MenuItem text="Logout" onClick={this.logout} />
      </DropdownMenu>
    );
  }
}
