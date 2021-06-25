import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import SelectedNumber from "../components/SelectedNumber";

import Colors from "../constants/colors";

function StartGame(props) {
  const [enteredNumber, setEnteredText] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const inputTextHandler = (inputText) => {
    setEnteredText(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredText("");
    setConfirmed(false);
  };

  const confirmedHandler = () => {
    const choosenNumber = parseInt(enteredNumber);

    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    setSelectedNumber(choosenNumber);
    setEnteredText("");
    setConfirmed(true);
    Keyboard.dismiss();
  };

  let confirmOutput;
  if (confirmed) {
    confirmOutput = (
      <Card style={styles.slectedNumberCard}>
        <Text style={styles.numberTitle}>You Selected</Text>
        <SelectedNumber>{selectedNumber}</SelectedNumber>
        <Button title="start game" onPress={()=>props.onStartGame(selectedNumber)} />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game</Text>
        <Card style={styles.inputContainer}>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={inputTextHandler}
            value={enteredNumber}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmedHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmOutput}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 20,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-around",
  },
  button: {
    width: "40%",
  },
  input: {
    width: 60,
    textAlign: "center",
  },
  slectedNumberCard: {
    marginTop: 20,
    alignItems: "center",
  },
  numberTitle: {
    marginBottom: 10,
    fontSize: 18,
  },

});

export default StartGame;
