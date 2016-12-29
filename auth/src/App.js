import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';

import { Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import LogoutForm from './components/LogoutForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      /* Set your own firebase config here */
    });

    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ loggedIn: !!user });
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <LogoutForm />;
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.spinnerContainerStyle}>
            <Spinner />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header text='Authentication' />
        { this.renderContent() }
      </View>
    );
  }
}

const styles = {
  spinnerContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 50,
  },
};

export default App;
