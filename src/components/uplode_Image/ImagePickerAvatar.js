import { View, Text,StyleSheet,TouchableOpacity,Image,ImageBackground } from 'react-native'
import React from 'react'
import BackgroundAvatar from '../../../assets/images/BackgroundAvatar.png'
import addButton from '../../../assets/images/addButton.png'
const ImagePickerAvatar = ({uri, onPress}) => {
  return (
    
       <View style={Styles.avatar}> 
         <Image
         style={Styles.avatarImage}
         source={uri ? {uri}:BackgroundAvatar}
         />
         <TouchableOpacity style={Styles.addButton} onPress={onPress}>
            <Image    style={Styles.addButton} source={addButton}          />
         </TouchableOpacity>
        

       </View>
   
  )
}

const Styles= StyleSheet.create({

    ImageBackground:{
  
      flex:1
    },
  
  avatar:{
  
  alignItems:'center',
  marginTop:'20%',
  

  
  
  },
  avatarImage:{
  
  
  },
  addButton:{

  },
  usernameText:{},
  
  
  
  });

export default ImagePickerAvatar
