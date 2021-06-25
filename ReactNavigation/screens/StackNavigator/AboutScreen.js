import React from "react";
import { View, Text, Button} from "react-native";

const AboutScreen = ({ navigation, route }) => {
  return (
    <View>
      <Text>This is {route.params.name}'s profile</Text>
      <Button
        title="Go to Contact section"
        onPress={() =>
          navigation.navigate("Contact", { email: "hello@gmail.com" })
        }
      />
    </View>
  );
};

export default AboutScreen;
