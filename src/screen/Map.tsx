import React, { useState, useRef, useEffect } from 'react';
import MapView, { Circle, Marker } from 'react-native-maps';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';

const Map = ( {navigation} ) => {
    const [cord, setcord] = useState({
        pickupCords: {
            latitude: 25.4358,
            longitude: 81.8463,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        dropCords: {
            latitude: 30.4358,
            longitude: 75.8463,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    })

    const { pickupCords, dropCords } = cord;
    const mapRef = useRef<MapView | null>(null);

    const onPressLocation = () => {
        navigation.navigate('Choose Location')
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.mapContainer}>
                <MapView
                    ref={mapRef}
                    provider="google"
                    // style={styles.map}
                    style={StyleSheet.absoluteFill}
                    initialRegion={pickupCords}
                >
                    <MapViewDirections
                        origin={pickupCords}
                        destination={dropCords}
                        apikey={'Orignal_API_key'}
                        strokeWidth={3}
                        strokeColor='black'
                        optimizeWaypoints={true}
                        onReady={result => {
                            mapRef.current?.fitToCoordinates(result.coordinates, {
                                edgePadding: {
                                    left: 30,
                                    bottom: 300,
                                    right: 30,
                                    top: 100
                                }
                            })
                        }}
                    />
                    <Marker
                        coordinate={
                            pickupCords
                        }
                    >
                        <Image
                            source={require('../assets/mapImages/currentLocation.png')}
                            style={styles.markerImage}
                        />
                    </Marker>
                    <Marker
                        coordinate={
                            dropCords
                        }
                    >
                        <Image
                            source={require('../assets/mapImages/dropLocation.png')}
                            style={styles.markerImage}
                        />
                    </Marker>
                </MapView>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.text}>
                    Where are you going?
                </Text>
                <TouchableOpacity 
                style={styles.bottomCard}
                onPress={onPressLocation}
                >
                    <Text style={{fontWeight: 'bold', textAlign: 'center'}}>Choose your Location</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Map

const styles = StyleSheet.create({
    mapContainer: {
        width: '100%',
        height: '88%',
    },
    markerImage: {
        height: 50,
        width: 50
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingTop: 7,
        paddingBottom: 7,
    },
    bottomCard: {
        borderColor: 'black',
        backgroundColor: 'black',
        width: '100%',
        height: 50,
        paddingTop: 15,
        borderTopEndRadius: 24,
        borderTopStartRadius: 24
    }
})
