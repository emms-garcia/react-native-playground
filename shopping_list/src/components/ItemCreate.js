import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { clearItemForm, createItem, updateItemForm } from '../actions';
import { Button, Card, CardSection } from './common';
import ItemForm from './ItemForm';

class ItemCreate extends Component {
  static propTypes = {
    clearItemForm: React.PropTypes.func.isRequired,
    createItem: React.PropTypes.func.isRequired,
    ...ItemForm.propTypes,
  };

  componentWillMount() {
    this.props.clearItemForm();
  }

  onCreate() {
    const { name, quantity, price } = this.props;
    if (name) {
      this.props.createItem({ name, quantity, price });
      Actions.itemList({ type: 'reset' });
    }
  }

  render() {
    return (
      <Card>
        <ItemForm autoFocus {...this.props} />

        <CardSection>
          <Button onPress={this.onCreate.bind(this)}>Add</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ itemForm }) => {
  return { ...itemForm };
};

export default connect(mapStateToProps, {
  clearItemForm, createItem, updateItemForm
})(ItemCreate);
