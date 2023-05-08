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



const EditProfil = () => {
  return (
    <SafeAreaView style={{ width:'100%',justifyContent: "flex-start", alignItems: "center",flex:1}} >
     <View style={{alignItems:"center",justifyContent:"flex-start",width:300,height:150,flex:1,marginTop:-150,top:140,marginBottom:170}}> 
    <PicherIm/>
    </View>  
    <ScrollView >
    <View style={{flex:0.3,flexDirection:'row',width:'95%'}}>

        <Image source={User}   /> 
         <Text style={{color:'black',fontSize:16,fontWeight:'600',paddingTop:5}}>Edit Profile </Text> 
         <View style={{flex:0.5,width:'5%',paddingLeft:'55%',paddingTop:10}}>
        <TouchableOpacity>
         <Image source={Vector}/>
         </TouchableOpacity>
         </View>
        
        
    </View>
    <View style={{flex:0.3,flexDirection:'row',width:'95%',paddingTop:5}}>

    <Image source={not}   /> 
         <Text style={{color:'black',fontSize:16,fontWeight:'600',paddingTop:5}}>Notifications </Text> 
         <View style={{flex:0.5,width:'5%',paddingLeft:'52%',paddingTop:10}}>
        <TouchableOpacity>
         <Image source={Vector}/>
         </TouchableOpacity>
         </View>
        
        
    </View>
    <View style={{flex:0.3,flexDirection:'row',width:'95%',paddingTop:5}}>

        <Image source={lang}   /> 
         <Text style={{color:'black',fontSize:16,fontWeight:'600',paddingTop:5,paddingLeft:2}}>Language </Text> 
         <View style={{flex:0.5,width:'5%',paddingLeft:'57.5%',paddingTop:10}}>
        <TouchableOpacity>
         <Image source={Vector}/>
         </TouchableOpacity>
         </View>
        
        
    </View>
    <View style={{flex:0.3,flexDirection:'row',width:'95%',paddingTop:5}}>

    <Image source={eye}   /> 
         <Text style={{color:'black',fontSize:16,fontWeight:'600',paddingTop:5}}>Dark Theme </Text> 
         <View style={{flex:0.5,width:'5%',paddingLeft:'55%',paddingTop:10}}>
        <TouchableOpacity>
         <Image source={Vector}/>
         </TouchableOpacity>
         </View>
        
        
    </View>
    <View style={{flex:0.3,flexDirection:'row',width:'95%',paddingTop:5}}>

    <Image source={logout}   /> 
         <Text style={{color:'#E20522',fontSize:16,fontWeight:'600',paddingTop:5}}>Logout </Text> 
         <View style={{flex:0.5,width:'5%',paddingLeft:'55%',paddingTop:10}}>
        <TouchableOpacity>
         <Image source={Vector}/>
         </TouchableOpacity>
         </View>
        
        
    </View>
    </ScrollView>
    




    </SafeAreaView>
      
    
  )
}

export default EditProfil