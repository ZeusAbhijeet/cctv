import { View, StyleSheet } from 'react-native';
import {Button, Text, useTheme} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import {navigate} from "@react-navigation/routers/src/CommonActions";

export default function Login() {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text>Login.jsx</Text>
      <Button
        mode="outlined"
        onPress={() => {navigation.navigate("PostLogin")}}
      >Go to Post Login</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
