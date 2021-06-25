import React from 'react';
import { View, Text} from 'react-native';

function ContactScreen(props) {
    return (
        <View>
            <Text>Contact Number: {props.route.params.email}</Text>
        </View>
    );
}

export default ContactScreen;