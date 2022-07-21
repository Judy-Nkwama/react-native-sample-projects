import { useState } from "react";
import { 
    View, Text, Button, TextInput, StyleSheet,
    FlatList
} from "react-native";


const App = () => {

    const [ enteredGoal, setEnteredGoal ] = useState(""); 
    const [ goals, setGoals ] = useState([]);

    const handleTextChange = (value) => {
        setEnteredGoal(value);
    };

    const handleAddNewGoal = () => {
        if( enteredGoal.length > 1 ) {
            setGoals( previousGoals => [...previousGoals, enteredGoal ])
            handleTextChange("");
        }
    };

    return(
        <View style={styles.app}>
            <View style={styles.inputZone}>
                <TextInput 
                    value={enteredGoal} 
                    style={styles.input} 
                    placeholder="Enter your goal..."
                    onChangeText={handleTextChange}
                />
                <Button title="Add Goal" color={"#54d2d2"}  onPress={handleAddNewGoal} />
            </View>
            <View style={styles.goalsListZone}>
                <FlatList 
                    data={goals}
                    renderItem={ goal => {
                        return(
                            <View style={styles.goalItem}>
                                <Text style={styles.goalItemText}>{goal.item}</Text>
                            </View>
                        )}}
                    keyExtractor={ (goal, index) => index }
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    app : {
        marginTop : 40,
        padding : 5,
        borderWidth : 1,
        borderColor : "red",
        flex : 1,
    },
    inputZone : {
        flex : 1,
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        borderBottomWidth : 1,
        borderColor : "#cccccc"
    },
    input : {
        width : "75%",
        height : 40,
        paddingHorizontal : 10,
        borderWidth : 1,
        borderColor : "#cccccc"
    },
    goalsListZone : {
        flex : 5
    },
    goalItem :{
        padding : 10,
        marginHorizontal : 10,
        marginTop : 10,
        borderRadius : 5,
        backgroundColor : "#072448"
    },
    goalItemText : {
        color : "#54d2d2",
    }
});


export default App;