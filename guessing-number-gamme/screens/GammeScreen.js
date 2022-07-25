import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Title from "../components/Title";
import { colors } from "../constants/colors";

const GammeScreen = ({numberGmme}) => {

    const geussingNumber = ( min, max ) => {
        return  Math.floor( Math.random() * ( max - min ) ) + min
    };



    const [currentGuest, setCurrentGuest] = useState();


    return(
        <View style={styles.gammeScreen}>
            <Title>Computer Guess</Title>
            <View style={styles.gameControlZone}>
                <Pressable 
                    style={({pressed}) => pressed ? [styles.btn, styles.btnPressed] : styles.btn} 
                    onPress={()=>{}}
                >
                     <Text style={styles.btnText}>+</Text>
                </Pressable>
                <Text style={styles.geuss}>{55}</Text>
                <Pressable 
                    style={({pressed}) => pressed ? [styles.btn, styles.btnPressed] : styles.btn} 
                    onPress={()=>{}}
                >
                    <Text style={styles.btnText}>-</Text>
                </Pressable>
            </View>
            <View>
                <Text>Previous Guesses</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    gammeScreen : {
        padding : 24
    },
    gameControlZone : {
        height : 150,
        marginTop : 16,
        borderRadius : 24,
        flexDirection : "row",
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : colors.primary
    },
    geuss : {
        width : 50,
        textAlign : "center",
        borderBottomWidth : 2,
        borderBottomColor : colors.ternary,
        color : colors.ternary,
        fontSize : 25,
        fontWeight : "bold",
        marginVertical : 12,
        marginHorizontal : 8
    },
    btn : {
        width : 60,
        height : 60,
        borderRadius : 30,
        flexDirection : "row",
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : colors.seconadary,
    },
    btnPressed : {
        backgroundColor : colors.primary200,
        opacity : 0.75
    },
    btnText : {
        color : "white",
        fontSize: 32
    }

});

export default GammeScreen;