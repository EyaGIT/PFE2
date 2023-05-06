import React,{ useEffect, useState } from 'react';



import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,PermissionsAndroid,ToastAndroid,Dimensions ,
} from 'react-native';
import  mark  from "../../../assets/images/Groupmark.png";
import {
  Colors,
  
} from 'react-native/Libraries/NewAppScreen';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const ShopMapScreen = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [shops, setShops] = useState([]);
  
    useEffect(() => {
      // Get the user's current location
      async function requestLocationPermission() {
        try {
          console.log('test')
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
                console.log(position.coords.longitude,position.coords.latitude)
                setUserLocation({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                });
              },
              error => console.log(error),
              { enableHighAccuracy: false, timeout: 30000, maximumAge: 1000 }
            );
          } else {
            ToastAndroid.show('Please enable location services to use this feature', ToastAndroid.SHORT);
            console.log('Location permission denied',ToastAndroid.SHORT);
          }
        } catch (error) {
          console.log(error);
        }
      }
      requestLocationPermission();
  
      // Fetch the nearby shop locations from an API or database
      /*fetch('https://example.com/api/shops')
        .then((response) => response.json())
        .then((data) => setShops(data))
        .catch((error) => console.log("test",error));*/
    }, []);
  
    return (
      <View style={styles.container}>
        <Text style={{fontSize:30}}>Branches</Text>
        {userLocation && (
          <MapView
            style={styles.map}
            initialRegion={userLocation}
            
          >
            {/* Display the user's location marker */}
            <Marker coordinate={userLocation} image={mark} />
  
            {/* Display the nearby shop location markers */}
            {/*shops.map((shop) => (
              <Marker
                key={shop.id}
                coordinate={{
                  latitude: shop.latitude,
                  longitude: shop.longitude,
                }}
                title={shop.name}
                description={shop.description}
              />
              ))*/}
          </MapView>
        )}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:"center",
      alignItems:"center"
    },
    map: {
      flex: 1,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height/2,
    },
  });

  const Map = ()=>{
    return(
        <SafeAreaView >
        <StatusBar
          
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View>
            <ShopMapScreen></ShopMapScreen>
            <Text>tesssst</Text>
            
          </View>
        </ScrollView>
      </SafeAreaView>);
  }
  export default Map;