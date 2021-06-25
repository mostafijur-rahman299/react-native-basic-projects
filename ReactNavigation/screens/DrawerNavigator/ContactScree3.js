import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

function ContactScreen3(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contact 3</Text>
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

export default ContactScreen3;