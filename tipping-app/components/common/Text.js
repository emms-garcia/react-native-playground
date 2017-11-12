import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: { fontSize: 40, textAlign: 'center' },
    content: { color: 'black', fontSize: 20 },
    description: {
        color: '#c0c0c0',
        fontSize: 20,
        marginTop: 10,
        textAlign: 'center',
    },
});

export const Description = ({children, style}) => (
    <Text style={[styles.description, style]}>{ children }</Text>
);

Description.propTypes = { ...Text.propTypes };

export const Header = ({children, style}) => (
    <Text style={[styles.header, style]}>{ children }</Text>
);

Header.propTypes = { ...Text.propTypes };

export const Label = ({ children, style }) => (
    <Text style={[styles.content, style]}>{ children }</Text>
);

Label.propTypes = { ...Text.propTypes };
