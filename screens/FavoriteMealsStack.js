import { StyleSheet, FlatList } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
import Meal from "../Components/Meal";
import EmptyList from "../Components/EmptyList";

const FavoriteMealsScreen = () => {

    const favoriteMealsIds = useSelector( state => state.favoriteMeals);
    const favoriteMeals = MEALS.filter( item => favoriteMealsIds.includes(item.id) );
    
    const renderMeal = itemData => {
        const meal = itemData.item;
        const mealProps = {
            id : meal.id,
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
            data={favoriteMeals}
            renderItem={ itemData => renderMeal(itemData) }
            keyExtractor={ itemData => itemData.id }
        />
    );
};

const FavoriteMealsStack = () => {

    const favoriteMealsIds = useSelector( state => state.favoriteMeals)
    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator
            screenOptions={{
                title: "Your Favorite Meals",
                headerStyle: { backgroundColor: Platform.select({ ios: "white", android: "#1b2e4b" }) },
                headerTintColor: Platform.select({ ios: "#1b2e4b", android: "white" }),
                contentStyle: { backgroundColor: "#e6e6ff" }
            }}
        >
            <Stack.Screen name="FavoriteMealsScreen" component={favoriteMealsIds.length < 1 ? EmptyList : FavoriteMealsScreen} />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
    }
});

export default FavoriteMealsStack;