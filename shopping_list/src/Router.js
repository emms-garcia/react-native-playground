import React, { Component } from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';

import ItemCreate from './components/ItemCreate';
import ItemEdit from './components/ItemEdit';
import ItemList from './components/ItemList';

class RouterComponent extends Component {
  render() {
    return (
      <Router sceneStyle={{ paddingTop: 60 }}>
        <Scene key='main'>
          <Scene
            component={ItemList}
            key='itemList'
            leftTitle='Edit'
            onLeft={(params) => {
              if (params.leftTitle === 'Edit') {
                Actions.refresh({
                  editMode: true,
                  leftTitle: 'Cancel',
                  rightTitle: '',
                });
              } else {
                Actions.refresh({
                  editMode: false,
                  leftTitle: 'Edit',
                  rightTitle: 'Add',
                });
              }
            }}
            onRight={() => Actions.itemCreate()}
            rightTitle='Add'
            title='Shopping List'
          />
          <Scene
            component={ItemCreate}
            key='itemCreate'
            title='New Item'
          />
          <Scene
            component={ItemEdit}
            key='itemEdit'
            title='Item Edit'
          />
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
