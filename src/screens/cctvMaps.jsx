import {Text, useTheme} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import {View, StyleSheet} from "react-native";

export default function CctvMaps() {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text>cctvMaps.jsx</Text>
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
