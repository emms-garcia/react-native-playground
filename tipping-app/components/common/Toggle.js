import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Switch, View } from 'react-native';

import { Label } from './Text';

const styles = StyleSheet.create({
    container: { backgroundColor: 'transparent', flexDirection: 'row' },
    text: { marginRight: 10 },
});

export const Toggle = ({ children, style, ...props }) => {
    return (
        <View style={[styles.container, style]}>
            <Label style={styles.text}>{ children }</Label>
            <Switch {...props} />
        </View>
    );
};

Toggle.propTypes = {
    ...Switch.propTypes,
    children: PropTypes.node,
};
