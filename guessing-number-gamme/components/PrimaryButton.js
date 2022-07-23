import { View, Text, StyleSheet, Pressable } from "react-native";

const PrimaryButton = ({children}) => {
    return(
        <View style={styles.container}>
            <Pressable
                style={({pressed})=> pressed ? [styles.primaryButtonContainer, styles.pressed] : [styles.primaryButtonContainer] }
                onPress={() => { }}
                android_ripple={{color : "#571387"}}
                
            >
                <Text style={styles.primaryButtonText} >{children}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        margin : 4,
        borderRadius : 32,
        overflow : "hidden"
    },
    primaryButtonContainer :{
        padding : 8,
        backgroundColor : "#a169c9",
    },
    primaryButtonText : {
        textAlign : "center",
        color : "white"
    },
    pressed : {
        backgroundColor : "#8036b5",
        opacity : 0.75
    }
});

export default PrimaryButton;