import { View, Text, StyleSheet, Image } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import { colors } from "../constants/colors";

const GammeOverScreen = ({gammeNumber, gammeGuesses, onStartNeweGamme}) => {
    return(
        <View style={styles.container}>
            <Title>Correct Guess!</Title>
            <View style={styles.goImageContainer}>
                <Image style={styles.goImage} source={require("../assets/images/gameOver.jpg")} />
            </View>
            <Text style={styles.stat}>
                It took the computer<Text style={styles.highlightText}> {gammeGuesses.length} </Text> 
                rounds to guess the correct number<Text style={styles.highlightText}> {gammeNumber} </Text>
            </Text>
            <PrimaryButton onPress={onStartNeweGamme}>Play again</PrimaryButton>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        marginTop : 50,
        alignItems : "center",
        padding : 24
    },
    goImageContainer : {
        width : 300, 
        height : 300,
        borderRadius : 150,
        overflow : "hidden",
        borderWidth : 3,
        borderColor : colors.ternary,
        marginTop : 48
    },
    goImage : {
        width : "100%",
        height : "100%"
    },
    stat : {
        color : colors.primary,
        marginVertical : 24,
        fontSize : 20,
        fontFamily : "nunitoSans-Bold",
        textAlign : "center",
        textShadowColor : colors.seconadary,
        textShadowOffset : { width : 0 ,height : 1},
        textShadowRadius : 3
    },
    highlightText : {
        color : colors.ternary,
    }

});

export default GammeOverScreen;