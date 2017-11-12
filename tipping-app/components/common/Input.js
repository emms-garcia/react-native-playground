import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    input: { color: '#000', fontSize: 30, textAlign: 'center' },
});

const Input = (props) => {
    return (
        <TextInput
            {...props}
            autoCorrect={false}
            style={[styles.input, props.style]}
        />
    );
};

Input.propTypes = {
    ...TextInput.propTypes,
};

export { Input };
