import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

const GammeScreen = ({numberGmme}) => {

    const geussingNumber = ( min, max ) => {
        return  Math.floor( Math.random() * ( max - min ) ) + min
    };



    const [currentGuest, setCurrentGuest] = useState();


    return(
        <View>
            <Title>Computer Guess</Title>
            <Title>{55}</Title>
            <PrimaryButton>+</PrimaryButton>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default GammeScreen;