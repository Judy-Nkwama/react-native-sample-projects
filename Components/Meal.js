import { View, Text, StyleSheet, Pressable, Image, Platform } from "react-native";

const Meal = ({ title, imageUrl, duration, complexity, affordability }) => {
    return (
        <View style={styles.container}>
            <Pressable 
                style={ ({pressed}) => [styles.pressable, pressed ? {opacity : 0.5} : null] }
                android_ripple={{color : "#ccc"}}
            >
                <View style={styles.innerContainer}>
                    <Image style={styles.image} source={{ uri: imageUrl }} />
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.mealDetails}>
                        <Text style={styles.detail}>{duration}min</Text>
                        <Text style={styles.detail}>{complexity}</Text>
                        <Text style={styles.detail}>{affordability}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 8,
        margin: 16,
        elevation: 8,
        shadowColor : "black",
        shadowOffset : { width : 2, height : 2},
        shadowOpacity : 0.8,
        shadowRadius : 8,
        backgroundColor : "white",
        overflow : Platform.select({ios : "visible" , android : "hidden"})
    },
    pressable: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: "100%",
        height: 200
    },
    title: {
        textAlign: "center",
        fontSize: 20,
        marginVertical : 8,
        fontWeight : "bold",
        fontSize : 18,
        paddingHorizontal : 12
    },
    mealDetails : {
        flexDirection : "row",
        justifyContent : "center",
        alignItems : "center",
        marginBottom : 8,
    },
    detail : {
        marginHorizontal : 4
    }
});

export default Meal;