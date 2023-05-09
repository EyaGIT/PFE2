import { View, Text ,ScrollView ,SafeAreaView,Image, TouchableOpacity} from 'react-native'
import React from 'react'
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



const Settings = () => {
  const navigation = useNavigation();


  const onArrowPressed = () => {
    navigation.navigate("Edit Profil");
     }
  return (
    <SafeAreaView style={{ width:'100%',justifyContent: "flex-start", alignItems: "center",flex:1}} >
     <View style={{alignItems:"center",justifyContent:"flex-start",width:"100%",flex:1,marginTop:-150,top:140,marginBottom:140}}> 
    <PicherIm  />
    
    
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
            <Image source={not}   /> 
            <Text style={{color:'black',fontSize:16,fontWeight:'600',paddingTop:5}}>Notifications</Text>
        </View>
         
         <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
        
         <Image source={Vector}/>
         
         </View>
         </TouchableOpacity>
         <TouchableOpacity style={{flex:1,flexDirection:'row',height:50}}>
        <View style={{flex:5,flexDirection:'row',alignItems:'center'}}>
            <Image source={lang}   /> 
            <Text style={{color:'black',fontSize:16,fontWeight:'600',paddingTop:5,paddingLeft:2}}>Language</Text>
        </View>
         
         <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
        
         <Image source={Vector}/>
         
         </View>
         </TouchableOpacity>
         <TouchableOpacity style={{flex:1,flexDirection:'row',height:50}}>
        <View style={{flex:5,flexDirection:'row',alignItems:'center'}}>
            <Image source={Protect}   /> 
            <Text style={{color:'black',fontSize:16,fontWeight:'600',paddingTop:5}}>Security</Text>
        </View>
         
         <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
        
         <Image source={Vector}/>
         
         </View>
         </TouchableOpacity>
         <TouchableOpacity style={{flex:1,flexDirection:'row',height:50}}>
        <View style={{flex:5,flexDirection:'row',alignItems:'center'}}>
            <Image source={eye}   /> 
            <Text style={{color:'black',fontSize:16,fontWeight:'600',paddingTop:5,paddingLeft:1.5}}>Dark Theme</Text>
        </View>
         
         <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
        
         <Image source={Vector}/>
         
         </View>
         </TouchableOpacity>
         
         <TouchableOpacity style={{flex:1,flexDirection:'row',height:50}}>
        <View style={{flex:5,flexDirection:'row',alignItems:'center'}}>
            <Image source={logout}   /> 
            <Text style={{color:'#E20522',fontSize:16,fontWeight:'600',paddingTop:5}}>Logout</Text>
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