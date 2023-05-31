import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, View, Text, ScrollView, ActivityIndicator, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getHistory } from '../../api/user_api';
import Historydetails from '../../components/Historydetails/Historydetails';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL } from '@env';

const screenWidth = Dimensions.get('window').width;

const History = () => {
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);
  const [endReached, setEndReached] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitleAlign: 'center',
      headerTitleStyle: {
        alignSelf: 'center',
        color: 'white',
        height: '100%',
        fontSize: 27,
        fontWeight: '400',
        marginTop: 54,
      },
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const handleCloseModal = useCallback(() => {
    setVisibleItems([]);
  }, []);

  const handleItemPress = useCallback((item) => {
    const updatedVisibleItems = [...visibleItems];
    updatedVisibleItems[item.id] = true;
    setVisibleItems(updatedVisibleItems);
  }, [visibleItems]);

  const fetchData = useCallback(() => {
    setLoading(true);
    AsyncStorage.getItem('AccessToken')
      .then((token) => {
        getHistory(page, 10, token)
          .then((result) => {
            if (result.status === 200) {
              const newData = result.data;
              setHistoryData((prevData) => [...prevData, ...newData]);
              setLoading(false);
              setEndReached(false); // Reset endReached flag after successful data fetch
            }
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [page]);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    setPage(1);
    setHistoryData([]);
    fetchData();
    setRefreshing(false);
  }, [fetchData]);

  const handleScroll = useCallback(
    (event) => {
      const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
      const isCloseToBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - 50;

      if (isCloseToBottom && !endReached) {
        setEndReached(true);
        setPage((prevPage) => prevPage + 1);
      }
    },
    [endReached]
  );

  useEffect(() => {
    if (endReached) {
      fetchData();
    }
  }, [endReached]);

  useEffect(() => {
    if (page > 1) {
      fetchData();
    }
  }, [page]);

  if (loading && page === 1) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#FFFFFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView onScroll={handleScroll} showsVerticalScrollIndicator={false} style={{ marginBottom: 10, marginTop: 80 }}>
        {historyData.map((item, index) => {
          if (item.type === 'payment') {
            return (
              <TouchableOpacity key={index} onPress={() => handleItemPress(item)}>
                <View style={{ width: screenWidth, paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 10, paddingRight: 10 }}>
                  <View style={{ flex: 1, width: '25%', alignItems: 'center' }}>
                    <Image source={{ uri: API_BASE_URL + '/uploads/' + item.sellingPoint.chain_id.chain_image }} style={{ width: 70, height: 70,borderRadius:70/2, aspectRatio: 1, resizeMode: 'contain', marginRight: 10 }} />
                  </View>
                  <View style={{ flex: 2, flexDirection: 'column', justifyContent: 'flex-start' }}>
                    {item.sellingPoint && <Text style={{ fontSize: 17, fontWeight: '500' }}>{item.sellingPoint.sp_name}</Text>}
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ color: '#6D7580', paddingTop: 5 }}>{new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })} |</Text>
                      <Text style={{ color: '#6D7580', paddingTop: 5 }}> {new Date(item.date).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</Text>
                    </View>
                  </View>
                  <View style={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Text style={{ color: 'red', fontWeight: '700', alignSelf: 'flex-end' }}> - {item.amount} TND</Text>
                    <View style={{ flexDirection: 'row', paddingTop: 5 }} >
                      <Image source={item.expense} style={{ width: 20, aspectRatio: 1, resizeMode: 'contain', marginRight: 2 }} />
                      <Text style={{}}>Expense</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }
          if (item.type === 'transfer') {
            return (
              <TouchableOpacity key={index} onPress={() => handleItemPress(item)}>
                <View style={{ width: screenWidth, paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 10, paddingRight: 10 }}>
                  <View style={{ flex: 1, width: '25%', alignItems: 'center' }}>
                    <Image source={{ uri: item.braceletReceiver ? API_BASE_URL + '/uploads/' + item.braceletReceiver.user.image : item.image }} style={{ width: 70, height: 70, aspectRatio: 1, resizeMode: 'contain', marginRight: 10, borderRadius: 70 / 2 }} />
                  </View>
                  <View style={{ flex: 2, flexDirection: 'column', justifyContent: 'flex-start' }}>
                    {item.braceletReceiver && (<Text style={{ fontSize: 17, fontWeight: '500' }}>Send to {item.braceletReceiver.user.firstName}</Text>)}
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ color: '#6D7580', paddingTop: 5 }}>{new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })} |</Text>
                      <Text style={{ color: '#6D7580', paddingTop: 5 }}> {new Date(item.date).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</Text>
                    </View>
                  </View>
                  <View style={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Text style={{ color: 'red', fontWeight: '700', alignSelf: 'flex-end' }}> - {item.amount} TND</Text>
                    <View style={{ flexDirection: 'row', paddingTop: 5 }} >
                      <Image source={item.expense} style={{ width: 20, aspectRatio: 1, resizeMode: 'contain', marginRight: 2 }} />
                      <Text style={{}}>Transfer</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }
          if (item.type === 'receive') {
            return (
              <TouchableOpacity key={index} onPress={() => handleItemPress(item)}>
                <View style={{ width: screenWidth, paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 10, paddingRight: 10 }}>
                  <View style={{ flex: 1, width: '25%', alignItems: 'center' }}>
                    <Image source={{ uri: API_BASE_URL + '/uploads/' + item.bracelet.user.image }} style={{ width: 70, height: 70, aspectRatio: 1, resizeMode: 'contain', marginRight: 10 ,borderRadius:70/2}} />
                  </View>
                  <View style={{ flex: 2, flexDirection: 'column', justifyContent: 'flex-start' }}>
                    <Text style={{ fontSize: 17, fontWeight: '500' }}>You Receive from {item.bracelet.user.firstName}</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ color: '#6D7580', paddingTop: 5 }}>{new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })} |</Text>
                      <Text style={{ color: '#6D7580', paddingTop: 5 }}> {new Date(item.date).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</Text>
                    </View>
                  </View>
                  <View style={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Text style={{ color: 'green', fontWeight: '700', alignSelf: 'flex-end' }}> + {item.amount} TND</Text>
                    <View style={{ flexDirection: 'row', paddingTop: 5 }} >
                      <Image source={item.expense} style={{ width: 20, aspectRatio: 1, resizeMode: 'contain', marginRight: 2 }} />
                      <Text style={{}}>Transfer</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }
          return null;
        })}
        {loading && page > 1 && (
          <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingVertical: 5, marginBottom: 75 }}>
            <ActivityIndicator size="large" color="red" />
          </View>
        )}
      </ScrollView>
      {visibleItems.map((visible, index) => (
        <Historydetails key={index} isVisible={visible} onClose={handleCloseModal} item={historyData[index]} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
});

export default History;
