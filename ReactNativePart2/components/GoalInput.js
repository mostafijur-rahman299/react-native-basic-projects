import React, { Fragment, useState} from 'react';
import {TextInput, StyleSheet, Button, View, TouchableOpacity, Modal, KeyboardAvoidingViewComponent} from 'react-native';


function GoalInput(props) {

    const [enteredGoal, setEnteredGoal] = useState("");

    const enteredGoalHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal)

        setEnteredGoal('')
    }
    
    return (
        <Modal visible={props.visible} animationType="fade">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={enteredGoalHandler}
                    value={enteredGoal}
                />
                
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.hideModal} />
                    </View>

                    <View style={styles.button}>
                        <Button title="Add" color="tomato" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    input: {
        width: '80%',
        borderColor: "tomato",
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    buttonContainer: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    button: {
        width: '40%'
    }
})

export default GoalInput;




// import React from "react";
// import { Text, View, StyleSheet, Button, Dimensions } from "react-native";

// import Modal from "react-native-modal";

// function TestimonialAddModal(props) {
//   return (
//     <Modal
//       animationIn={"slideInUp"}
//       animationOut={"slideOutDown"}
//       isVisible={props.visible}
//       animationInTiming={500}
//       animationOutTiming={500}
//       backdropTransitionInTiming={500}
//       backdropTransitionOutTiming={500}
//       avoidKeyboard={false}
//       coverScreen={false}
//       hasBackdrop={false}
//       backdropColor={"red"}
//       backdropOpacity={0.8}
//       swipeThreshold={100}
//       swipeDirection={'down'} 
//       style={{ justifyContent: 'flex-end'}}

//     >
//       <View style={{ backgroundColor: '#fff', height: Dimensions.get('screen').height / 2.5 }}>
//         <Text>I am the modal content!</Text>
//         <Button title="close" onPress={props.hideModal} />
//       </View>
//     </Modal>
//   );
// }

// const styles = StyleSheet.create({});

// export default TestimonialAddModal;
