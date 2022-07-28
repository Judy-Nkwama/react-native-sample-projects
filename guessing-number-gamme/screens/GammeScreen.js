import { useState } from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import Title from "../components/Title";
import { colors } from "../constants/colors";
import Guess from "../components/Guess";
import Description from "../components/Description";

let minBoundary = 1;
let maxBoundary = 100;
const geussNumber = ( min, max, exept ) => {
    let guess = Math.floor( Math.random() * ( max - min ) ) + min;
    if( guess == exept ){
        return geussNumber(min, max, exept);
    }else{
        return guess;
    }
};

const GammeScreen = ({numberGamme, onGammeOver}) => {

    const initialGuest = geussNumber( minBoundary, maxBoundary, numberGamme );
    const [currentGuest, setCurrentGuest] = useState(initialGuest);

    const nextGuess = ( direction ) => {
        if( 
            (direction == "lower" && currentGuest < numberGamme) || 
            (direction == "higher" && currentGuest > numberGamme)
        ){
            Alert.alert(
                "Be honest please!",
                "Don't lead the computer to the wrong direction",
                [{Text : "Sorry!", style : "cancel"}]
            );
            return;
        }
        if( direction == "lower"){
            maxBoundary = currentGuest;
        }else{
            minBoundary = currentGuest + 1;
        }

        const newGuess = geussNumber(minBoundary, maxBoundary, currentGuest);

        if(newGuess == numberGamme){
            onGammeOver();
            return;
        }

        setCurrentGuest(newGuess);
    };


    return(
        <View style={styles.gammeScreen}>
            <Title>Computer's Guess</Title>
            <View style={styles.gammeZone}>
                <Description>Is it Higher or Lower?</Description>
                <View style={styles.gameControlZone}>
                <Pressable 
                    style={({pressed}) => pressed ? [styles.btn, styles.btnPressed] : styles.btn} 
                    onPress={ nextGuess.bind(this,"lower") }
                >
                    <AntDesign name="doubleleft" size={20} color="white" />
                </Pressable>
                <Text style={styles.geuss}>{currentGuest}</Text>
                <Pressable 
                    style={({pressed}) => pressed ? [styles.btn, styles.btnPressed] : styles.btn} 
                    onPress={nextGuess.bind(this,"higher")}
                >
                    <AntDesign name="doubleright" size={20} color="white" />
                </Pressable>
                </View>
            </View>
            <View>
                <Guess direction={"lower"} />
                <Guess direction={"higher"} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    gammeZone : {
        height : 150,
        marginVertical : 24,
        borderRadius : 24,
        paddingVertical : 8,
        backgroundColor : colors.primary,
    },
    gammeScreen : {
        marginTop : 50,
        padding : 24
    },
    gameControlZone : {
        flexDirection  :"row",
        justifyContent : "center",
        alignItems : "center",
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
    }

});

export default GammeScreen;