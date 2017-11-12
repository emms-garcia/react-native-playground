import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import numeral from 'numeral';

import { Button, Header, PageView } from '../common';

const styles = StyleSheet.create({
    button: { marginTop: 30 },
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 70,
    },
    header: { marginTop: 30 },
    total: { marginTop: 30 },
});

const Complete = ({ navigation }) => {
    const { billTotal, nPeople, tipPercentage } = navigation.state.params;
    const totalWithTip = billTotal * ((tipPercentage / 100.0) + 1);
    return (
        <PageView style={styles.container}>
            <Header style={styles.header}>
                Each person should pay:
            </Header>
            <Header style={styles.total}>
                { numeral(totalWithTip / nPeople).format('$0,0.00') }
            </Header>
            <Button
                onPress={() => navigation.navigate('BillStep')}
                style={styles.button}
            >
                Start again
            </Button>
        </PageView>
    );
};

Complete.propTypes = {
    navigation: PropTypes.shape({
        state: PropTypes.shape({
            params: PropTypes.shape({
                billTotal: PropTypes.number.isRequired,
                nPeople: PropTypes.number.isRequired,
                tipPercentage: PropTypes.number.isRequired,
            }).isRequired,
        }).isRequired,
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

export default Complete;
