import React from 'react';
import { StyleSheet, View } from 'react-native';

function Card(props) {
    return (
        <View style={{...styles.cardContainer, ...props.style}}>{props.children}</View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 10,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    }
})

export default Card;