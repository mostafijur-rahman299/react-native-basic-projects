import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "../components/Card";

function MaritalStatusScreen(props) {
  return (
    <Card style={styles.container}>
      <Text style={styles.text}>
        Not married now. But I am looking for a suitable girl for marriage. All
        of you pray for me.
      </Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: "tomato",
    borderColor: "white",
    borderWidth: 2,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});

export default MaritalStatusScreen;
