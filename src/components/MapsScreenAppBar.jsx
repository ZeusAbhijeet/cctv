import { Appbar } from "react-native-paper";
import { getHeaderTitle } from '@react-navigation/elements';

export default function MapsScreenAppBar({ navigation, route, options, back }) {
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header mode="center-aligned" elevated={false}>
      <Appbar.Content title={title} />
      <Appbar.Action icon="magnify" onPress={() => {}} />
    </Appbar.Header>
  )
}
