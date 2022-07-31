import { StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({name, color, onPress}) => {
    return(
        <Pressable
            android_ripple={{color : "#ccc"}}
            onPress={onPress}
            style={({pressed}) => pressed ? {opacity : 0.5} : null }
        >
            <Ionicons name={name} size={24} color={color} />
        </Pressable>
    );
};0

const styles = StyleSheet.create({
    pressable : {
        
    }
});

export default IconButton;