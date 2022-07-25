import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import StartGanmmeScreen from "./screens/StartGammeScreen";
import GammeScreen from "./screens/GammeScreen"

const App = props => {
    const [ gammeNumber, setGammeNumber ] = useState();
    const handleGammeNumber = chosenNumber => {
        setGammeNumber(chosenNumber);
    };

    let currentScreen = <StartGanmmeScreen choseGammeNumber={handleGammeNumber} />;
    if(gammeNumber) currentScreen = <GammeScreen numberGamme={gammeNumber} />

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