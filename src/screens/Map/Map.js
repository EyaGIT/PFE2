import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  TouchableOpacity,
  View,
  PermissionsAndroid,
  ToastAndroid,
  Dimensions,
} from 'react-native';
import mark from "../../../assets/images/Groupmark.png";
import mark2 from "../../../assets/images/mark2.png";
import loc from "../../../assets/images/loc.png";
import star from "../../../assets/images/Star.png";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { getSellingPointsNearPosition } from '../../api/user_api';
const CustomMarkerCallout = ({ marker }) => (
  <View style={styles.markerCalloutContainer}>
    <View style={styles.markerCallout}>
    <Image source={star} style={{ width: 16, height: 16 }} />
      <Text style={styles.markerDescription}>{marker.sellingPoint.chain_id.chain_name}</Text>
    </View>
  </View>
);
const ShopMapScreen = ({ userLocation, shops }) => {
  const [selectedMarker, setSelectedMarker] = useState(null);

  return (
    <View style={styles.container}>
      {userLocation && (
        <MapView style={styles.map} initialRegion={userLocation}>
          {/* Display the user's location marker */}
          <Marker coordinate={userLocation} image={mark} />

          {/* Display the nearby shop location markers */}
          {shops.map((shop,index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: shop.sellingPoint.location.coordinates[1],
                longitude: shop.sellingPoint.location.coordinates[0],
              }}
              image={mark2}
              title={shop.sellingPoint.chain_id.chain_name}
              description={shop.sellingPoint.sp_name}
              onPress={() => setSelectedMarker(shop)}
            >
              {/* Custom marker callout */}
              {selectedMarker && selectedMarker._id === shop._id && (
                <CustomMarkerCallout marker={selectedMarker} />
              )}
            </Marker>
          ))}

        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  map: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
  },
  markerCalloutContainer: {
    position: 'absolute',
    bottom: 16, // Adjust the positioning as per your requirement
    left: 16,
    right: 16,
    alignItems: 'center',
  },
  markerCallout: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  markerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  markerDescription: {
    fontSize: 14,
  },
});

const Map = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [shops, setShops] = useState([]);

  useEffect(() => {
    // Get the user's current location
    async function requestLocationPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location to display nearby shops.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Get the user's current location
          Geolocation.getCurrentPosition(
            position => {
              setUserLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
              });
            },
            error => console.log(error),
            { enableHighAccuracy: false, timeout: 30000, maximumAge: 1000 }
          );
        } else {
          ToastAndroid.show('Please enable location services to use this feature', ToastAndroid.SHORT);
        }
      } catch (error) {
        console.log(error);
      }
    }
    requestLocationPermission();

    // Fetch the nearby shop locations from an API or database
    if (userLocation) {
      getSellingPointsNearPosition({ latitude: userLocation.latitude, longitude: userLocation.longitude })
        .then((response) => {
          setShops(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userLocation]);

  return (
    <SafeAreaView>
      <StatusBar />
      <View style={{ width: '100%', height: 350 }}>
        <ShopMapScreen userLocation={userLocation} shops={shops} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ height: 330 }}>
        <View style={{ alignItems: 'center', flex: 1 }}>
          {shops.map((item, index) => (
            <React.Fragment key={index}>
              <TouchableOpacity style={{ justifyContent: 'center', width: '100%', height: 80, flexDirection: 'row', alignItems: "center" }}>
                <View><Image source={loc} style={{ width: 56, height: 56 }} /></View>
                <View style={{ justifyContent: 'flex-start', width: 200, paddingLeft: 10 }}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>{item.sellingPoint.sp_name}</Text>
                  <Text>{item.sellingPoint.chain_id.chain_name}</Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'flex-start' }}>
                    <Image source={star} style={{ width: 16, height: 16 }} />
                    <Image source={star} style={{ width: 16, height: 16 }} />
                    <Image source={star} style={{ width: 16, height: 16 }} />
                    <Image source={star} style={{ width: 16, height: 16 }} />
                    <Image source={star} style={{ width: 16, height: 16 }} />
                  </View>
                  <Text>{item.distance} km</Text>
                </View>
              </TouchableOpacity>
              <View style={{ width: '85%', borderWidth: 0.5, marginTop: 10, marginBottom: 10, borderColor: '#C0C6CD' }} />
            </React.Fragment>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Map;
