import { View, Text, StyleSheet, Pressable, Image } from "react-native";

const Meal = ({ title, imageUrl, duration, complexity, affordability }) => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.pressable}>
                <View style={styles.innerContainer}>
                    <Image style={styles.image} source={{uri : imageUrl }} />
                    <Text style={styles.title}>{title}</Text>
                    <Text>{duration}m</Text>
                    <Text>{complexity}</Text>
                    <Text>{affordability}</Text>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius : 8,
        margin : 16,
        elevation : 8,
        overflow : "hidden"
    },
    pressable : {
        flex: 1
    },
    innerContainer : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image : {
        width : "100%",
        height : 200
    },
    title : {
        textAlign : "center",
        fontSize : 20
    }
});

export default Meal;