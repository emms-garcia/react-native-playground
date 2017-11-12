import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';

import BillStep from './components/steps/BillStep';
import Complete from './components/steps/Complete';
import NPeopleStep from './components/steps/NPeopleStep';
import TipStep from './components/steps/TipStep';

const AppNavigator = StackNavigator(
    {
        BillStep: { screen: BillStep },
        TipStep: { screen: TipStep },
        NPeopleStep: { screen: NPeopleStep },
        Complete: { screen: Complete },
    },
    {
        initialRouteName: 'BillStep',
        headerMode: 'none',
        /*
         * Use modal on iOS because the card mode comes from the right,
         * which conflicts with the drawer example gesture
         */
        mode: Platform.OS === 'ios' ? 'modal' : 'card',
    }
);

export default () => <AppNavigator />;
