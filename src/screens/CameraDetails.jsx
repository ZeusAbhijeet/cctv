import {View, StyleSheet, Linking} from 'react-native';
import {Button, Card, Text, useTheme} from 'react-native-paper';
import {useRoute} from "@react-navigation/native";
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import React from "react";

export default function CameraDetails() {
  const theme = useTheme();
  const route = useRoute();

  const mapsLink = "https://www.google.com/maps/search/?api=1&query="+route.params.data.coordinate.latitude+"%2C"+route.params.data.coordinate.longitude;

  console.log(route.params.data);
  return (
    <View style={[styles.container, {backgroundColor: theme.colors.background}]}>
        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: route.params.data.coordinate.latitude,
            longitude: route.params.data.coordinate.longitude,
            latitudeDelta: 0.0130,
            longitudeDelta: 0.0060,
          }}
          style={{
            flex: 0.6,
            alignSelf: 'stretch',
            borderRadius: 15,
          }}
          scrollEnabled={false}
          zoomControl={false}
          pitchEnabled={false}
          zoomTapEnabled={false}
          rotateEnabled={false}
          toolbarEnabled={false}
        >
          <Marker
            coordinate={{
              latitude: route.params.data.coordinate.latitude,
              longitude: route.params.data.coordinate.longitude,
            }}
            pinColor="red"
          />
        </MapView>
        <Card style={{flex: 0.4, alignSelf: 'stretch'}} mode="elevated">
          <Card.Content>
            <Text variant="headlineMedium">{route.params.data.title}</Text>
            <Text variant="bodyMedium">{route.params.data.description}</Text>
            <Text variant="bodyMedium">Owner type: {route.params.data.privateGovt}</Text>
            <Text variant="bodyMedium">Contact No.: {route.params.data.contactNo}</Text>
            <Text variant="bodyMedium">Backup: {route.params.data.backup}</Text>
            <Text variant="bodyMedium">Coverage: {route.params.data.coverage}</Text>
            <Text variant="bodyMedium">Connected to Network: {route.params.data.connectedNetwork}</Text>
            <Text variant="bodyMedium">Arial Distance to camera: {Math.round((route.params.data.distance + Number.EPSILON) * 100) / 100}km</Text>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => {}}>Report</Button>
            <Button onPress={() => {Linking.openURL(mapsLink)}}>Open in Maps</Button>
          </Card.Actions>
        </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10
  }
})
