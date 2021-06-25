import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Colors from '../constants/colors';


function SelectedNumber(props) {
    return (
        <View style={styles.numberContainer}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    numberContainer: {
        borderColor: Colors.accent,
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        marginBottom: 10
    },
    number: {
        fontSize: 20,
        color: Colors.accent
    }
})

export default SelectedNumber;