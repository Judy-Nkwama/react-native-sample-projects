import { useState, useContext } from 'react';
import { Alert } from 'react-native';
import { loginUser } from '../utilities/auth';
import { authentificationCtx } from '../data/store/auth-contex';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';

function LoginScreen() {
  const authCtx = useContext(authentificationCtx);
  const [isAuthentificating, setIsAuthentificating] = useState(false);

    const authentificate = async ({ email, password }) => {
        setIsAuthentificating(true);
        try{
          const idToken = await loginUser(email, password);
          authCtx.authentificate(idToken);
          await AsyncStorage.setItem("token", idToken);
        }catch(exeption){
            Alert.alert("An error occured", `Failed to log you in... Check your crendential again`);
            setIsAuthentificating(false);
        }
    };

    if(isAuthentificating){
        return <LoadingOverlay message="Loging you in ..." />
    }


  return <AuthContent isLogin onAuthenticate={authentificate} />;
}

export default LoginScreen;
