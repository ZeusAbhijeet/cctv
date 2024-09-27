import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Profile from "../screens/profile";
import CctvMaps from "../screens/cctvMaps";

const PostLoginNavigator = createNativeStackNavigator();
export default function PostLoginStack() {
  return (
    <PostLoginNavigator.Navigator
      initialRouteName="CCTVMaps"
      >
      <PostLoginNavigator.Screen name="CCTVMaps" component={CctvMaps} />
      <PostLoginNavigator.Screen name='Profile' component={Profile} />
    </PostLoginNavigator.Navigator>
  )
}
