import { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import GoalItem from "./Components/GoalItem";
import GoalsInput from "./Components/GoalsInput";


const App = () => {

    const [ goals, setGoals ] = useState([]);

    const handleAddNewGoal = enteredGoal => {
        if( enteredGoal.length > 1 ) {
            setGoals( previousGoals => {
                let id = previousGoals.length;
                while(previousGoals.filter(item => item.id === id )) id++;
                return [...previousGoals, { id : id, title : enteredGoal }];
            });
        }
    };

    const handleDeleteGoal = goalId => {
        setGoals(previousGoals => previousGoals.filter( goal => goal.id !== goalId) );
    }

    return(
        <View style={styles.app}>
            <GoalsInput onAddGoal={handleAddNewGoal} />
            <View style={styles.goalsListZone}>
                <FlatList 
                    data={goals}
                    renderItem={ goalObject => {
                        return(
                            <GoalItem onDeleteGoal={handleDeleteGoal} goal={goalObject.item} />
                        )
                    }}
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
    goalsListZone : {
        flex : 5
    }
});


export default App;