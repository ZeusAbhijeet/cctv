import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import CameraInfoCard from './CameraInfoCard';

export default function CameraCarousel() {
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

    const width = Dimensions.get('window').width;
    return (
        <View>
            <Carousel
                width={width}
                height={width * 0.75}
                data={dummyData}
                loop={false}
                pagingEnabled={true}
                // scrollAnimationDuration={0}
                onSnapToItem={(index) => console.log('current index:', index)}
                mode='parallax'
                renderItem={({ item }) => (
                    <CameraInfoCard cameraLocation={item.location} cameraClass={item.private_govt} cameraOwner={item.owner} cameraContactNo={item.contact} cameraStatus={item.status} />
                )}
            />
        </View>
    )

}