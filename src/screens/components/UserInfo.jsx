import { Text } from "react-native-paper";
import { View } from "react-native";
import React from 'react';

export default function UserInfo({ title, info }) {
    return (
        <View
            style={{
                paddingTop: 20,
                // paddingStart: 10
            }}
        >
            <Text
                variant="lableLarge"
                style={{
                    color: "#A9A9A9",
                    fontWeight: "bold"
                }}
            >{title}</Text>
            <Text
                variant="titleLarge"
            >{info}</Text>
        </View>
    );
}