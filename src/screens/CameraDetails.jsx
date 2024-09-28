import {View, StyleSheet} from 'react-native';
import {Text, useTheme} from 'react-native-paper';

export default function CameraDetails() {
  const theme = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <Text>CameraDetails.jsx</Text>
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
