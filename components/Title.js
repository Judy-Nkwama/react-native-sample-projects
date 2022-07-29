import { View, Text, StyleSheet, Platform } from "react-native";

const Title = ({children}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>{children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        padding : 16,
        borderWidth : Platform.select({ android : 2, ios : 0}),
        borderColor : "white",
        borderRadius : 5
    },
    titleText : {
        color : "white",
        fontSize : Platform.select({android : 24, ios : 32}),
        fontWeight : "bold",
        textAlign : "center"
    }
});

export default Title;