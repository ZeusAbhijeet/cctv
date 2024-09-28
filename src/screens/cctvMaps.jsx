import { Searchbar, useTheme, SegmentedButtons} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, ToastAndroid, Platform, PermissionsAndroid } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CameraCarousel from "../components/CameraCarousel";
import {useEffect, useRef, useState} from "react";
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
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
  const [selectedRadius, setSelectedRadius] = useState(250);

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
 
  const staticMarkers = [
    { coordinates: { latitude: 15.048392, longitude: 73.985453 } },
    { coordinates: { latitude: 15.04798, longitude: 73.985574 } },
    { coordinates: { latitude: 15.047951, longitude: 73.985535 } },
  ]

  const radius = [
    {label: "250m", value: 250},
    {label: "500m", value: 500},
    {label: "1km", value: 1000},
    {label: "1.5km", value: 1500},
  ]

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
      {/* <Searchbar
        placeholder='Search'
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
        style={{
          marginVertical: 10
        }}
      /> */}
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
        <SegmentedButtons
          value={selectedRadius}
          onValueChange={setSelectedRadius}
          buttons={radius}
          style={{
            marginBottom: 15,
            marginHorizontal: 10,
          }}
        />
        <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
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
            opacity: 100,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: 0,
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
