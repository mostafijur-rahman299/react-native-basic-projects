import "react-native-gesture-handler";
import * as React from "react";
import { StyleSheet, Text, Touchable, TouchableHighlight, TouchableOpacity } from "react-native";

import {
  createStackNavigator,
  TransitionSpecs,
  HeaderStyleInterpolators,
} from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../StackNavigator/HomeScreen";
import AboutScreen from "../StackNavigator/AboutScreen";
import ContactScreen from "../StackNavigator/ContactScreen";
import TabNavigatorScreen from "../StackNavigator/TabNavigatorScreen";

const Stack = createStackNavigator();

const MyTransition = {
  gestureDirection: "horizontal",
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateY: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          {
            rotate: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          },
          {
            scale: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.9],
                })
              : 1,
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
};

const MyStack = (props) => (
  <Stack.Navigator 
    headerMode="float"
  >
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Welcome Page",
        headerTintColor: "tomato",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTitleStyle: {
          letterSpacing: 5,
          lineHeight: 25,
          borderBottomWidth: 2,
          borderColor: "tomato",
        },

        headerLeft: () => {
          
          return (
            <TouchableOpacity onPress={props.navigation.openDrawer}>
              <Ionicons
                style={{ marginLeft: 10 }}
                name="list-circle-outline"
                color="tomato"
                size={35}
              />
            </TouchableOpacity>
          );
        },
      }}

    />
    <Stack.Screen
      name="About"
      component={AboutScreen}
      options={{
        title: "About",

        headerTintColor: "tomato",
        headerTitleAlign: "center",

        headerTitleStyle: {
          color: "black",
          letterSpacing: 5,
          lineHeight: 25,
          borderBottomWidth: 1,
          borderColor: "tomato",
          justifyContent: "center",
        },

        headerStyle: {
          backgroundColor: "white",
        },

        gestureEnabled: true,
        gestureDirection: "vertical",

        headerBackTitleVisible: false,
        headerBackTitle: "Back",

        ...MyTransition,
      }}
    />

    <Stack.Screen
      name="Contact"
      component={ContactScreen}
      options={{
        title: "Contact Page",
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          };
        },
      }}
    />

    <Stack.Screen
      name="TabNavigator"
      component={TabNavigatorScreen}
      options={{
        title: "Tab Navigator",
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          };
        },
        headerLeft: false,
        headerTintColor: "tomato",
        headerTitleAlign: "center",
        headerShown: true
      }}
      
    />
  </Stack.Navigator>
);

export default MyStack;
