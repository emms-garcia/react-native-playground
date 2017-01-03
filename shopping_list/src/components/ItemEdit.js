import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteItem, editItem, updateItemForm } from '../actions';
import { Button, Card, CardSection } from './common';
import ItemForm from './ItemForm';
import { itemProp } from '../utils';

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
  }

  onUpdate() {
    const { name, quantity, price, uid } = this.props;
    this.props.editItem({ name, quantity, price, uid });
  }

  render() {
    return (
      <Card>
        <ItemForm {...this.props}>
          <CardSection>
            <Button onPress={this.onUpdate.bind(this)}>Save</Button>
          </CardSection>
          <CardSection>
            <Button onPress={this.onDelete.bind(this)}>Delete</Button>
          </CardSection>
        </ItemForm>
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
