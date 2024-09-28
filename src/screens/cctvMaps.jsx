import { Searchbar, Chip, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Dimensions, FlatList, ToastAndroid, Platform, PermissionsAndroid } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CameraCarousel from "./components/CameraCarousel";
import {useEffect, useRef, useState} from "react";
import MapView, {Marker} from "react-native-maps";
import {fromAddress} from "react-geocode";
import Geolocation from '@react-native-community/geolocation'

export default function CctvMaps() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [region, setRegion] = useState({
    latitude: 15.048392,
    longitude: 73.985453,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const radius = [
    {name: "250m", value: 250},
    {name: "500m", value: 500},
    {name: "1km", value: 1000},
    {name: "1.5km", value: 1500},
  ]
  const staticMarkers = [
    { coordinates: { latitude: 15.048392, longitude: 73.985453 } },
    { coordinates: { latitude: 15.04798, longitude: 73.985574 } },
    { coordinates: { latitude: 15.047951, longitude: 73.985535 } },
  ]
  const mapRef = useRef(null);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      getOneTimeLocation();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Required',
            message: 'This app needs to access your location',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getOneTimeLocation();
        } else {
          ToastAndroid.show('Permission Denied', ToastAndroid.SHORT);
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const getOneTimeLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const currentLongitude = position.coords.longitude;
        const currentLatitude = position.coords.latitude;
        setRegion({
          latitude: currentLatitude,
          longitude: currentLongitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      (error) => {
        ToastAndroid.show(error.message, ToastAndroid.SHORT);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000
      },
    );
  };

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

  function searchLocation() {
    fromAddress(searchQuery)
      .then(({results}) => {
        let newRegion = {
          latitude: results[0].geometry.location.lat,
          longitude: results[0].geometry.location.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }
        setRegion(newRegion);
        mapRef.current.animateToRegion(newRegion, 1000);
      })
      .catch(error => {
        console.error("Error in geocoding:", error);
        ToastAndroid.show("Error finding location", ToastAndroid.SHORT);
      });
  }

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
          flex: 1,
          backgroundColor: theme.colors.background,
          minWidth: '100%',
          borderRadius: 15,
          alignItems: 'center',
          marginVertical: 5,
        }}
      >
        <Searchbar
          placeholder='Search'
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
          style={{
            marginHorizontal: 10,
            marginVertical: 10,
          }}
          onSubmitEditing={searchLocation}
        />
        <FlatList
          horizontal={true}
          style={{marginLeft: 15, maxHeight: 40}}
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
              <View style={{minWidth: 5, maxHeight: 5}} />
            )
          }}
        ></FlatList>
        <MapView
          ref={mapRef}
          initialRegion={region}
          region={region}
          style={{
            flex: 1,
            alignSelf: 'stretch',
            borderRadius: 15
          }}
          userInterfaceStyle={theme.dark ? 'dark' : 'light'}
          showsUserLocation={true}
          loadingEnabled={true}
          loadingIndicatorColor={theme.colors.primary}
          loadingBackgroundColor={theme.colors.background}
        >
          { staticMarkers.map((item, index) => (
            <Marker coordinate={item.coordinates} key={index} title="Test" />
          )) }
        </MapView>

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
          <CameraCarousel />
        </View>
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
