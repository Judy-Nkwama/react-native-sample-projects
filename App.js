import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import store from "./data/store/store";
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoriteMealsStack from "./screens/FavoriteMealsStack";

const MealsSatck = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: Platform.select({ ios: "white", android: "#1b2e4b" }) },
                headerTintColor: Platform.select({ ios: "#1b2e4b", android: "white" }),
                contentStyle: { backgroundColor: "#e6e6ff" }
            }}
        >
            <Stack.Screen
                name="MealsCategories"
                component={CategoriesScreen}
                options={{ title: "Meals Categories" }}
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
    );
};


const App = () => {

    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <StatusBar style={Platform.select({ ios: "dark", android: "light" })} />
            <Provider store={store}>
                <Tab.Navigator
                    screenOptions={({ route }) => {
                        return {
                            headerShown: false,
                            tabBarActiveTintColor: "#1b4d98",
                            tabBarInactiveTintColor: "#c1c1cd",
                            tabBarIcon: ({ color }) => {
                                let iconName = "list";
                                if (route.name == "Favorites") iconName = "star";
                                return <Ionicons name={iconName} size={24} color={color} />
                            }
                        }
                    }}
                >
                    <Tab.Screen name="Categories" component={MealsSatck} />
                    <Tab.Screen name="Favorites" component={FavoriteMealsStack} />
                </Tab.Navigator>
            </Provider>
        </NavigationContainer>
    );
};

export default App;