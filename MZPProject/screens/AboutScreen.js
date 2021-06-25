import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Card from '../components/Card';


function AboutScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/5.jpg')}/>
            </View>

            <Card style={styles.cardContainer}>
                <Text style={styles.text}>Md.Mouazzem Hossain</Text>
            </Card>
            <Card style={styles.cardContainer}>
                <Text style={styles.text}>
                    I am a student of Gaibandha Government College. Now I am studying Honours 3rd years.
                </Text>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        justifyContent: 'center', 
        marginTop: 20,
        shadowColor: "black",
        shadowOffset: { height: 2},
        shadowOpacity: 0.3,
        elevation: 100
    },
    image: {
        width: 100,
        height: 100,
        borderColor: 'tomato',
        borderWidth: 2,
        borderRadius: 50,
    },
    cardContainer: {
        marginHorizontal: 20,
        marginTop: 20,
        backgroundColor: "tomato",
        borderColor: "white",
        borderWidth: 2,
    },
    text: {
        color: "white",
        fontSize: 20,
    }
})

export default AboutScreen;