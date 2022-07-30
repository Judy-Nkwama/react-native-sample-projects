import { View, Text, StyleSheet } from "react-native";

const StepCard = ({title, stepNo}) => {
    return(
        <View style={styles.container}>
            <View style={styles.stepNo}>
                <Text style={styles.stepNoText}>{stepNo}</Text>
            </View>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : "row",
        justifyContent : "center",
        alignItems : "center",
        marginVertical : 2
    },
    stepNo : {
        width : "20%",
        width : 50,
        height : 50,
        borderRadius : 25,
        borderWidth : 2,
        borderColor : "#0072B5",
        marginRight : -16,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "white",
        zIndex : 2
    },
    stepNoText : {
        fontSize : 18,
        fontWeight: "bold",
        color : "#0072B5",
    },
    title : {
        width : "70%",
        backgroundColor : "#0072B5",
        padding : 12,
        paddingLeft : 22,
        color : "white"
    }
    
});

export default StepCard;