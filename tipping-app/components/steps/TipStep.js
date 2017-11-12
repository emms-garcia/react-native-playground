import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import { Button, Header, Input, Label, PageView } from '../common';

const styles = StyleSheet.create({
    button: { marginTop: 30 },
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 70,
    },
    input: { borderBottomWidth: 1, borderColor: '#000' },
    inputLabel: { fontSize: 25, marginRight: 10 },
    inputView: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 30,
    },
});

class TipStep extends React.Component {
    state = { tipPercentage: '' };

    render () {
        const isButtonDisabled = (
            !this.state.tipPercentage ||
            Number.parseFloat(this.state.tipPercentage) === 0
        );
        return (
            <PageView style={styles.container}>
                <Header>Tip Percentage</Header>
                <View style={styles.inputView}>
                    <Label style={styles.inputLabel}>%</Label>
                    <Input
                        keyboardType='numeric'
                        onChangeText={this.onTipPercentageChanged}
                        placeholder='00'
                        style={styles.input}
                        value={this.state.tipPercentage}
                    />
                </View>
                <Button
                    disabled={isButtonDisabled}
                    onPress={this.onNextStepPress}
                    style={styles.button}
                >
                    Go to the next step!
                </Button>
            </PageView>
        );
    }

    onTipPercentageChanged = (value) => {
        this.setState({ tipPercentage: value });
    }

    onNextStepPress = () => {
        this.props.navigation.navigate('NPeopleStep', {
            ...this.props.navigation.state.params,
            tipPercentage: Number.parseFloat(this.state.tipPercentage),
        });
    }
}

TipStep.propTypes = {
    navigation: PropTypes.shape({
        state: PropTypes.shape({
            params: PropTypes.shape({
                billTotal: PropTypes.number.isRequired,
            }),
        }),
        navigate: PropTypes.func.isRequired,
    }),
};

export default TipStep;
