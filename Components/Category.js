import { View, Text, StyleSheet, Pressable, Platform } from "react-native";

const Category = ({color, title, onPress}) => {
    return(
        <View style={styles.categoryOuterContainer} >
            <Pressable 
                style={({pressed}) => [styles.pressable, {backgroundColor : color}, pressed ? styles.pressed : null] } 
                android_ripple={{color : "white"}}
                onPress={onPress}
            >
                <View style={styles.categoryInerContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    categoryOuterContainer : {
        flex : 1,
        height : 150,
        margin : 8,
        borderRadius : 12,
        elevation : 8,
        shadowColor : "black",
        shadowOffset : { width : 2, height : 2},
        shadowOpacity : 0.8,
        shadowRadius : 8,
        backgroundColor : "white",
        overflow : Platform.select({ios : "visible" , android : "hidden"})
    },
    pressable : {
        flex : 1
    },
    pressed : {
        opacity : 0.5
    },
    categoryInerContainer : {
        flex : 1,
        padding : 16,
        justifyContent : "center",
        alignItems : "center"
    },
    title : {
        fontSize : 18,
        fontWeight : "bold"
    }
});

export default Category;