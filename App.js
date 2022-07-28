import { useState } from "react";
import { View, StyleSheet, FlatList, Modal, Button } from "react-native";
import GoalItem from "./Components/GoalItem";
import GoalsInput from "./Components/GoalsInput";
import { StatusBar } from "expo-status-bar";


const App = () => {

    const [ goals, setGoals ] = useState([]);
    const [ modalIsShown, setModalIsShown ] = useState(false);

    const handleAddNewGoal = enteredGoal => {
        if( enteredGoal.length > 1 ) {
            setGoals( previousGoals => {
                let id = previousGoals.length;
                while(previousGoals.find(item => item.id === id )){ id++;}
                return [...previousGoals, { id : id, title : enteredGoal }];
            });
            toggleModal();
        }
    };

    const handleDeleteGoal = goalId => {
        setGoals(previousGoals => previousGoals.filter( goal => goal.id !== goalId) );
    }

    const toggleModal = () => {
        setModalIsShown(state => !state);
    };

    return(
        
        <View style={styles.app}>
            <StatusBar style="light" />
            <Button title="Add new goal" color='#EBE645' onPress={toggleModal} />
            <Modal visible={modalIsShown} animationType="slide">
                <View style={styles.modal} >
                    <GoalsInput onAddGoal={handleAddNewGoal} toggleModal={toggleModal} />
                </View>
            </Modal>
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
        backgroundColor : "#000957",
        marginTop : 40,
        padding : 5,
        flex : 1,
    },
    goalsListZone : {
        flex : 5
    },
    modal : {
        flex : 1,
        backgroundColor : "#22327d",
        padding : 20
    }
});


export default App;