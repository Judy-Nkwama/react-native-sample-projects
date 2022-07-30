import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from "react-native";;
import { MEALS } from "../data/dummy-data";
import MealDetailCard from "../Components/ui/mealDetailCard";
import StepCard from "../Components/ui/StepCard";


const MealDetailsScreen = ({ route, navigation }) => {

    const mealId = route.params.mealId;
    const currentMeal = MEALS.find(meal => meal.id == mealId);

    useLayoutEffect(()=>{
        navigation.setOptions({
            title : currentMeal.title
        })
    }, [currentMeal]);


    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: currentMeal.imageUrl }} />
            <ScrollView style={styles.detailsContainer}>
                <View style={styles.mealDetails}>
                    <MealDetailCard title={currentMeal.duration} materialIconName={"access-time"} />
                    <MealDetailCard title={currentMeal.complexity} materialIconName={"bubble-chart"} />
                    <MealDetailCard title={currentMeal.affordability} materialIconName={"attach-money"} />
                </View>

                <View style={styles.ingredientList}>
                    {currentMeal.ingredients.map(ingredient => <Text key={ingredient} style={styles.ingredient}>{ingredient}</Text>)}
                </View>

                <View style={styles.stepList}>
                    {currentMeal.steps.map(step => <StepCard key={step} title={step} stepNo={currentMeal.steps.indexOf(step) + 1} />)}
                </View>
            </ScrollView>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: 200,
        width: Dimensions.get("window").width
    },
    detailsContainer : {
        
    },
    mealDetails :{
        flexDirection : "row",
        justifyContent : "center"
    },
    ingredientList : {
        padding : 12,
        flexDirection : "row",
        flexWrap : "wrap",
        justifyContent :"center"
    },
    ingredient: {
        paddingVertical: 2,
        margin : 2,
        paddingHorizontal : 8,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#D2386C",
        color: "#D2386C",
    },
    stepList : {
       flexDirection : "column"
    }
});

export default MealDetailsScreen;