import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import { Button, Header, Input, Label, PageView, Toggle } from '../common';

const styles = StyleSheet.create({
    button: { marginTop: 30 },
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 70,
    },
    input: { borderBottomWidth: 1, borderColor: 'black' },
    inputLabel: { fontSize: 25, marginRight: 10 },
    inputView: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 30,
    },
    toggle: { marginTop: 30 },
});

class BillStep extends React.Component {
    state = { billTotal: '', includesTip: false };

    render () {
        const isButtonDisabled = (
            !this.state.billTotal ||
            Number.parseFloat(this.state.billTotal) === 0
        );
        return (
            <PageView style={styles.container}>
                <Header>Bill Total</Header>
                <View style={styles.inputView}>
                    <Label style={styles.inputLabel}>$</Label>
                    <Input
                        keyboardType='numeric'
                        onChangeText={this.onBillChanged}
                        placeholder='100.99'
                        style={styles.input}
                        value={this.state.billTotal}
                    />
                </View>
                <Toggle
                    onValueChange={this.onIncludesTipChanged}
                    style={styles.toggle}
                    value={this.state.includesTip}
                >
                    Includes Tip?
                </Toggle>
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

    onBillChanged = (value) => {
        this.setState({ billTotal: value });
    }

    onIncludesTipChanged = (value) => {
        this.setState({ includesTip: value });
    }

    onNextStepPress = () => {
        const billTotal = Number.parseFloat(this.state.billTotal);
        if (this.state.includesTip) {
            this.props.navigation.navigate(
                'NPeopleStep', { billTotal, tipPercentage: 0 }
            );
        } else {
            this.props.navigation.navigate('TipStep', { billTotal });
        }
    }
}

BillStep.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

export default BillStep;
