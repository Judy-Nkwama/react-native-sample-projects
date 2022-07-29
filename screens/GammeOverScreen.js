import { View, Text, StyleSheet, Image, Dimensions, useWindowDimensions } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import { colors } from "../constants/colors";

const GammeOverScreen = ({gammeNumber, gammeGuesses, onStartNeweGamme}) => {

    const { width, height } = useWindowDimensions();
    const ImadeBlock = {
        width : width > 500 ? 100 : 300,
        height : width > 500 ? 100 : 300,
        borderRadius : width > 500 ? 50 : 150 
    };

    return(
        <View style={styles.container}>
            <Title>Correct Guess!</Title>
            <View style={[styles.goImageContainer, ImadeBlock ]}>
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

const {width, height} = Dimensions.get("window");
const brkPointWidth = 330;
const brkPointHeight = 680;
//alert(height);

const styles = StyleSheet.create({
    container : {
        flex : 1,
        marginTop : height > brkPointHeight ? 50 : 25,
        alignItems : "center",
        padding : 24
    },
    goImageContainer : {
        overflow : "hidden",
        borderWidth : 3,
        borderColor : colors.ternary,
        marginTop : height > brkPointHeight ? 48 : 24,
    },
    goImage : {
        width : "100%",
        height : "100%"
    },
    stat : {
        color : colors.primary,
        marginVertical : height > 650 ? 24 : 12,
        fontSize :  width > brkPointWidth ? 20 : 17,
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