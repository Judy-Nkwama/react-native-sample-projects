import { View, Text, StyleSheet } from "react-native";

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
        borderWidth : 2,
        borderColor : "white",
        borderRadius : 5
    },
    titleText : {
        color : "white",
        fontSize : 24,
        fontWeight : "bold",
        textAlign : "center"
    }
});

export default Title;