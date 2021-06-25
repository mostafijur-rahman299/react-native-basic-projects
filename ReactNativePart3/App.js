import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGame from './screens/StartGame';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0)

  const restartGame = () => {
    setGuessRounds(0)
    setUserNumber(null)
  }

  const startGameHandler = (userNumber) => {
    setUserNumber(userNumber)
  }

  const gameOverHandler = (numberOfRounds) => {
    setGuessRounds(numberOfRounds)
  }

  let content = <StartGame onStartGame={startGameHandler} />

  if(userNumber && guessRounds <= 0){
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  }else if(guessRounds > 0){
    content = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onRestart={restartGame}/>
  }

  return (
    <View style={styles.screen}>
        <Header title="Guess A Number" />
        {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
