import { StyleSheet,View, Text,Image,TouchableOpacity,ScrollView,Dimensions,StatusBar,TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect ,useState, useRef} from 'react'
import { useNavigation ,useRoute} from '@react-navigation/native'

import LinearGradient from 'react-native-linear-gradient'
import CustomButton from '../../components/CustomButton/CustomButton'
import AvatarAnas from '../../../assets/images/AvatarAnas.png'
import Send from '../../../assets/images/EmailSend.png'
import succ from '../../../assets/images/Succ.png'
import Pin from '../../../assets/images/___.png'
import Block from '../../../assets/images/Unavailable.png'
import Limits from '../../../assets/images/NoEntry.png'
import PopUp from '../../components/PopUp/PopUp';
import Settings from '../../../assets/images/icons/Settings_outline.png'
import udemy from '../../../assets/images/udemy.png'
import { API_BASE_URL } from '@env';
import arrow from '../../../assets/images/icons/ArrowBack.png';







const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Member = () => {
  
    const [Visible,setVisible]=useState(false);
    
    const navigation=useNavigation();
    const route = useRoute();
    const { member } = route.params;
    console.log(API_BASE_URL+"/uploads/"+member.image);
    useLayoutEffect(()=>{
      navigation.setOptions({
        headerShown:true,
        headerTransparent:true,
        headerTitleAlign: 'center',
        headerTitleStyle: { alignSelf:'center',color: 'white' ,height:'100%',
        fontSize: 27,fontWeight:'100'},
          
        headerLeft: () => (
          <TouchableOpacity
            style={{
              width: 45,
              height: 45,
              borderRadius: 25,
              borderColor: 'white',
              borderWidth: 1,
              marginLeft: 10,
              marginRight:30,
              marginBottom:37,
              marginTop:37,
              justifyContent: 'center',
              alignItems: 'center',
              
            }}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={arrow}
              style={{ width: '60%', height: '60%' }}
            />
          </TouchableOpacity>
        ),headerStyle: {
          
          height:'auto'
          
        
        
  
          
    
          },
      })
    }, [])

  return (
    <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 1}} locations={[0,0.6]} colors={['#E20522', '#000000']} style={styles.linearGradient}>
          
          <SafeAreaView style={styles.SafeAreaView}>
          <StatusBar barStyle="light-content" backgroundColor={'transparent'} translucent={true} />
            
          <ScrollView style={styles.scrollView}  showsVerticalScrollIndicator={false}>
          
         <View>
            <Text style={{textAlign: 'center',fontSize: 25,color:'#FFFFFF',paddingBottom:30,paddingTop:30}}></Text>
            
        </View>      
     <View>


     </View>

        <View style={{alignItems:"center",width:'100%',flex:1,height:screenHeight-78}}> 
      <View style={styles.body}>
        <View style={{alignItems:"center",justifyContent:'flex-start',marginTop:10,width:'100%',height:230}}>
        <Image style={{width:100,height:100,borderRadius:100/2}} source={{uri:API_BASE_URL+"/uploads/"+member.image}}></Image>
            <Text style={{fontSize:28,fontWeight:"bold",color:"black",marginBottom:30}}>{member.lastName} {member.firstName}</Text>
            
            <View style={{width:'80%',borderWidth:1,borderRadius:20,height:70,backgroundColor:"#EBEBEB",borderColor:'#EBEBEB',alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
                
                <Text style={{fontWeight:'bold',fontSize:30,color:'black',paddingLeft:30}}>1,500</Text>
                <Text style={{fontWeight:'bold',fontSize:25,color:'#E20522',paddingLeft:30}}>TND</Text>
            </View>
        </View>
        
        <View style={{width:'100%',alignItems:'center',flexDirection:'row',justifyContent:'space-between',paddingTop:20}}>
            
            <TouchableOpacity style={{alignItems:"center",justifyContent:'flex-start'}} onPress={() => navigation.navigate('Send Money')}>
                <View style={{alignItems:"center",justifyContent:'center',backgroundColor:'rgba(209,208,208,0.5)',width:70,height:70,borderRadius:50}}>
                    <Image source={Send} style={{width:45,height:45,marginTop:5}}></Image>
                </View>
                <Text>Send</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:"center",justifyContent:'flex-start'}}onPress={() => navigation.navigate('Settings member')}>
                <View style={{alignItems:"center",justifyContent:'center',backgroundColor:'rgba(209,208,208,0.5)',width:70,height:70,borderRadius:50}}>
                <Image source={Settings} style={{width:40,height:40}}></Image>
                </View>
                <Text>Profil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:"center",justifyContent:'flex-start'}} onPress={()=> setVisible(true)}>
                <View style={{alignItems:"center",justifyContent:'center',backgroundColor:'rgba(209,208,208,0.5)',width:70,height:70,borderRadius:50}}>
                <Image source={Block} style={{width:45,height:45}}></Image>
                </View>
                <Text>Block</Text>
                
            </TouchableOpacity>
            <PopUp
                isVisible={Visible}
                onClose={()=> setVisible(false)}
                message="Anas "
                />
              
            <TouchableOpacity style={{alignItems:"center",justifyContent:'flex-start'}} onPress={()=> navigation.navigate('Limits')}>
                <View style={{alignItems:"center",justifyContent:'center',backgroundColor:'rgba(209,208,208,0.5)',width:70,height:70,borderRadius:50}}>
                    <Image source={Limits} style={{width:45,height:45}}></Image>
                </View>
                <Text>Limits</Text>
            </TouchableOpacity>
       </View>
       </View>
       
       <View style={{alignItems:"center",justifyContent:"center",width:"100%",top:screenHeight/4,height:screenHeight-270,backgroundColor:"#FBFBFB",paddingTop:250,paddingLeft:30,paddingRight:30}}>
        
       
       <View style={{width:'100%',alignItems:'center',justifyContent:'center',paddingBottom:100}}>
       <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{fontSize:25,fontWeight:'bold'}}>Transaction</Text>
                <View>
                  <TouchableOpacity>
                  <Text>Today</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flexDirection:'column',width:'100%',alignItems:'center',justifyContent:'space-between'}}>
                <TouchableOpacity style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-between', backgroundColor:'#F8F8F8',paddingLeft:25,paddingRight:25,height:70,marginTop:10,borderRadius:20}}>
                <Image source={udemy} style={{width:20}} />
                <View style={{flex:1,paddingLeft:20,paddingRight:20}}>
                <Text style={{fontWeight:'bold',fontSize:20}}>Udemy</Text>
                <Text>payment</Text>
                </View>
                <Text>-$165.00</Text>
                </TouchableOpacity>


                <TouchableOpacity style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-between', backgroundColor:'#F8F8F8',paddingLeft:25,paddingRight:25,height:70,marginTop:10,borderRadius:20}}>
                <Image source={udemy} style={{width:20}} />
                <View style={{flex:1,paddingLeft:20,paddingRight:20}}>
                <Text style={{fontWeight:'bold',fontSize:20}}>Amazon</Text>
                <Text>payment</Text>
                </View>
                <Text>-$165.00</Text>
                </TouchableOpacity>
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
 
 

body:{
  paddingtop:10,
  
  zIndex: 2,
  backgroundColor:'#FBFBFB',
  borderRadius:45,
  
  flex:2,
  height: 400,
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