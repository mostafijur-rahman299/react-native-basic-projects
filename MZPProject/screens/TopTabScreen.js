import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import AboutScreen from './AboutScreen';
import GalleryScreen from './GalleryScreen';
import MaritalStatusScreen from './MaritalStatusScreen';

const Tab = createMaterialTopTabNavigator();


function TopTabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="about me" component={AboutScreen} />
      <Tab.Screen name="gallery" component={GalleryScreen} />
      <Tab.Screen name="marital status" component={MaritalStatusScreen} />
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

export default TopTabScreen;