import { View, Text ,ScrollView ,SafeAreaView,Image, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import PicherIm from '../../components/PickerIm/PicherIm'
import User from '../../../assets/images/User.png'
import Vector from '../../../assets/images/Vector.png'
import not from '../../../assets/images/Notification.png'
import logout from '../../../assets/images/Logout.png'
import lang from  '../../../assets/images/Languagel.png'
import eye from '../../../assets/images/Eye.png'
import Toggle from '../../../assets/images/Toggle.png'
import Protect from '../../../assets/images/Protect.png'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { socket } from "../../api/ApiManager";

import avataranas from '../../../assets/images/AvatarAnas.png'

const Settings = ({onLogoutSuccess,onLoad}) => {
  const navigation = useNavigation();
  const [UserName, setUserName] = useState(null);
  const [imageuri, setimageuri] = useState('');
  const adduriImage = (uri) =>{
    
    setimageuri(uri)
  
   }
  AsyncStorage.getItem('user')
  
  .then(userString => {
    // Check if user exists in storage
    if (userString) {
      // User found, parse user string to JavaScript object
      const user = JSON.parse(userString);
      setUserName(user.lastName+" "+user.firstName);
      console.log(UserName);
      // Do something with the user object
    } else {
      // User not found in storage
      console.log('User not found in storage.');
    }
  })
  .catch(error => {
    console.error(error);
  });
  const handleLogout = async ()=>{
    
    
    onLogoutSuccess();
    await new Promise(resolve => setTimeout(resolve, 2000));
    onLoad(false);
    

    // Navigate to Signin screen
    
    
  }
  const onSecurityPressed = () => {
    navigation.navigate("Security");
     }
  const onArrowPressed = () => {
    navigation.navigate("Edit Profil");
     }
  return (
    <SafeAreaView style={{ width:'100%',justifyContent: "flex-start", alignItems: "center",flex:1}} >
     <View style={{alignItems:"center",justifyContent:"center",width:"100%",flex:1}}> 
     <Image source={avataranas}/>
    <View style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
      <Text style={{fontSize:19,color:'#000000',fontWeight:'700',paddingTop:10}}>{UserName}</Text></View>
    
    
    </View>
    
    <ScrollView style={{width:'100%',paddingLeft:20,paddingRight:30,height:180}}>
    
      <TouchableOpacity style={{flex:1,flexDirection:'row',height:50}} onPress={onArrowPressed}>
        <View style={{flex:5,flexDirection:'row',alignItems:'center'}}>
            <Image source={User}   /> 
            <Text style={{color:'black',fontSize:16,fontWeight:'600',paddingTop:5}}>Edit Profile </Text>
        </View>
         
         <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
        
         <Image source={Vector} />
         
         </View>
         </TouchableOpacity>
        
         <TouchableOpacity style={{flex:1,flexDirection:'row',height:50}}>
        <View style={{flex:5,flexDirection:'row',alignItems:'center'}}>
            <Image source={lang}   /> 
            <Text style={{color:'black',fontSize:16,fontWeight:'600',paddingTop:5,paddingLeft:4}}>Language</Text>
            <Text style={{marginLeft:100,fontWeight:'500'}}>English (US)</Text>
        </View>
         
         <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
        
         <Image source={Vector}/>
         
         </View>
         </TouchableOpacity>
         <TouchableOpacity style={{flex:1,flexDirection:'row',height:50}} onPress={onSecurityPressed}>
        <View style={{flex:5,flexDirection:'row',alignItems:'center'}}>
            <Image source={Protect}   /> 

            <Text style={{color:'black',fontSize:16,fontWeight:'600',paddingLeft:3}}>Security</Text>
           
        </View>
         
         <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
        
         <Image source={Vector}/>
         
         </View>
         </TouchableOpacity>
        
         
         <TouchableOpacity style={{flex:1,flexDirection:'row',height:50}} onPress={handleLogout}>
        <View style={{flex:5,flexDirection:'row',alignItems:'center'}}>
            <Image source={logout}   /> 
            <Text style={{color:'#E20522',fontSize:16,fontWeight:'600',paddingTop:5,paddingLeft:2}}>Logout</Text>
        </View>
         
         <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
        
         <Image source={Vector}/>
         
         </View>
         </TouchableOpacity>

         
        
    
    
    
    
    
    </ScrollView>
    




    </SafeAreaView>
      
    
  )
}

export default Settings