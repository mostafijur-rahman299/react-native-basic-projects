import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  Button,
  StyleSheet,
} from "react-native";

function WelcomeScreen(props) {
  return (
    <View>
      <View>
        <ImageBackground
          source={require("../assets/4.jpg")}
          style={styles.imageBackground}
        >
          <View style={styles.buttonContainer}>
            <Button
            color="orange"
            title="Let's Introduce"
            onPress={() => props.navigation.navigate("TobTab")}
            />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: 'center'
  },
  buttonContainer: {
    width: '50%',
    flex: 1,
    justifyContent: 'center',
  },
});

export default WelcomeScreen;
