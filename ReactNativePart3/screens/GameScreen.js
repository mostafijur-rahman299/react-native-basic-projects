import React, { useEffect, useRef, useState } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";

import SelectedNumber from "../components/SelectedNumber";

import Card from "../components/Card";

const setGameRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const ranNumber = Math.floor(Math.random() * (max - min) + 1);
  if (ranNumber === exclude) {
    return setGameRandomNumber(min, max, exclude);
  } else {
    return ranNumber;
  }
};

function GameScreen(props) {
  const [currentGuess, setCurrentGuess] = useState(
    setGameRandomNumber(1, 100, props.userChoice)
  );
  const currentLow = useRef(1)
  const currentHigh = useRef(100)
  const [rounds, setRounds] = useState(0);

  useEffect(()=>{
      if(currentGuess === props.userChoice){
          props.onGameOver(rounds);
      }
  }, [props.onGameOver, props.userChoice, currentGuess])

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "upper" && currentGuess > props.userChoice)
    ) {
        Alert.alert("Don't lie", "You know that this is wrong...", [{text: 'Sorry', style: 'cancel'}])
      return;
    }

    if(direction === 'lower'){
        currentHigh.current = currentGuess
    }else{
        currentLow.current = currentGuess
    }

    const nextNumber = setGameRandomNumber(currentLow.current, currentHigh.current, currentGuess)
    setCurrentGuess(nextNumber)
    setRounds(curRounds => curRounds + 1)
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Opponent's Guess</Text>
      <SelectedNumber>{currentGuess}</SelectedNumber>
      <Card style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Lower" onPress={()=> nextGuessHandler('lower')} />
        </View>
        <View style={styles.button}>
          <Button title="Upper" onPress={()=> nextGuessHandler('upper')}/>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    width: 300,
    maxWidth: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    width: "30%",
  },
});

export default GameScreen;
