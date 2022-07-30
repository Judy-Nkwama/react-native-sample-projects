import { Platform, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";

const App = props => {

    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <StatusBar style={Platform.select({ios : "dark", android : "light"})} />
            <Stack.Navigator
                screenOptions={{
                    headerStyle : { backgroundColor : Platform.select({ios : "white", android : "#1b2e4b"}) },
                    headerTintColor : Platform.select({ ios : "#1b2e4b", android : "white" }),
                    contentStyle : { backgroundColor : "#e6e6ff"}
                }}
            >
                <Stack.Screen 
                    name="MealsCategories" 
                    component={CategoriesScreen}
                    options={{title : "Meals Categories"}}
                />
                <Stack.Screen 
                    name="CategoryMealsScreen" 
                    component={CategoryMealsScreen} 
                />
                <Stack.Screen 
                    name="MealDetailsScreen"
                    component={MealDetailsScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({

});

export default App;