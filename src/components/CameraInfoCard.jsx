import { View, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";
import React from "react";

export default function CameraInfoCard({ cameraLocation, cameraClass, cameraOwner, cameraContactNo, cameraStatus }) {
    return (
        <>
            <Card
                style={{
                    width: "100%",
                    height: 255
                }}
            >
                <Card.Content>
                    <Text variant="titleMedium" style={styles.text}>{cameraLocation}</Text>
                    <Text variant="bodyLarge" style={styles.text}>{cameraClass}</Text>
                    <Text variant="bodyLarge" style={styles.text}>{cameraOwner}</Text>
                    <Text variant="bodyLarge" style={styles.text}>{cameraContactNo}</Text>
                    <Text variant="bodyLarge" style={styles.text}>{cameraStatus}</Text>
                </Card.Content>
            </Card>
        </>
    );
}

const styles = StyleSheet.create({
    text: {
        paddingTop: 8
    }

})