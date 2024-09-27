import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Profile from "../screens/profile";
import CctvMaps from "../screens/cctvMaps";
import CustomAppBar from "../components/CustomAppBar";
import BottomTabNavigator from "./BottomNavigator";

const PostLoginNavigator = createNativeStackNavigator();
export default function PostLoginStack() {
  return (
    <PostLoginNavigator.Navigator
      screenOptions={{
        header: (props) => <CustomAppBar {...props} />,
      }}
      initialRouteName="BottomNavigator"
      >
      <PostLoginNavigator.Screen
        name="BottomNavigator"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </PostLoginNavigator.Navigator>
  )
}
