import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  Touchable,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
  Alert,
  Dimensions
} from "react-native";

import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  const handlePress = () => console.log("Line Clicked");

  // console.log(Dimensions.get('screen'))

  const {landscape} = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>

      {/* <Text numberOfLines={1} onPress={handlePress}>
        Hello world leorem ipsum is very nice of thse woell Hello world leorem
        ipsum is very nice of thse woellHello world leorem ipsum is very nice of
        thse woell !
      </Text> */}

      {/* <Image
        style={{ width: 200, height: 300, resizeMode: "cover" }}
        source={require("./assets/a.jpg")}
      />

      <TouchableHighlight onPress={() => console.log("Image tapped")}>
        <Image
          blurRadius={2}
          fadeDuration={1000}
          style={{ width: '100%', height: landscape ? "100%" : '50%' }}
          source={{
            uri: "https://picsum.photos/seed/picsum/200/300",
          }}
        />
      </TouchableHighlight> */}

      {/* This not supported on ios  */}
      {/* <TouchableNativeFeedback>
        <View
          style={{
            width: 200,
            height: 80,
            backgroundColor: "red",
            marginTop: 20,
          }}
        ></View>
      </TouchableNativeFeedback> */}

      {/* <Button
        title="Click Me"
        color="orange"
        onPress={
          ()=> Alert.alert("My title", "My message", [
            {text: "Yes", onPress: ()=> console.log('Yes')},
            {text: "No", onPress: ()=> console.log("No")}
          ])
        }
      /> */}

      {/* oriantation  */}

      {/* <View style={{
        width: '100%',
        height: landscape ? '98%' : '20%',
        backgroundColor: 'dodgerblue',
      }}>

      </View> */}


      {/* <View style={{
        backgroundColor: '#fff',
        flex: 1,
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: 'wrap',
        alignContent: 'center'
      }}>

        <View style={{
          backgroundColor: 'dodgerblue',
          width: 100,
          height: 300
        }} />
        <View style={{
          backgroundColor: 'gold',
          width: 100,
          height: 200
        }} />
        <View style={{
          backgroundColor: 'tomato',
          width: 100,
          height: 100,
          // alignSelf: 'flex-start'
        }} />
        <View style={{
          backgroundColor: 'gold',
          width: 100,
          height: 70
        }} />

        <View style={{
          backgroundColor: 'gold',
          width: 100,
          height: 40
        }} />


      </View> */}

      <View style={{
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        <View style={{
          backgroundColor: 'dodgerblue',
          // width: 100,
          // flexBasis: 100,
          // flex: 1,
          width: 400,
          flexShrink: 1,
          height: 100
        }} />

        <View style={{
          backgroundColor: 'gold',
          width: 100,
          height: 100
        }} />

        <View style={{
          backgroundColor: 'tomato',
          width: 100,
          height: 100
        }} />

      </View>
         


    </SafeAreaView>    
  );
}  

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // alignItems: 'center'
  },
});
