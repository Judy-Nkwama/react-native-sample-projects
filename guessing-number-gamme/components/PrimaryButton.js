import { View, Text, StyleSheet, Pressable } from "react-native";
import { colors } from "../constants/colors";

const PrimaryButton = ({children, onPress}) => {
    return(
        <View style={styles.container}>
            <Pressable
                style={({pressed})=> pressed ? [styles.primaryButtonContainer, styles.pressed] : [styles.primaryButtonContainer] }
                onPress={onPress}
                android_ripple={{color : colors.primary200}}
            >
                <Text style={styles.primaryButtonText} >{children}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        margin : 4,
        borderRadius : 32,
        overflow : "hidden"
    },
    primaryButtonContainer :{
        padding : 8,
        backgroundColor : colors.seconadary,
    },
    primaryButtonText : {
        textAlign : "center",
        color : "white"
    },
    pressed : {
        backgroundColor : colors.primary200,
        opacity : 0.75
    }
});

export default PrimaryButton;