import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { Button, Description, Header, Input, PageView } from '../common';

const styles = StyleSheet.create({
    button: { marginTop: 30 },
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 70,
    },
    input: { borderBottomWidth: 1, borderColor: '#000', marginTop: 30 },
});

const DEFAULT_N_PEOPLE = '1';

class NPeopleStep extends React.Component {
    state = { nPeople: DEFAULT_N_PEOPLE };

    render () {
        const isButtonDisabled = (
            !this.state.nPeople ||
            Number.parseInt(this.state.nPeople) === 0
        );
        return (
            <PageView style={styles.container}>
                <Header>How many people will share the bill?</Header>
                <Input
                    keyboardType='numeric'
                    onBlur={this.onKeyboardClosed}
                    onChangeText={this.onNPeopleChanged}
                    placeholder='# People'
                    style={styles.input}
                    value={this.state.nPeople}
                />
                <Description>
                    Real gentlemen share the bill equally!
                </Description>
                <Button
                    disabled={isButtonDisabled}
                    onPress={this.onNextStepPress}
                    style={styles.button}
                >
                    Complete
                </Button>
            </PageView>
        );
    }

    onKeyboardClosed = () => {
        if (!this.state.nPeople) {
            this.setState({ nPeople: DEFAULT_N_PEOPLE });
        }
    }

    onNextStepPress = () => {
        this.props.navigation.navigate('Complete', {
            ...this.props.navigation.state.params,
            nPeople: Number.parseInt(this.state.nPeople),
        });
    }

    onNPeopleChanged = (value) => {
        this.setState({ nPeople: value });
    }
}

NPeopleStep.propTypes = {
    navigation: PropTypes.shape({
        state: PropTypes.shape({
            params: PropTypes.shape({
                billTotal: PropTypes.number.isRequired,
                tipPercentage: PropTypes.number.isRequired,
            }).isRequired,
        }).isRequired,
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

export default NPeopleStep;
