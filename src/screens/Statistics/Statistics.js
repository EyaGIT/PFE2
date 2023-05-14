import { StyleSheet,View, Text,Image,TouchableOpacity,ScrollView,Dimensions,StatusBar,TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect ,useState, useRef} from 'react'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import  PieChart  from "react-native-pie-chart";
import Income from "../../../assets/images/icons/Income.png";
import Expense from "../../../assets/images/icons/Expense.png";
import arrow from '../../../assets/images/icons/ArrowBack.png'









const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Statistics = () => {
  
 
    const navigation=useNavigation();
    useLayoutEffect(()=>{
      navigation.setOptions({
        headerShown:true,
        headerTransparent:true,
        headerTitleAlign: 'center',
        headerTitleStyle: { alignSelf:'center',color: 'white' ,height:'100%',
        fontSize: 27,fontWeight:'400',marginTop:54},
        
      })
    }, [])
    const widthAndHeight = 250
    const series = [123, 123, 207]
    const sliceColor = ['#fbd203', '#FA797D', '#6194FE']
  return (
    <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 1}} locations={[0,0.6]} colors={['#E20522', '#000000']} style={styles.linearGradient}>
          
          <SafeAreaView style={styles.SafeAreaView}>
          <StatusBar barStyle="light-content" backgroundColor={'transparent'} translucent={true} />
            
          <ScrollView style={styles.scrollView}  showsVerticalScrollIndicator={false}>
          
         <View>
            <Text style={{textAlign: 'center',fontSize: 25,color:'#FFFFFF',paddingBottom:30,paddingTop:30}}>Statistics</Text>
            
        </View>      
     <View>


     </View>

          
      <View style={styles.body}>
      <View style={styles.container1}>
          <View>
            <Text style={styles.title}>Statistics Graph</Text>

          </View>


          <View style={{height:300}}>
            <PieChart
                widthAndHeight={widthAndHeight}
                series={series}
                sliceColor={sliceColor}
                coverRadius={0.45}
                coverFill={'#FFF'}
            />
          </View>

          <View style={{flexDirection:'row',width:'70%',alignSelf:'flex-start',justifyContent:'space-between',marginLeft:10}}>
            <View style={{flexDirection:'row',alignItems:'center'}}><View style={{width:18,height:18,backgroundColor:'#FA797D',borderRadius:18/2,marginRight:10}}></View><Text>Food</Text></View>
            <View style={{flexDirection:'row',alignItems:'center'}}><View style={{width:18,height:18,backgroundColor:'#fbd203',borderRadius:18/2,marginRight:10}}></View><Text>Drink</Text></View>
            <View style={{flexDirection:'row',alignItems:'center'}}><View style={{width:18,height:18,backgroundColor:'#6194FE',borderRadius:18/2,marginRight:10}}></View><Text>Shop</Text></View>
          </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20,width:'95%'}}>
            <View style={{flexDirection:'row',width:170,height:73,justifyContent:'flex-start',alignItems:'center',backgroundColor:'white',borderRadius:15,paddingLeft:10}}>
                <Image source={Income} style={{marginRight:10}} />
                <View>
                    <Text>200 TND</Text>
                    <Text>Income</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',width:170,height:73,justifyContent:'flex-start',alignItems:'center',backgroundColor:'white',borderRadius:15,paddingLeft:10}}>
            <Image source={Expense} style={{marginRight:10}} />
            <View>
                    <Text>200 TND</Text>
                    <Text>Expense</Text>
                </View>
            </View>
        </View>

        </View>
      

          
        


        
       
      
      
      
            
          </View>
          </ScrollView>
          </SafeAreaView>
        </LinearGradient>
        
  )
}
const styles = StyleSheet.create({
  scrollView: {
    width:screenWidth,
    
    height:screenHeight,
  },
  flex:{alignItems: 'center',
  justifyContent:'center',},
  
  linearGradient: {
    flex:1
    
  },
  SafeAreaView:{
    flex:1
  },
  container1: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
 

body:{
  paddingtop:10,
  paddingLeft:10,
  paddingRight:10,
  zIndex: 2,
  backgroundColor:'#FBFBFB',
  borderTopLeftRadius:45,
  borderTopRightRadius:45,
  flex:2,
  minHeight: screenHeight-70,
  width:'100%'
  
  
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  stepIndicator: {
    marginVertical: 50,
    position:"absolute",
    width:screenWidth,
    top:-70,
    
    
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
    color:'black',
    paddingTop:10
    
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

export default Statistics


