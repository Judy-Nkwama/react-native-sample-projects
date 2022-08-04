import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useContext } from 'react';
import { authentificationCtx } from '../data/store/auth-contex';
import axios from 'axios';

function WelcomeScreen() {
  const authCtx = useContext(authentificationCtx);
  const [massage, setMessage] = useState();

  useEffect(()=>{
    axios.get("https://first-project-7f43c-default-rtdb.firebaseio.com/messages.json?auth=" + authCtx.token).
    then( response => setMessage(response.data));
  }, [])

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{massage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
