import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen3 from '../DrawerNavigator/HomeScreen3';


const Drawer = createDrawerNavigator();


function DrawerNavogatorScreen(props) {
    return (
        <Drawer.Navigator>
          <Drawer.Screen
            name="Home3"
            component={HomeScreen3}
          />
        </Drawer.Navigator>
    );
}

export default DrawerNavogatorScreen;