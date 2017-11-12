import React from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

const styles = StyleSheet.create({
    page: {
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 70,
    },
});

export const PageView = (props) => (
    <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        {...props}
    >
        {/* TouchableWithoutFeedback must have a single child */}
        <View
            {...props}
            style={[styles.page, props.style]}
        >
            { props.children }
        </View>
    </TouchableWithoutFeedback>
);

PageView.propTypes = {
    ...View.propTypes,
};
