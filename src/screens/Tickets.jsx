import { ScrollView } from "react-native-gesture-handler";
import { Text, TextInput, RadioButton, Button } from "react-native-paper";
import { View } from "react-native";
import { useState } from "react";
import React from 'react';

function handleConfirm() {
    return (
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

export default function Tickets() {
    const [cameraLocation, setCameraLocation] = useState("");
    const [cameraPrivateGovt, setCameraPrivateGovt] = useState("");
    const [cameraOwner, setCameraOwner] = useState("");
    const [cameraContactNo, setCameraContactNo] = useState("");
    const [cameraLatitude, setCameraLatitude] = useState("");
    const [cameraLongitude, setCameraLongitude] = useState("");
    const [cameraCoverage, setCameraCoverage] = useState("");
    const [cameraBackup, setCameraBackup] = useState("");
    const [cameraConnected, setCameraConnected] = useState("");
    const [cameraStatus, setCameraStatus] = useState("");

    const handleClear = () => {
        setCameraLocation("");
        setCameraPrivateGovt("");
        setCameraOwner("");
        setCameraContactNo("");
        setCameraLatitude("");
        setCameraLongitude("");
        setCameraCoverage("");
        setCameraBackup("");
        setCameraConnected("");
        setCameraStatus("");
    }

    return (
        <>
            <Appbar.Header>
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
            </ScrollView>
        </>
    );
}