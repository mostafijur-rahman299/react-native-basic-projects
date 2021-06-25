import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

function AboutScreen3(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About 3</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        color: 'tomato'
    }
})

export default AboutScreen3;