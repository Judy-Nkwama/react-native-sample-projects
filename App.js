import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

const MyComponent = props => {
  return(
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Hello world!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flex : 1
  }
});

export default MyComponent;