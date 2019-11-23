import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { FirebaseContext } from '../../context/firebase';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavLink,
} from 'reactstrap';

import Config from '../../config';
import 'bootstrap/dist/css/bootstrap.min.css';

export class AdminPage extends Component {
  static contextType = FirebaseContext;

  constructor(props, context) {
    super(props, context);
    this.state = {
      isSignedIn: this.context.firebase.auth().currentUser,
      isOpen: false,
      setIsOpen: false
    }
  }


  render() {
    return (
      <div>
        {!this.state.isSignedIn ? <Redirect to="/signin" /> :
          <div>
            <Navbar color="dark" dark expand="md">
              <NavbarBrand href="/">{Config.name}</NavbarBrand>
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="mr-auto" navbar>
                    <NavLink>
                      Users
                    </NavLink>
                    <NavLink>
                      Events
                    </NavLink>
                    <NavLink>
                      Sign Out
                    </NavLink>
                  </Nav>
              </Collapse>
            </Navbar>
          </div>
        }
      </div>
    )
  }
}

