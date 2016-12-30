import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import { emailChanged, loginUser, passwordChanged } from '../actions';
import { Button, Card, CardSection, Input, Spinner } from './common';

const styles = {
  errorTextStyle: {
    color: 'red',
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
  },
};

class LoginForm extends Component {
  static propTypes = {
    email: React.PropTypes.string.isRequired,
    error: React.PropTypes.string,
    loading: React.PropTypes.bool,
    password: React.PropTypes.string.isRequired,
    emailChanged: React.PropTypes.func.isRequired,
    loginUser: React.PropTypes.func.isRequired,
    passwordChanged: React.PropTypes.func.isRequired,
  };

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onLoginPressed() {
    this.props.loginUser(this.props.email, this.props.password);
  }

  renderError() {
    if (this.props.error) {
      return (
        <CardSection>
          <Text style={styles.errorTextStyle}>
            { this.props.error }
          </Text>
        </CardSection>
      );
    }
  }

  renderButton() {
    return (
      <CardSection>
        { this.props.loading ? <Spinner size='small' /> :
          <Button onPress={this.onLoginPressed.bind(this)}>
            Log In
          </Button>
        }
      </CardSection>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='demo@email.com'
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            label='Password'
            placeholder='password'
            onChangeText={this.onPasswordChange.bind(this)}
            secureTextEntry
            value={this.props.password}
          />
        </CardSection>

        { this.renderError() }
        { this.renderButton() }
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    error: state.auth.error,
    loading: state.auth.loading,
    password: state.auth.password,
  };
};

export default connect(mapStateToProps, {
  emailChanged, loginUser, passwordChanged
})(LoginForm);
