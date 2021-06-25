import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

function HomeScreen2(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home 2</Text>
            <View style={styles.button}>
            <Button
            color="orange"
            title="Go Back to home"
            onPress={() => props.navigation.navigate("Home")}
            />
        </View>
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

export default HomeScreen2;