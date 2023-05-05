import { StyleSheet,View, Text,Image,TouchableOpacity,ScrollView,Dimensions,StatusBar,TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect ,useState, useRef} from 'react'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import CustomButton from '../../components/CustomButton/CustomButton'
import AvatarAnas from '../../../assets/images/AvatarAnas.png'

import succ from '../../../assets/images/Succ.png'













const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Receipt = () => {
  
    
    const navigation=useNavigation();
    useLayoutEffect(()=>{
      navigation.setOptions({
        headerShown:false,
      })
    }, [])

  return (
    <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 1}} locations={[0,0.6]} colors={['#E20522', '#000000']} style={styles.linearGradient}>
          
          <SafeAreaView style={styles.SafeAreaView}>
          <StatusBar barStyle="light-content" backgroundColor={'transparent'} translucent={true} />
            
          <ScrollView style={styles.scrollView}  showsVerticalScrollIndicator={false}>
          
         <View>
            <Text style={{textAlign: 'center',fontSize: 25,color:'#FFFFFF',paddingBottom:30,paddingTop:30}}>Receipt</Text>
            
        </View>      
     <View>


     </View>

        <View style={{alignItems:"center",width:'100%',flex:1,height:screenHeight-78}}> 
      <View style={styles.body}>
        <View style={{alignItems:"center",justifyContent:"center",marginTop:10,width:'100%',height:220,borderBottomWidth:1,borderBottomColor:"#D9D9D9"}}>
        <Image source={succ}></Image>
            <Text style={{fontSize:28,fontWeight:"bold",color:"black"}}>Transfer Successful!</Text>
            <Text style={{width:260,textAlign:"center",fontSize:16}}>Your money has been transfered successfuly!</Text>
        </View>
        <View style={{width:'100%',alignItems:'center'}}>
            <View style={{width:'90%',alignItems:'center',flexDirection:'row',justifyContent:'space-between',height:70}}>

                <Text>Transfer Amount</Text>
                <Text style={{fontWeight:'bold',color:'black'}}>$1500</Text>
            </View>
            <View style={{width:'90%',alignItems:'center',flexDirection:'row',justifyContent:'flex-start',borderWidth:1,borderRadius:20,height:70, marginBottom:30,borderColor:'rgba(0,0,0,0.2)'}}>
                <Image source={AvatarAnas} style={{width:48,height:48,margin:10}} ></Image>
                <Text style={{fontWeight:'bold',fontSize:20,color:'black'}}>Cherni Anas</Text>
            </View>
            <View style={{width:'90%',alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
                <Text>Data & time</Text>
                <Text style={{fontWeight:'bold',color:'black'}}>1 Jan 2023, 10:30PM</Text>
            </View>
            <View style={{width:'90%',alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
                <Text>No. Ref</Text>
                <Text style={{fontWeight:'bold',color:'black'}}>11288889058722</Text>
            </View>
       </View>
       </View>
       
       <View style={{alignItems:"center",justifyContent:"center",width:"100%",backgroundColor:"white",top:screenHeight/4,height:screenHeight-270,backgroundColor:"#F3F3F3",paddingTop:250,paddingLeft:30,paddingRight:30}}>
        <CustomButton text={'Done'} style={{marginTop:30}}/>
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
 
 

body:{
  paddingtop:10,
  
  zIndex: 2,
  backgroundColor:'#FBFBFB',
  borderRadius:45,
  
  flex:2,
  height: 515,
  width:'90%',
  position:'absolute'
  
  
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

export default Receipt