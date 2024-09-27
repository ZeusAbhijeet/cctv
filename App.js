import { StatusBar } from 'expo-status-bar';
import {Dimensions, StyleSheet, View} from 'react-native';
import { PaperProvider, Text } from "react-native-paper";
import {NavigationContainer} from "@react-navigation/native";

import SlidingUpPanel from "rn-sliding-up-panel";

const { height } = Dimensions.get("window");


export default function App() {
  return (
      <PaperProvider>
        <NavigationContainer>
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <StatusBar style="auto" />
            </View>
        </NavigationContainer>
      </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  panel: {
    flex: 1,
    position: 'relative',
  },
  panelHeader: {
    height: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },


});
