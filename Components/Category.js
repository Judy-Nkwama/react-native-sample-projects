import { View, Text, StyleSheet, Pressable, Platform, Image } from "react-native";

const Category = ({color, title, iconUrl, onPress}) => {
    return(
        <View style={styles.categoryOuterContainer} >
            <Pressable 
                style={({pressed}) => [styles.pressable, pressed ? styles.pressed : null] } 
                android_ripple={{color : "white"}}
                onPress={onPress}
            >
                <View style={styles.categoryInerContainer}>
                    <View style={[styles.round1, {backgroundColor : color}]}>
                        <View style={styles.round2}>
                            <Image style={styles.icon} source={ iconUrl ? {uri : iconUrl} : require("../assets/MyIcon.png")} />
                        </View>
                    </View>
                    
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
        flex : 1,
        backgroundColor : "white"
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
    round1 : {
        flex: 1,
        borderRadius : 50,
        padding : 12,
    },
    round2 : {
        flex: 1,
        borderRadius : 50,
        padding : 12,
        backgroundColor : "white",
    },
    icon : {
        flex: 1,
        width : 50,
        height : 50,
        resizeMode : "contain"
    },
    title : {
        fontSize : 18,
        fontWeight : "bold"
    }
});

export default Category;