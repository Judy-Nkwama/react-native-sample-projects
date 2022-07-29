import { useLayoutEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import Meal from "../Components/Meal";

const CategoryMealsScreen = ({ navigation, route }) => {

    const curentCategoryId = route.params.categoryId;
    const categoryMeals = MEALS.filter( item => item.categoryIds.includes(curentCategoryId) );

    useLayoutEffect(() => {
        const title = CATEGORIES.find( category => category.id == curentCategoryId )
        navigation.setOptions({
            title : title.title
        });
    }, [navigation, curentCategoryId]);
    
    const renderMeal = itemData => {
        const meal = itemData.item;
        const mealProps = {
            title : meal.title,
            imageUrl : meal.imageUrl,
            complexity : meal.complexity,
            affordability : meal.affordability,
            duration : meal.duration
        }
        return <Meal {...mealProps} />
    };

    return(
        <FlatList 
            style={styles.container}
            data={categoryMeals}
            renderItem={ itemData => renderMeal(itemData) }
            keyExtractor={ itemData => itemData.id }
        />
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
    }
});

export default CategoryMealsScreen;