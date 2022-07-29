import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";

const App = props => {

    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <StatusBar style="auto" />
            <Stack.Navigator>
                <Stack.Screen 
                    name="MealsCategories" 
                    component={CategoriesScreen} 
                />
                <Stack.Screen 
                    name="CategoryMealsScreen" 
                    component={CategoryMealsScreen} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({

});

export default App;