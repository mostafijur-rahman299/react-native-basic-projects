import "react-native-gesture-handler";
import * as React from "react";
import { StyleSheet, Text} from "react-native";

import {
  createStackNavigator,
  TransitionSpecs,
  HeaderStyleInterpolators,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


import Ionicons from "react-native-vector-icons/Ionicons";
import WelcomeScreen from './screens/WelcomeScreen';
import TopTabScreen from './screens/TopTabScreen';

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
            translateX: current.progress.interpolate({
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
          outputRange: [0, 0.1],
        }),
      },
    };
  },
};

const MyStack = (props) => (
  <NavigationContainer>
    <Stack.Navigator 
      headerMode="float"
    >
      <Stack.Screen
        name="Home"
        component={WelcomeScreen}
        options={{
          title: "Welcome EveryBody",
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
            fontSize: 26
          }
        }}

      />


      <Stack.Screen
        name="TobTab"
        component={TopTabScreen}
        options={{
          title: "MOUZZEM IS HERE",
          headerTintColor: "tomato",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTitleStyle: {
            letterSpacing: 4,
            lineHeight: 25,
            borderBottomWidth: 2,
            borderColor: "tomato",
          },

          ...MyTransition,
        }}
      />
      
    </Stack.Navigator>
  </NavigationContainer>
);

export default MyStack;
