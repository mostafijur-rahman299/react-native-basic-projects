import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


function GoalItem(props) {
    return (
        <TouchableOpacity onPress={()=> props.onDelete(props.id)}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: "tomato",
        borderWidth: 1,
        borderColor: "dodgerblue",
        marginVertical: 10,
    },
})
/// test test

export default GoalItem;