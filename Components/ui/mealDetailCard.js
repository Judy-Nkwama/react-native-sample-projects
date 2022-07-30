import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const MealDetailCard = ({title, materialIconName}) => {
    return(
        <View style={styles.container}>
            <MaterialIcons name={materialIconName} size={24} color="#34568B" />
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        borderRadius : 12,
        backgroundColor : "white",
        borderColor : "#34568B",
        borderWidth : 2,
        paddingHorizontal : 8,
        paddingVertical : 4,
        margin : 4
    },
    text : {
        fontSize : 17,
        color : "#34568B",
        fontWeight : "bold"
    }
});

export default MealDetailCard;