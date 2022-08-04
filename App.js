import { useContext, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { authentificationCtx } from './data/store/auth-contex';
import { Colors } from './constants/styles';
import * as SplashScreen from "expo-splash-screen";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthentificationProvider from "./data/store/auth-contex";
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import IconButton from "./components/ui/IconButton";

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: Colors.primary500 },
                headerTintColor: 'white',
                contentStyle: { backgroundColor: Colors.primary100 },
            }}
        >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
    );
}

function AuthenticatedStack() {
    const authCtx = useContext(authentificationCtx);
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: Colors.primary500 },
                headerTintColor: 'white',
                contentStyle: { backgroundColor: Colors.primary100 },
            }}
        >
            <Stack.Screen name="Welcome" component={WelcomeScreen} 
                options={{
                    headerRight : ({tintColor}) => <IconButton icon="exit" color={tintColor} size={24} 
                    onPress={() => {
                        authCtx.logout();
                        const cleanToken = async () =>{
                            await AsyncStorage.removeItem("token");
                        };
                        cleanToken();
                    }}
                    />
                }}
            />
        </Stack.Navigator>
    );
}

function Navigation() {

    const authCtx = useContext(authentificationCtx);

    useEffect(()=>{
        const hydratation = async () => {
            try{
                const token = await AsyncStorage.getItem("token");
                if(!!token) authCtx.authentificate(token);
            }catch(error){
                console.log(error.message);
            }
            await SplashScreen.hideAsync();
        };
        hydratation();

    },[]);

    return (
        <NavigationContainer>
            {authCtx.isAuthentificated ? <AuthenticatedStack /> : <AuthStack /> }
        </NavigationContainer>
    );
};


export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <AuthentificationProvider>
                <Navigation />
            </AuthentificationProvider>
        </>
    );
}
