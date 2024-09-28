import { Text, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react';
import { Appbar, Avatar } from 'react-native-paper';
import { useState } from "react";
import UserInfo from "./components/UserInfo";

export default function Profile() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [userName, setUserName] = useState("John Doe");
  const [officerId, setOfficerId] = useState("1234");

  return (
    // <SafeAreaView
    //   style={[
    //     styles.container,
    //     {
    //       backgroundColor: theme.colors.background,
    //       paddingHorizontal: 15,
    //     }
    //   ]
    //   }
    // >

    // </SafeAreaView>
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
