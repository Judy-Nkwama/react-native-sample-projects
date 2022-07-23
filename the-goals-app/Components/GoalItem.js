import { View, Text, StyleSheet , TouchableOpacity } from "react-native";

const GoalItem = props => {
    return(
        <TouchableOpacity onPress={() => props.onDeleteGoal(props.goal.id)} >
            <View style={styles.goalItem}>
                <Text style={styles.goalItemText}>{props.goal.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
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

export default GoalItem;