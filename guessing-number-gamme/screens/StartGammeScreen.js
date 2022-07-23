import { View, Text, StyleSheet, TextInput } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
const StartGanmmeScreen = props => {
    return(
        <View style={styles.inputZone}>
            <TextInput 
                maxLength={2}
                style={styles.numberInpur} 
                keyboardType="number-pad"
                autoFocus={true}
            />
            <PrimaryButton>Confirm</PrimaryButton>
            <PrimaryButton>Cancel</PrimaryButton>
        </View>
    );
};

const styles = StyleSheet.create({
    inputZone : {
        padding : 16,
        marginHorizontal : 24,
        marginTop : 100,
        backgroundColor : "#590696",
        borderRadius : 12,
        elevation : 4,
        shadowColor : "black",
        shadowOffset : {
            width : 1,
            height : 2
        },
        shadowOpacity : 0.3,
        shadowRadius : 4
    },
    numberInpur : {
        width : 50,
        textAlign : "center",
        borderBottomWidth : 2,
        borderBottomColor : "#FBCB0A",
        color : "#FBCB0A",
        fontSize : 25,
        fontWeight : "bold",
        marginVertical : 12,
        padding : 8
    }
});

export default StartGanmmeScreen;