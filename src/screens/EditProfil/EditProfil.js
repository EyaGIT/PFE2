import { View, Text ,ScrollView ,SafeAreaView,Image} from 'react-native'
import React from 'react'
import PicherIm from '../../components/PickerIm/PicherIm'
import User from '../../../assets/images/User.png'
import Toggle from '../../../assets/images/Toggle.png'



const EditProfil = () => {
  return (
    <SafeAreaView style={{ width:'100%',justifyContent: "flex-start", alignItems: "center",flex:1}} >
     <View style={{alignItems:"center",justifyContent:"flex-start",width:300,height:150,flex:1,marginTop:-150,top:140,marginBottom:170}}> 
    <PicherIm/>
    </View>  

    <View style={{flex:1.5,flexDirection:'column',width:'100%',alignItems:"center"}}>

        <Image source={{User}}   /> 
         <Text style={{color:'black',fontSize:16,fontWeight:'600'}}>Edit Profile </Text> 
         <Image source={{Toggle}}/>
        
        
    </View>

    




    </SafeAreaView>
      
    
  )
}

export default EditProfil