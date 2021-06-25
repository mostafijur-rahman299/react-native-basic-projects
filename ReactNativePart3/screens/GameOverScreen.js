import React from "react";
import { View, Text, StyleSheet, Button} from "react-native";

function GameOverScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>Game is over</Text>
      <Text>Number of rounds: {props.roundsNumber}</Text>
      <Text>User Number: {props.userNumber}</Text>
      <Button title="Start Game" onPress={props.onRestart}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default GameOverScreen;
