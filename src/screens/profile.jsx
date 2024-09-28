import { Text, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react';
import { Appbar, Avatar } from 'react-native-paper';
import { useState } from "react";
import UserInfo from "../components/UserInfo";
import CameraInfo from "../components/CameraInfo";

export default function Profile() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [userName, setUserName] = useState("John Doe");
  const [officerId, setOfficerId] = useState("1234");

  return (
    <>
    <Appbar.Header>
      <Appbar.BackAction onPress={() => { }} />
      <Appbar.Content title="Profile" />
    </Appbar.Header>
    <View
      style={{
        display: "flex",
        alignItems: "center"
      }}
    >
    <View
      style={{
        paddingTop: 20
      }}
    >
    <Avatar.Icon size={64} icon="account" style={{backgroundColor: "#545454"}} color="white" />
    </View>
    <Text
      variant="headlineMedium"
      style={{
        paddingTop: 20
      }}
    >{userName}</Text>
    </View>
    <View
      style={{
        paddingTop: 10,
        paddingStart: 18
      }}
    >
    <UserInfo title={"OFFICER ID"} info={"1234#"} />
    <UserInfo title={"EMAIL"} info={"johndoe@gmail.com"} />
    <UserInfo title={"PHONE"} info={"9999999999"} />
    <UserInfo title={"RANK"} info={"DGP"} />
    </View>
    <Appbar.Header>
      <Appbar.BackAction onPress={() => { }} />
      <Appbar.Content title="CCTV" />
    </Appbar.Header>
    <View
      style={{
        flex: 1,
        padding: 10
      }}
    >
    <CameraInfo title={"LOCATION"} value={"Compu World Chaudi"} />
    <CameraInfo title={"PRIVATE/GOVT"} value={"Compu World Chaudi"} />
    <CameraInfo title={"OWNER"} value={"Ronaldo Fernandes"} />
    <CameraInfo title={"CONTACT"} value={"9422576040"} />
    <CameraInfo title={"LATITUDE"} value={"15.008483"} />
    <CameraInfo title={"LONGITUDE"} value={"74.042655"} />
    <CameraInfo title={"COVERAGE"} value={"Road side"} />
    <CameraInfo title={"BACKUP"} value={"15days"} />
    <CameraInfo title={"CONNECTED"} value={"No"} />
    <CameraInfo title={"STATUS"} value={"working"} />
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
