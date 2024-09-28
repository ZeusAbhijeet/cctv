import { StatusBar } from 'expo-status-bar';
import {Dimensions, StyleSheet, useColorScheme, View} from 'react-native';
import {MD3DarkTheme, MD3LightTheme, PaperProvider, Text} from "react-native-paper";
import {NavigationContainer} from "@react-navigation/native";
import { useMemo } from "react";

import SlidingUpPanel from "rn-sliding-up-panel";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useMaterial3Theme} from "@pchmn/expo-material3-theme";
import {SafeAreaProvider} from "react-native-safe-area-context";
import Login from "./src/screens/login";
import PostLoginStack from "./src/navigators/postLoginStack";
import CustomAppBar from "./src/components/CustomAppBar";
import { setDefaults } from "react-geocode";

import 'react-native-gesture-handler';
import 'react-native-reanimated';


const { height } = Dimensions.get("window");
const Stack = createNativeStackNavigator();

// import MapLibreGL from '@maplibre/maplibre-react-native';

// MapLibreGL.setAccessToken(null);

setDefaults({
  key: "AIzaSyBN7WeAsX5Ya5BvLY_4AKQFklaDSBIPylU",
  language: 'en',
  region: 'in'
})

export default function App() {
  const colorScheme = useColorScheme();
  let { theme } = useMaterial3Theme();

  const paperTheme = useMemo(
    () =>
      colorScheme === 'dark' ? { ...MD3DarkTheme, colors: theme.dark } : { ...MD3LightTheme, colors: theme.light },
    [colorScheme, theme]
  );


  return (
      <PaperProvider theme={paperTheme}>
        <NavigationContainer>
            <SafeAreaProvider>
              <StatusBar style="auto" />
              <Stack.Navigator
                initialRouteName='PostLogin'
                screenOptions={{
                  header: (props) => <CustomAppBar {...props} />,
                }}
                >
                <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='PostLogin' component={PostLoginStack} options={{ headerShown: false }} />
              </Stack.Navigator>
            </SafeAreaProvider>
        </NavigationContainer>
      </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
