import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';
import ListItem from './ListItem';

class LibraryList extends Component {
  propTypes: {
    libraryList: React.PropTypes.array.isRequired,
    selectedLibraryID: React.PropTypes.number.isRequired,
  }

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.dataSource = ds.cloneWithRows(this.props.libraryList);
  }

  renderRow(library) {
    return (
      <ListItem
        library={library}
        onPress={() => this.props.selectLibrary(library.id)}
      />
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  libraryList: state.libraryList,
  selectedLibraryID: state.selectedLibraryID,
});

export default connect(mapStateToProps, actions)(LibraryList);
