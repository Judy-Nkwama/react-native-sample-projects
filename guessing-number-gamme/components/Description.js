import { Text, StyleSheet } from "react-native";
import { colors } from "../constants/colors";
const Description = ({children}) => {
    return(
        <Text style={styles.description}>{children}</Text>
    );
};

const styles = StyleSheet.create({
    description : {
        textAlign : "center",
        marginVertical : 8,
        fontSize : 20,
        color : colors.ternary
    }
});

export default Description;