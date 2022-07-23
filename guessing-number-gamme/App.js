import { View, Text, StyleSheet } from "react-native";

const MyComponent = props => {
    return(
        <View style={styles.app}>
            <Text>Hello world!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    app : {
        justifyContent : "center",
        alignItems : "center"
    }
});

export default MyComponent;