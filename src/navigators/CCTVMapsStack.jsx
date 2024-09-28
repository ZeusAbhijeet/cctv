import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CustomAppBar from "../components/CustomAppBar";
import CctvMaps from "../screens/cctvMaps";

const CCTVMapsNavigator = createNativeStackNavigator();
export default function CCTVMapsStack() {
  return (
    <CCTVMapsNavigator.Navigator
      screenOptions={{
        header: (props) => <CustomAppBar {...props} />,
        initialRouteName: 'CCTVMapsPage',
      }}
    >
      <CCTVMapsNavigator.Screen name='CCTVMapsPage' component={CctvMaps} options={{headerShown: false}} />
    </CCTVMapsNavigator.Navigator>
  )
}
