import { useState, useContext } from 'react';
import { Alert } from 'react-native';
import { createUser } from '../utilities/auth';
import { authentificationCtx } from '../data/store/auth-contex';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';



function SignupScreen() {

    const authCtx = useContext(authentificationCtx);
    const [isAuthentificating, setIsAuthentificating] = useState(false);

    const authentificate = async ({ email, password }) => {
        setIsAuthentificating(true);
        try{
            const idToken = await createUser(email, password);
            authCtx.authentificate(idToken);
            await AsyncStorage.setItem("token", idToken);
        }catch(exeption){
            Alert.alert("An error occured", "Singup failed.. Check your credentials again");
            setIsAuthentificating(false);
        }
    };

    if(isAuthentificating){
        return <LoadingOverlay message="Singin you up ..." />
    }

    return <AuthContent onAuthenticate={authentificate}/>;
}

export default SignupScreen;
