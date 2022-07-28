import { View, Text, StyleSheet } from "react-native";

const Guess = ({direction, guess}) => {
    return(
        <View style={{...styles.higherGuess, ...{backgroundColor : direction == "higher" ? "#ff8cc2" : "#75cf6b"}}}>
            <Text style={[styles.text, styles.guess]}>{guess}</Text>
            <Text 
                style={[styles.text, styles.caption, { 
                    backgroundColor : direction == "higher" ? "#ffd4e8": "#daffd6",
                    color : direction == "higher" ? "#ff8cc2" : "#75cf6b"
                }]}
            >
                {direction === "higher" ? "Is Higher" : "Is lower"}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    higherGuess : {
        alignItems : "stretch",
        flexDirection : "row",
        borderRadius : 20,
        overflow: "hidden",
        elevation : 3,
        shadowColor : "black",
        marginBottom : 8,
        shadowOffset : {
            width : 1,
            height : 2
        }, 
        shadowRadius : 3,
        shadowOpacity : 1
    },
    text : {
        paddingVertical : 12,
        fontSize : 17,
        fontFamily : "nunitoSans-Regular",
        fontWeight : "bold"
    },
    guess : {
        flex : 1,
        paddingLeft : 16,
        color : "white",
        fontFamily : "nunitoSans-Regular"
    },
    caption : {
        flex: 4,
        paddingRight : 16,
        textAlign : "right",
        borderRadius : 20,
        overflow : "hidden"
    }
});

export default Guess;