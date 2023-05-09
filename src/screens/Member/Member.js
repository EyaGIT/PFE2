import { StyleSheet,View, Text,Image,TouchableOpacity,ScrollView,Dimensions,StatusBar,TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect ,useState, useRef} from 'react'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import CustomButton from '../../components/CustomButton/CustomButton'
import AvatarAnas from '../../../assets/images/AvatarAnas.png'
import Send from '../../../assets/images/EmailSend.png'
import succ from '../../../assets/images/Succ.png'
import Pin from '../../../assets/images/___.png'
import Block from '../../../assets/images/Unavailable.png'
import Limits from '../../../assets/images/NoEntry.png'











const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Member = () => {
  
    
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
            <Text style={{textAlign: 'center',fontSize: 25,color:'#FFFFFF',paddingBottom:30,paddingTop:30}}>Member</Text>
            
        </View>      
     <View>


     </View>

        <View style={{alignItems:"center",width:'100%',flex:1,height:screenHeight-78}}> 
      <View style={styles.body}>
        <View style={{alignItems:"center",justifyContent:'flex-start',marginTop:10,width:'100%',height:245}}>
        <Image source={AvatarAnas}></Image>
            <Text style={{fontSize:28,fontWeight:"bold",color:"black",marginBottom:30}}>Cherni Anas</Text>
            
            <View style={{width:'90%',alignItems:'center',flexDirection:'row',justifyContent:'center',borderWidth:1,borderRadius:20,height:70, marginBottom:30,borderColor:'#E20522',backgroundColor:'white'}}>
                
                <Text style={{fontWeight:'bold',fontSize:30,color:'black'}}>1,500</Text>
                <Text style={{fontWeight:'bold',fontSize:30,color:'#E20522'}}>TND</Text>
            </View>
        </View>
        
        <View style={{width:'100%',alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
            
            <TouchableOpacity style={{alignItems:"center",justifyContent:'flex-start'}} onPress={() => navigation.navigate('Send Money')}>
                <View style={{alignItems:"center",justifyContent:'center',backgroundColor:'rgba(209,208,208,0.5)',width:70,height:70,borderRadius:50}}>
                    <Image source={Send} style={{width:45,height:45,marginTop:5}}></Image>
                </View>
                <Text>Send</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:"center",justifyContent:'flex-start'}}>
                <View style={{alignItems:"center",justifyContent:'center',backgroundColor:'rgba(209,208,208,0.5)',width:70,height:70,borderRadius:50}}>
                <Image source={Pin} style={{width:45,height:12}}></Image>
                </View>
                <Text>PIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:"center",justifyContent:'flex-start'}}>
                <View style={{alignItems:"center",justifyContent:'center',backgroundColor:'rgba(209,208,208,0.5)',width:70,height:70,borderRadius:50}}>
                <Image source={Block} style={{width:45,height:45}}></Image>
                </View>
                <Text>Block</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:"center",justifyContent:'flex-start'}} onPress={()=> navigation.navigate('Limits')}>
                <View style={{alignItems:"center",justifyContent:'center',backgroundColor:'rgba(209,208,208,0.5)',width:70,height:70,borderRadius:50}}>
                    <Image source={Limits} style={{width:45,height:45}}></Image>
                </View>
                <Text>Limits</Text>
            </TouchableOpacity>
       </View>
       </View>
       
       <View style={{alignItems:"center",justifyContent:"center",width:"100%",top:screenHeight/4,height:screenHeight-270,backgroundColor:"#FBFBFB",paddingTop:250,paddingLeft:30,paddingRight:30}}>
        
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

export default Member