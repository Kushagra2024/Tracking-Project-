import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React from 'react';

import LottieView from "lottie-react-native";

import Swiper from 'react-native-swiper';

const Onboarding = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Swiper
                showsButtons={false}
                loop={false}
            >
                <View style={[styles.slide]}>
                    <View style={styles.img}>
                        <Image style={{ width: 360, height: 350 }} source={require('../assets/onboardingScreen/Search_Track_Bus.png')} />
                    </View>
                    <Text style={styles.heading}>Seamlessly Track and Search for Your Bus at Your Fingertips</Text>
                    <Text style={styles.subheading}>Effortlessly track buses in real-time and find them reliably, ensuring a stress-free commute.</Text>
                </View>
                <View style={[styles.slide]}>
                    <View style={styles.img}>
                        <Image style={{ width: 365, height: 570, resizeMode: "contain" }} source={require('../assets/onboardingScreen/occupancy.png')} />
                    </View>
                    <Text style={styles.heading}>Know Your Space: Real-Time Bus Occupancy Updates</Text>
                    <Text style={styles.subheading}>Stay informed about available seats and crowding levels for a comfortable journey.</Text>
                </View>
                <View style={[styles.slide]}>
                    <View style={styles.img}>
                        <Image style={{ width: 400, height: 400 }} source={require('../assets/onboardingScreen/bus-booking.png')} />
                    </View>
                    <Text style={styles.heading}>Go Paperless, Go Anywhere: Create Digital Tickets On-the-Go</Text>
                    <Text style={styles.subheading}>Generate electronic tickets effortlessly for a green and convenient travel experience.</Text>
                </View>
                <View style={[styles.slide]}>
                    <View style={styles.img}>
                        <Image style={{ width: 360, height: 400 }} source={require('../assets/onboardingScreen/e-pass.png')} />
                    </View>
                    <Text style={styles.heading}>Unlock Simplified Travel: Your Digital Bus Pass, Your Way</Text>
                    <Text style={styles.subheading}>Generate electronic pass effortlessly for a green and convenient travel experience.</Text>
                </View>
                <View style={[styles.slide]}>
                    <View style={styles.img}>
                        <Image style={{ width: 360, height: 550 }} source={require('../assets/onboardingScreen/Bus_notification.png')} />
                    </View>
                    <Text style={styles.heading}>Stay Informed, Stay Ahead: Personalized Bus Notifications</Text>
                    <Text style={styles.subheading}>Receive timely alerts for bus delays, route changes, and important reminders.</Text>
                    <View style={[styles.button]}>
                        <Button title='Go to Map'
                            style={styles.button}
                            onPress={() => {
                                navigation.navigate('Map')
                            }}
                        />
                    </View>
                </View>
            </Swiper>
            {/* <LottieView
                style={{ flex: 1 }}
                source={require("../assets/onboardingScreen/Splash Screen Animation.json")}
                autoPlay
            /> */}
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    slide: {
        flex: 1,
        backgroundColor: '#fff',
    },
    heading: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 20,
    },
    subheading: {
        color: '#000',
        fontSize: 20,
        flex: 1,
        textAlign: 'center',
        padding: 10,
    },
    img: {
        height: 350,
        width: 360,
        marginBottom: 30,
        backgroundColor: '#000'
    },
    button: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 100,
    }
})