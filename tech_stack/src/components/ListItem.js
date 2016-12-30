import React, { Component } from 'react';
import {
  LayoutAnimation,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';
import { CardSection } from './common';

class ListItem extends Component {
  propTypes: {
    library: React.PropTypes.object.isRequired,
    selected: React.PropTypes.bool.isRequired,
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, selected } = this.props;
    if (selected) {
      return (
        <CardSection>
          <Text style={styles.descriptionStyle}>{ library.description }</Text>
        </CardSection>
      );
    }
  }

  render() {
    const { id, title } = this.props.library;
    const { titleStyle } = styles;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{ title }</Text>
          </CardSection>
          { this.renderDescription() }
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  descriptionStyle: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

const mapStateToProps = (state, ownProps) => ({
  selected: ownProps.library.id === state.selectedLibraryID,
});

export default connect(mapStateToProps, actions)(ListItem);
