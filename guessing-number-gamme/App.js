import { useState, useEffect } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useFonts} from "expo-font";
import AppLoading from 'expo-app-loading';
import StartGanmmeScreen from "./screens/StartGammeScreen";
import GammeScreen from "./screens/GammeScreen";
import GammeOverScreen from "./screens/GammeOverScreen";

const App = props => {

    const [ gammeNumber, setGammeNumber ] = useState();
    const [ gammeOver, setgammeOver ] = useState();

    useFonts({
        "nunitoSans-Regular" : require("./assets/fonts/NunitoSans-Regular.ttf"),
        "OpenSans-Regular" : require("./assets/fonts/OpenSans-R/egular.ttf"),
        "nunitoSans-Bold" : require("./assets/fonts/NunitoSans-Bold.ttf"),
        "OpenSans-Bold" : require("./assets/fonts/OpenSans-Bold.ttf")
    });

    const handleGammeNumber = chosenNumber => {
        setGammeNumber(chosenNumber);
    };
    const handleGammeOver = () => {
        setgammeOver(true);
    };

    let currentScreen = <StartGanmmeScreen choseGammeNumber={handleGammeNumber} />;
    if(gammeOver){
        currentScreen = <GammeOverScreen />;
    }else if(gammeNumber){
        currentScreen = <GammeScreen numberGamme={gammeNumber}  onGammeOver={handleGammeOver} />;
    }

    return(
        <LinearGradient
            colors={["#590696", "#ffffff",]}
            style={styles.container}
        >
            <StatusBar style="light" />
            <ImageBackground
                source={require("./assets/images/bg.jpeg")}
                style={{ flex: 1, width: "100%" }}
                imageStyle={{ opacity: 0.15 }}
                resizeMode="repeat"
            >   
                <SafeAreaView style={styles.container}>{currentScreen}</SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1 
    },
});

export default App;