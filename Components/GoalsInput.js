import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Image } from "react-native";


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
            <Image resizeMode="contain" style={styles.icon} source={require("../assets/targeImage.png")} />
            <TextInput
                value={enteredGoal}
                style={styles.input}
                placeholder="Enter your goal..."
                onChangeText={handleTextChange}
            />
            <View style={styles.buttonBlock}>
                <View style={styles.button} >
                    <Button title="Cancel" color="#e81356" onPress={props.toggleModal} />
                </View>
                <View style={styles.button} >
                    <Button title="Add Goal" color="#EBE645" onPress={handleAddNewGoal} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    input : {
        width : "100%",
        height : 45,
        marginVertical : 16,
        backgroundColor : "#577BC1",
        borderRadius : 5,
        paddingHorizontal : 16
    },
    inputZone : {
        flex : 1,
        justifyContent : "space-between",
        alignItems : "center",
        justifyContent : "center"
    },
    buttonBlock : {
        flexDirection : "row",
        width : "100%",
        justifyContent : "center"
    },
    button :{
        width : 100,
        marginLeft : 10
    },
    icon :{
        width : 100,
        height : 100,
    }
});

export default GoalsInput;