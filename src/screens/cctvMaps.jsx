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

  const fetchNearestCameraLocations = async () => {
    const uri = "http://10.70.13.203:8080/nearby_cameras";

    try {
      const response = await axios.post(uri, {
        latitude: region.latitude,
        longitude: region.longitude,
        radius_meters: selectedRadius,
      });

      if (Array.isArray(response.data)) {
        const newCameraMarkers = response.data.map(camera => ({
          id: camera.id,
          coordinate: {
            latitude: parseFloat(camera.latitude) || 0,
            longitude: parseFloat(camera.longitude) || 0,
          },
          title: camera.location || "Camera",
          description: `Owner: ${camera.owner_name || 'Unknown'}, Status: ${camera.status || 'Unknown'}`,
          privateGovt: camera.private_govt || 'Unknown',
          contactNo: camera.contact_no || 'Unknown',
          coverage: camera.coverage || 'Unknown',
          backup: camera.backup || 'Unknown',
          connectedNetwork: camera.connected_network || 'Unknown',
          cameraId: camera.camera_id || 'Unknown',
          distance: camera.distance || 0,
        }));

        setCameraMarkers(newCameraMarkers);
        return newCameraMarkers;
      } else {
        throw new Error('Expected array response, got ' + typeof response.data);
      }
    } catch (error) {
      console.error("Error fetching camera locations:", error);

      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);

        if (error.response.status === 422) {
          ToastAndroid.show("Invalid request. Please try again.", ToastAndroid.SHORT);
        } else {
          ToastAndroid.show(`Server error: ${error.response.status}`, ToastAndroid.SHORT);
        }
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
        ToastAndroid.show("No response from server", ToastAndroid.SHORT);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up request:", error.message);
        ToastAndroid.show("Error setting up request", ToastAndroid.SHORT);
      }

      Alert.alert("Error", "Error fetching camera locations:\n" + error.message);
      throw error;
    }
  };


  const focusMarker = (index) => {
    if (mapRef.current && cameraMarkers[index]) {
      mapRef.current.animateToRegion({
        latitude: cameraMarkers[index].coordinate.latitude,
        longitude: cameraMarkers[index].coordinate.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }, 1000);
    }
  };

  const handleMarkerPress = (index) => {
    setSelectedMarkerIndex(index);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ index: index });
    }
  };

  const handleMapRegionChange = useCallback((newRegion) => {
    const visibleMarkers = cameraMarkers.filter(marker =>
      marker.coordinate.latitude >= newRegion.latitude - newRegion.latitudeDelta / 2 &&
      marker.coordinate.latitude <= newRegion.latitude + newRegion.latitudeDelta / 2 &&
      marker.coordinate.longitude >= newRegion.longitude - newRegion.longitudeDelta / 2 &&
      marker.coordinate.longitude <= newRegion.longitude + newRegion.longitudeDelta / 2
    );
    setVisibleMarkers(visibleMarkers);
  }, [cameraMarkers]);

  const renderCarouselItem = useCallback(({ item }) => (
    <CameraInfoCard
      cameraLocation={item.title}
      cameraClass={item.privateGovt}
      cameraOwner={item.description.split(',')[0].split(': ')[1]}
      cameraContactNo={item.contactNo}
      cameraStatus={item.description.split(',')[1].split(': ')[1]}
      allData={item}
    />
  ), []);

  const memoizedMarkers = useMemo(() =>
      visibleMarkers.map((marker, index) => (
        <Marker
          coordinate={marker.coordinate}
          key={marker.id || index}
          onPress={() => handleMarkerPress(cameraMarkers.indexOf(marker))}
          pinColor="blue"
        />
      )),
    [visibleMarkers, handleMarkerPress]
  );


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
          toolbarEnabled={false}
        >
          {originMarker && (
            <>
              <Marker
                coordinate={originMarker}
                pinColor="red"
                title="Origin"
                description="Center of search radius"
              />
              <Circle
                center={originMarker}
                radius={selectedRadius}
                strokeColor="rgba(255, 0, 0, 0.5)"
                fillColor="rgba(255, 0, 0, 0.1)"
              />
            </>
          )}
          {cameraMarkers.map((marker, index) => (
            <Marker
              coordinate={marker.coordinate}
              key={index}
              onPress={() => handleMarkerPress(index)}
              pinColor="blue"
            />
          ))}
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
