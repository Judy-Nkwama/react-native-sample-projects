import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";


const GoalsInput = props => {

    const [ enteredGoal, setEnteredGoal ] = useState("");

    const handleTextChange = (value) => {
        setEnteredGoal(value);
    };

    const handleAddNewGoal = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal("");
    }

    return(
        <View style={styles.inputZone} >
            <TextInput
                value={enteredGoal}
                style={styles.input}
                placeholder="Enter your goal..."
                onChangeText={handleTextChange}
            />
            <Button title="Add Goal" color={"#54d2d2"} onPress={handleAddNewGoal} />
        </View>
    );
};

const styles = StyleSheet.create({
    input : {
        width : "75%",
        height : 40,
        paddingHorizontal : 10,
        borderWidth : 1,
        borderColor : "#cccccc"
    },
    inputZone : {
        flex : 1,
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        borderBottomWidth : 1,
        borderColor : "#cccccc"
    },
});

export default GoalsInput;