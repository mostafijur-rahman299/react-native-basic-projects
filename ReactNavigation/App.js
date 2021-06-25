import "react-native-gesture-handler";
import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import MyStack from "./screens/DrawerNavigator/StackNavigator";
import AboutScreen3 from "./screens/DrawerNavigator/AboutScreen3";
import ContactScreen3 from "./screens/DrawerNavigator/ContactScree3";



const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg",
          }}
        />
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}


const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 80, 
    height: 50,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'tomato',
    borderRadius: 30
  }
})

const App = () => (
  <NavigationContainer>
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerPosition="left"
      drawerContentOptions={{
        activeTintColor: "white",
        activeBackgroundColor: "tomato",
      }}
      drawerType="front"
      drawerStyle={{
        width: "70%",
      }}

      gestureEnabled = {false}

      hideStatusBar={false}
      statusBarAnimation="slide"
    >
      <Drawer.Screen
        name="Welcome"
        component={MyStack}
        options={{
          headerShown: false,
          drawerIcon: ({ focused, color, size }) => {
            const iconName = focused ? "home-sharp" : "home-outline";
            size = focused ? 33 : 25;
            color = focused ? "white" : "grey";
            return <Ionicons name={iconName} color={color} size={size} />;
          },
        }}
      />

      <Drawer.Screen name="About3" component={AboutScreen3} />

      <Drawer.Screen name="Contact3" component={ContactScreen3} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default App;
