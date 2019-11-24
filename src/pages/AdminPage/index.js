import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { FirebaseContext } from '../../context/firebase';

import 'bootstrap/dist/css/bootstrap.min.css';

export class AdminPage extends Component {
  static contextType = FirebaseContext;

  constructor(props, context) {
    super(props, context);
    this.state = {
      isSignedIn: this.context.firebase.auth().currentUser,
    }
  }


  render() {
    return (
      <div>
        {!this.state.isSignedIn ? <Redirect to="/signin" /> :
          <div>

          </div>
        }
      </div>
    )
  }
}

