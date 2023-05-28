import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Dimensions, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import PieChart from 'react-native-pie-chart';
import Income from '../../../assets/images/icons/Income.png';
import Expense from '../../../assets/images/icons/Expense.png';
import arrow from '../../../assets/images/icons/ArrowBack.png';
import { stat } from '../../api/user_api';
import { useNavigation } from '@react-navigation/native'

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Statistics = ({ userInfo }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    console.log(userInfo.bracelets[0]._id, 'fffff');
    stat({ braceletId: userInfo.bracelets[0]._id }).then((result) => {
      if (result.status === 200) {
        console.log(result.data);
        setChartData(result.data);
      }
    });

    return () => {};
  }, []);

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

  const widthAndHeight = 250;
  const series = chartData.map((item) => item.totalAmount);
const sumOfSeries = series.reduce((total, amount) => total + amount, 0);

let updatedSeries = series;
if (sumOfSeries === 0) {
  updatedSeries = [1, 1, 1];
}
  const sliceColor = ['#fbd203', '#FA797D', '#6194FE'];

  return (
    <LinearGradient
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0, 0.6]}
      colors={['#E20522', '#000000']}
      style={styles.linearGradient}
    >
      <SafeAreaView style={styles.SafeAreaView}>
        <StatusBar barStyle="light-content" backgroundColor={'transparent'} translucent={true} />

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={{ textAlign: 'center', fontSize: 25, color: '#FFFFFF', height: 100 }}></View>
          <View></View>

          <View style={styles.body}>
            <View style={styles.container1}>
              <View style={{ height: 300, paddingTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                <PieChart
                  widthAndHeight={widthAndHeight}
                  series={series}
                  sliceColor={sliceColor}
                  coverRadius={0.45}
                  coverFill={'#FFF'}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  width: '70%',
                  alignSelf: 'flex-start',
                  justifyContent: 'space-between',
                  marginLeft: 10,
                }}
              >
                {chartData.map((item, index) => (
                  <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View
                      style={{
                        width: 18,
                        height: 18,
                        backgroundColor: sliceColor[index],
                        borderRadius: 18 / 2,
                        marginRight: 10,
                      }}
                    ></View>
                    <Text>{item.category}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    width: screenWidth,
    height: screenHeight,
  },
  flex: { alignItems: 'center', justifyContent: 'center' },

  linearGradient: {
    flex: 1,
  },
  SafeAreaView: {
    flex: 1,
  },
  container1: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    margin: 10,
  },

  body: {
    paddingtop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    zIndex: 2,
    backgroundColor: '#FBFBFB',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    flex: 2,
    minHeight: screenHeight - 70,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  stepIndicator: {
    marginVertical: 50,
    position: 'absolute',
    width: screenWidth,
    top: -70,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepLabel: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#999999',
  },
  stepLabelSelected: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#E20522',
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
    paddingTop: 10,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
});

export default Statistics;
