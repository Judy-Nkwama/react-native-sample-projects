import { View, Image , StyleSheet, Text } from "react-native";

const EmptyList = () => {
    return(
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Image source={require("../assets/empty.png")} style={styles.image} />
                <Text style={styles.caption}>No Favorite Meals For the moment...</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container : { 
        flex : 1,
        padding : 50
    },
    innerContainer : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
    },
    image : {
        width : 70,
        height : 70
    },
    caption :{
        fontSize : 18,
        textAlign :"center",
        color : "#1b2e4b"
    }
});

export default EmptyList;