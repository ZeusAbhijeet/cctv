import { Text, useTheme, TextInput, RadioButton, } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import React from 'react';
import { Appbar, Avatar } from 'react-native-paper';
import { useState } from "react";
import UserInfo from "../components/UserInfo";

function handleConfirm() {
  return(
    <>
    </>
  )
}

function Radio_Button({ title, label1, label2, value, setFunction }) {
  return (
    <View
      style={{ display: "flex", alignItems: "start", paddingHorizontal: 12 }}
    >
      <Text
        variant='titleMedium'
        style={{
          color: "#666666",
          fontSize: 18,
          paddingTop: 10
        }}
      >{title}</Text>
      <RadioButton.Group onValueChange={newValue => setFunction(newValue)} value={value}>
        <View style={{ flexDirection: "row", paddingVertical: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text variant="bodyLarge" style={{ fontSize: 18 }}>{label1}</Text>
            <RadioButton value={label1} />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text variant="bodyLarge" style={{ fontSize: 18 }}>{label2}</Text>
            <RadioButton value={label2} />
          </View>
        </View>
      </RadioButton.Group>
    </View>
  );
}
function Text_Input({ label, value, setFunction }) {
  return (
    <TextInput
      style={{
        margin: 10
      }}
      mode='outlined'
      label={label}
      value={value}
      onChangeText={value => setFunction(value)}
    />
  );
}

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
          <Avatar.Icon size={64} icon="account" style={{ backgroundColor: "#545454" }} color="white" />
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
      {/* <Appbar.Header>
        <Appbar.BackAction onPress={() => { }} />
        <Appbar.Content title="Ticket" />
      </Appbar.Header>
      <ScrollView>
        <Text variant="titleLarge" style={{ paddingHorizontal: 10 }}>Enter Camera Details:</Text>
        <Text_Input label="Location" value={cameraLocation} setFunction={setCameraLocation} />
        <Text_Input label="Private/Govt" value={cameraPrivateGovt} setFunction={setCameraPrivateGovt} />
        <Text_Input label="Owner" value={cameraOwner} setFunction={setCameraOwner} />
        <Text_Input label="Contact No" value={cameraContactNo} setFunction={setCameraContactNo} />
        <Text_Input label="Latitude" value={cameraLatitude} setFunction={setCameraLatitude} />
        <Text_Input label="Longitude" value={cameraLongitude} setFunction={setCameraLongitude} />
        <Text_Input label="Coverage" value={cameraCoverage} setFunction={setCameraCoverage} />
        <Text_Input label="Backup" value={cameraBackup} setFunction={setCameraBackup} />
        <Radio_Button title={"Connected:"} label1={"Yes"} label2={"No"} value={cameraConnected} setFunction={setCameraConnected} />
        <Radio_Button title={"Status:"} label1={"Working"} label2={"Not Working"} value={cameraStatus} setFunction={setCameraStatus} />
        <View
          style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", paddingVertical: 20 }}
        >
          <Button
            icon="check"
            mode="contained"
            onPress={handleConfirm}
            contentStyle={{ paddingVertical: 2 }}
            labelStyle={{ fontSize: 16 }}
            style={{ minWidth: 150 }}
          >
            Confirm
          </Button>
          <Button
            icon="close"
            mode="outlined"
            onPress={handleClear}
            contentStyle={{ paddingVertical: 2 }}
            labelStyle={{ fontSize: 16 }}
            style={{ minWidth: 150 }}
          >
            Clear
          </Button>
        </View>
      </ScrollView> */}
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
