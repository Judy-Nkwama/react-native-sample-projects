import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Title from "../components/Title";
import { colors } from "../constants/colors";
import Guess from "../components/Guess";

const GammeScreen = ({numberGamme}) => {

    
    const geussingNumber = ( min, max, exept ) => {
        let guess = Math.floor( Math.random() * ( max - min ) ) + min;
        while( guess === exept ){
            guess = Math.floor( Math.random() * ( max - min ) ) + min;
        }
        return guess;
    };



    const [currentGuest, setCurrentGuest] = useState( geussingNumber( 1, 99, numberGamme ));


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
                <Text style={styles.geuss}>{currentGuest}</Text>
                <Pressable 
                    style={({pressed}) => pressed ? [styles.btn, styles.btnPressed] : styles.btn} 
                    onPress={()=>{}}
                >
                    <Text style={styles.btnText}>-</Text>
                </Pressable>
            </View>
            <View>
                <Guess direction={"lower"} />
                <Guess direction={"higher"} />
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
        marginVertical : 16,
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