import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import {useTheme} from "react-native-paper";
import CctvMaps from "../screens/cctvMaps";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Profile from "../screens/profile";
import CustomAppBar from "../components/CustomAppBar";

const BottomNavigator = createMaterialBottomTabNavigator();
export default function BottomTabNavigator() {
  return (
    <BottomNavigator.Navigator
      theme={useTheme()}
      initialRouteName="CCTVMaps"
      screenOptions={{
        header: (props) => <CustomAppBar {...props} />,
      }}
    >
      <BottomNavigator.Screen
        name='CCTVMaps'
        component={CctvMaps}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="map"
              size={26}
              color={color}
            />
          ),
          headerShown: true,
        }}
      />
      <BottomNavigator.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account"
              size={26}
              color={color}
            />
          )
        }}
      />
    </BottomNavigator.Navigator>
  )
}
