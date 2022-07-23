import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = props => {
    return(
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: "#cccccc" }}
                onPress={() => props.onDeleteGoal(props.goal.id)}
                style={({pressed}) => {
                    return {opacity : pressed ? 0.5 : 1}
                }}
            >
                <Text style={styles.goalItemText}>{props.goal.title}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    goalItem :{
        marginHorizontal : 10,
        marginTop : 10,
        borderRadius : 5,
        backgroundColor : "#344CB7"
    },
    goalItemText : {
        padding : 10,
        color : "#54d2d2",
    }
});

export default GoalItem;