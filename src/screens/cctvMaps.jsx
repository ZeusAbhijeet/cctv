import {Chip, Searchbar, Text, useTheme} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import {View, StyleSheet, TextInput, ScrollView, FlatList, ToastAndroid} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {useState} from "react";
import MapLibreGL from '@maplibre/maplibre-react-native';
import MapView, {Marker} from "react-native-maps";

export default function CctvMaps() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");

  const staticMarkers = [
    { coordinates: { latitude: 15.048392, longitude: 73.985453 } },
    { coordinates: { latitude: 15.04798, longitude: 73.985574 } },
    { coordinates: { latitude: 15.047951, longitude: 73.985535 } },
  ]

  const radius = [
    {name: "250m", value: 250},
    {name: "500m", value: 500},
    {name: "1km", value: 1000},
    {name: "1.5km", value: 1500},
  ]

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
        }
        ]
    }
    >

      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.secondaryContainer,
          minWidth: '100%',
          borderRadius: 15,
          justifyContent: 'center',
          marginVertical: 5,
        }}
      >
        <MapView
          initialRegion={{
            latitude: 15.048392,
            longitude: 73.985453,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{
            flex: 1,
            alignSelf: 'stretch',
            borderRadius: 15
          }}
          userInterfaceStyle={theme.dark ? 'dark' : 'light'}
          showsUserLocation={true}

        >
          { staticMarkers.map((item, index) => (
            <Marker coordinate={item.coordinates} key={index} title="Test" />
          )) }
        </MapView>
        {/*<Searchbar
          placeholder='Search'
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
          style={{
            position: 'absolute',
            top: 5,
            marginHorizontal: 10,
          }}
        />*/}
        <FlatList
          horizontal={true}
          style={{position: 'absolute', top: 15, marginLeft: 15}}
          data={radius}
          renderItem={({item, index}) => {
            return (
              <Chip
                key={index}
                mode='outlined'
                height={30}
                style={{backgroundColor: theme.colors.background}}
                onPress={() => {ToastAndroid.show("Radius selected: " + item.value, ToastAndroid.SHORT)}}
                showSelectedCheck={true}
              >
                {item.name}
              </Chip>
            )
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={{minWidth: 5}} />
            )
          }}
        ></FlatList>
        <View
          style={{
            backgroundColor: theme.colors.backdrop,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: 30,
            height: 250,
            minWidth: '95%',
            marginHorizontal: 10
          }}
        >

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
})
