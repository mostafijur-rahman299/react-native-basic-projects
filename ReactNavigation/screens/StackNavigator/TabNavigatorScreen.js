import React from 'react';
import {StyleSheet} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import HomeScreen2 from "../TabNavigator/HomeScreen2";
import ContactScreen2 from "../TabNavigator/ContactScreen2";
import AboutScreen2 from "../TabNavigator/AboutScreen2";
import { HeaderTitle } from '@react-navigation/stack';


const RootTab = createBottomTabNavigator();


function TabNavigatorScreen(props) {
    return(

        <RootTab.Navigator
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'green',
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    backgroundColor: '#ffffff',
                    borderRadius: 10,
                    height: 60,
                    ...styles.shadow
                },
                
            }}

            
            
            >



            <RootTab.Screen
                name="Home2"
                component={HomeScreen2}
                options={{ 
                    title: "Home",
                    tabBarLabel: 'HomePage',
                    tabBarIcon: ({focused, color, size }) => {
                        const iconName = focused ? 'home-sharp' : 'home-outline';
                        size = focused ? 33 : 25
                        color = focused ? 'tomato' : 'grey'
                        return <Ionicons name={iconName} color={color} size={size} />
                    },
                    HeaderTitle: 'hello'
                }}
            />

            <RootTab.Screen
                name="Contact2"
                component={ContactScreen2}
                options={{ 
                title: "Contact",
                tabBarLabel: 'Contact',
                tabBarIcon: ({focused, color, size }) => {
                    const iconName = focused ? 'person-circle-sharp' : 'person-circle-outline';
                    size = focused ? 33 : 25
                    color = focused ? 'tomato' : 'grey'
                    return <Ionicons name={iconName} color={color} size={size} />
                }
                }}
            />

            <RootTab.Screen
                name="About2"
                component={AboutScreen2}
                options={{ 
                title: "About" ,
                tabBarLabel: 'HomePage',
                tabBarIcon: ({focused, color, size }) => {
                    const iconName = focused ? 'md-information-circle-sharp' : 'md-information-circle-outline';
                    size = focused ? 33 : 25
                    color = focused ? 'tomato' : 'grey'
                    return <Ionicons name={iconName} color={color} size={size} />
                }
                }}
            />
            </RootTab.Navigator>
    )
}


const styles = StyleSheet.create({
    shadow: {
      shadowColor: '#7F5DF0',
      shadowOffset: {width: 0, height: 10},
      shadowOpacity: 0.25,
      shadowRadius: 2.5, 
      elevation: 5
    }
  })

export default TabNavigatorScreen;