import { Searchbar, Text, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import CameraCarousel from "./components/CameraCarousel";

export default function CctvMaps() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const dummyData = [
    {
      id: 1,
      location: "Manveers kitchen/Forget me not Dhawalkhazan Agonda",
      private_govt: "private",
      owner: "Manveer Singh",
      contact: "8806754026",
      status: "working",
    },
    {
      id: 2,
      location: "Manveers kitchen/Forget me not Dhawalkhazan Agonda",
      private_govt: "private",
      owner: "Manveer Singh",
      contact: "8806754026",
      status: "working",
    },
    {
      id: 3,
      location: "Manveers kitchen/Forget me not Dhawalkhazan Agonda",
      private_govt: "private",
      owner: "Manveer Singh",
      contact: "8806754026",
      status: "working",
    },
  ]
  const [pagingEnabled, setPagingEnabled] = useState(true)
  const width = Dimensions.get('window').width
  // const renderItem = ({item}) => {
  //   <Card
  //     style={{
  //       minHeight: "34%",
  //       minWidth: "80%"
  //     }}
  //   >
  //     <Card.Content>
  //       <Text variant="titleMedium" style={styles.text}>{item.location}</Text>
  //       <Text variant="bodyLarge" style={styles.text}>{item.private_govt}</Text>
  //       <Text variant="bodyLarge" style={styles.text}>{item.owner}</Text>
  //       <Text variant="bodyLarge" style={styles.text}>{item.contact}</Text>
  //       <Text variant="bodyLarge" style={styles.text}>{item.status}</Text>
  //     </Card.Content>
  //   </Card>
  // }

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
          paddingHorizontal: 15,
        }
      ]
      }
    >
      <Searchbar
        placeholder='Search'
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
        style={{
          marginVertical: 10
        }}
      />
      <View
        style={{
          flex: 0.6,
          backgroundColor: theme.colors.secondaryContainer,
          minWidth: '100%',
          borderRadius: 15,
          alignItems: 'center',
          marginVertical: 5,
        }}
      >
        <Text>Map View</Text>
      </View>
      {/* <View
        style={{
          flex: 0.4,
          backgroundColor: theme.colors.secondaryContainer,
          minWidth: '100%',
          borderRadius: 15,
          alignItems: 'center',
          marginVertical: 5,
          padding: 10
        }}
      >
      </View> */}
      <View
        style={{
          flex: 0.4,
          backgroundColor: theme.colors.secondaryContainer,
          minWidth: "100%",
          marginTop: 5,
          marginBottom: 10,
          alignSelf: "center",
          marginRight: 30,
          marginLeft: 30,
          borderRadius: 15,

          // marginLeft: 30,
        }}
      >
        <CameraCarousel />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})
