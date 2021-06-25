import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AboutScreen3 from '../DrawerNavigator/AboutScreen3'


const Tab = createMaterialTopTabNavigator();

function AboutScreen2() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="News" component={AboutScreen3} />
      <Tab.Screen name="Post" component={AboutScreen3} />
      <Tab.Screen name="Chat" component={AboutScreen3} />
    </Tab.Navigator>
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

export default AboutScreen2;