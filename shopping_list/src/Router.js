import React from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';

import ItemCreate from './components/ItemCreate';
import ItemEdit from './components/ItemEdit';
import ItemList from './components/ItemList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 60 }}>
      <Scene key='main'>
        <Scene
          component={ItemList}
          key='itemList'
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
};

export default RouterComponent;
