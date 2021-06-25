import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  FlatList,
  SafeAreaView,
  Platform,
  StatusBar
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [onAddMode, setOnAddMode] = useState(false);
  

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);

    setOnAddMode(false)
  };


  const deleteGoalItem = (itemId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== itemId)
    })
  }

  const openModal = () => {
    setOnAddMode(true)
  }

  const closeModal = () => {
    setOnAddMode(false)
  }

  return (
    <SafeAreaView style={styles.screen}>
      
      <Button title="Add New Goal" onPress={openModal} />

      <GoalInput visible={onAddMode} hideModal={closeModal} onAddGoal={addGoalHandler} />

      {/* <ScrollView>
        {courseGoals.map(goal => <View key={goal} style={styles.listItem}><Text>{goal}</Text></View>)}
      </ScrollView> */}

      {/* for better performance scrolling  */}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} onDelete={deleteGoalItem} id={itemData.item.id} />}
      />
      
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 20,
    marginTop: 15
  },    
  
});
