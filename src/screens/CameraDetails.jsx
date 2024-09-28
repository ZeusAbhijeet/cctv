import { View, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import CameraInfo from '../components/CameraInfo';

export default function CameraDetails() {
  const theme = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => { }} />
        <Appbar.Content title="CCTV" />
      </Appbar.Header>
      <View
        style={{
          flex: 1,
          padding: 10
        }}
      >
        <CameraInfo title={"LOCATION"} value={"Compu World Chaudi"} />
        <CameraInfo title={"PRIVATE/GOVT"} value={"Compu World Chaudi"} />
        <CameraInfo title={"OWNER"} value={"Ronaldo Fernandes"} />
        <CameraInfo title={"CONTACT"} value={"9422576040"} />
        <CameraInfo title={"LATITUDE"} value={"15.008483"} />
        <CameraInfo title={"LONGITUDE"} value={"74.042655"} />
        <CameraInfo title={"COVERAGE"} value={"Road side"} />
        <CameraInfo title={"BACKUP"} value={"15days"} />
        <CameraInfo title={"CONNECTED"} value={"No"} />
        <CameraInfo title={"STATUS"} value={"working"} />
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
