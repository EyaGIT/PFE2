import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import back_ from '../../../assets/images/back_.png'

const BackArrowB = () => {
  return (
    <View style={{paddingTop:20,width:'90%'}}>
      <Image source={back_}/>
    </View>
  )
}

export default BackArrowB