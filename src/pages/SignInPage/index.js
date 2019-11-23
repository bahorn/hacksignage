import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { FirebaseContext } from '../../context/firebase';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';

export class SignInPage extends Component {
  static contextType = FirebaseContext;

  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    credentialHelper: 'none',
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      isSignedIn: this.context.firebase.auth().currentUser,
    }
  }

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = this.context.firebase.auth().onAuthStateChanged(
      (user) => this.setState({isSignedIn: !!user})
    );
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    return (
      <div>
        {this.state.isSignedIn ? <Redirect to="/admin" /> :
            <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={this.context.firebase.auth()}/>
        }
      </div>
    )
  }
}
