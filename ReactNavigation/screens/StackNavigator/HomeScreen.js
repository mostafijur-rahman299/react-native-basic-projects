import React from "react";
import { View, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to About for more stack navigator"
        onPress={() => navigation.navigate("About", { name: "Jane" })}
      />

      <View style={styles.button}>
        <Button
          color="tomato"
          title="Go to Tab Navigator"
          onPress={() => navigation.navigate("TabNavigator", { screen: "new" })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: 10,
    backgroundColor: "tomato",
  },
});

export default HomeScreen;
