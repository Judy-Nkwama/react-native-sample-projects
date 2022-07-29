import { useState } from "react";
import { View, StyleSheet, TextInput, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { colors } from "../constants/colors";
import Title from "../components/Title";
import Description from "../components/Description";

const StartGanmmeScreen = ({choseGammeNumber}) => {
    
    const [enteredNumber, setEnteredNumber] = useState();

    const handleChangeNumber = typed => {
        setEnteredNumber(typed);
    };

    const { width, height } = useWindowDimensions();

    const handleChoseNumber = () => {
        if(isNaN(enteredNumber) || enteredNumber <= 0 || enteredNumber > 99 ){
            Alert.alert(
                "Invalid Number!",
                "A number between 1 and 99 is required.",
                [{text : "Okay", style : "destructive", onPress : resetNumberInput }]
            );
            return;
        }
        choseGammeNumber(enteredNumber);
    };

    const resetNumberInput = () => {
        setEnteredNumber("");
    };

    return (
        <ScrollView style={styles.container}>
            <KeyboardAvoidingView style={styles.container} behavior="position">
                <View style={[styles.container, { marginTop: height > 420 ? 100 : 32, marginHorizontal: width > 500 ? 100 : 24 }]}>
                    <Title style={styles.title}>Guess My Number</Title>
                    <View style={styles.inputZone}>
                        <Description>Enter your Number</Description>
                        <TextInput
                            maxLength={2}
                            style={styles.numberInpur}
                            keyboardType="number-pad"
                            autoFocus={true}
                            value={enteredNumber}
                            onChangeText={handleChangeNumber}
                        />
                        <View style={styles.btnsWrapper}>
                            <PrimaryButton onPress={resetNumberInput}>Cancel</PrimaryButton>
                            <PrimaryButton onPress={handleChoseNumber}>Confirm</PrimaryButton>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    inputZone : {
        alignItems : "center",
        padding : 16,
        marginTop : 16,
        backgroundColor : colors.primary,
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
        borderBottomColor : colors.ternary,
        color : colors.ternary,
        fontSize : 25,
        fontWeight : "bold",
        marginTop : 4,
        marginBottom : 12,
        padding : 8
    },
    btnsWrapper : {
        flexDirection : "row"
    }
});

export default StartGanmmeScreen;