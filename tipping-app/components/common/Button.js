import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    button: {
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
    },
    buttonDisabled: { backgroundColor: '#c0c0c0', borderColor: '#c0c0c0' },
    text: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 20,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
    textDisabled: { color: 'white' },
});

export const Button = ({ children, disabled, onPress, style }) => {
    const onPressWrapper = (value) => {
        if (disabled) return;
        onPress(value);
    };

    const buttonStyle = (
        disabled ?
            StyleSheet.flatten([styles.button, styles.buttonDisabled]) :
            styles.button
    );

    const textStyle = (
        disabled ?
            StyleSheet.flatten([styles.text, styles.textDisabled]) :
            styles.text
    );

    return (
        <TouchableOpacity onPress={onPressWrapper} style={[buttonStyle, style]}>
            <Text style={textStyle}>
                { children }
            </Text>
        </TouchableOpacity>
    );
};

Button.propTypes = {
    ...TouchableOpacity.propTypes,
};
