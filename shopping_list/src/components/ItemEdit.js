import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { deleteItem, editItem, updateItemForm } from '../actions';
import { Button, Card, CardSection } from './common';
import ItemForm from './ItemForm';
import { itemProp } from '../Utils';

class ItemEdit extends Component {
  static propTypes = {
    deleteItem: React.PropTypes.func.isRequired,
    editItem: React.PropTypes.func.isRequired,
    item: itemProp,
    ...ItemForm.propTypes,
  };

  componentWillMount() {
    Object.keys(this.props.item).forEach((prop) => {
      this.props.updateItemForm(prop, this.props.item[prop]);
    });
  }

  onDelete() {
    this.props.deleteItem(this.props.item.uid);
    Actions.itemList({ type: 'reset' });
  }

  onUpdate() {
    const { name, quantity, price, uid } = this.props;
    this.props.editItem({ name, quantity, price, uid });
    Actions.itemList({ type: 'reset' });
  }

  render() {
    return (
      <Card>
        <ItemForm {...this.props} />
        <CardSection>
          <Button onPress={this.onUpdate.bind(this)}>Save</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onDelete.bind(this)}>Delete</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ itemForm }) => {
  return { ...itemForm };
};

export default connect(mapStateToProps,
  { deleteItem, editItem, updateItemForm }
)(ItemEdit);
