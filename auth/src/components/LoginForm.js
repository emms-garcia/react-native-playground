import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: null, loading: false };

  onButonPress() {
    const { email, password } = this.state;
    this.setState({ error: null, loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFailed.bind(this));
      });
  }

  onLoginFailed() {
    this.setState({
      error: 'Authentication Failed.',
      loading: false,
    });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: null,
      loading: false,
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }
    return (
      <Button onPress={this.onButonPress.bind(this)}>
        Log In
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            onChangeText={email => this.setState({ email })}
            placeholder='demo@email.com'
            value={this.state.email}
          />
        </CardSection>

        <CardSection>
          <Input
            label='Password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholder='password'
            secureTextEntry
          />
        </CardSection>

        {
          this.state.error &&
          <CardSection>
            <Text style={styles.errorTextStyle}>{ this.state.error }</Text>
          </CardSection>
        }

        <CardSection>
          { this.renderButton() }
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    color: 'red',
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
  },
};

export default LoginForm;
