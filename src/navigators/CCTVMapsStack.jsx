import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CustomAppBar from "../components/CustomAppBar";
import CctvMaps from "../screens/cctvMaps";
import MapsScreenAppBar from "../components/MapsScreenAppBar";

const CCTVMapsNavigator = createNativeStackNavigator();
export default function CCTVMapsStack() {
  return (
    <CCTVMapsNavigator.Navigator
      screenOptions={{
        initialRouteName: 'CCTVMapsPage',
      }}
    >
      <CCTVMapsNavigator.Screen
        name='CCTVMapsPage'
        component={CctvMaps}
        options={{
          header: (props) => <MapsScreenAppBar {...props} />,
          headerTitle: 'Camera Map'
        }}
      />
    </CCTVMapsNavigator.Navigator>
  )
}
