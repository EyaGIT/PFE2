import { View, Text,SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'

const ImagePickerHeader = () => {
  return (
    <SafeAreaView style={Styles.SafeArea}>
        <View style={Styles.topBar}>
            <Text style={Styles.topBar}>Avatar Picker</Text>
        </View>

    </SafeAreaView>
  )
}
const Styles=StyleSheet.create({
    SafeArea:{
   backgroundColor:'red'
    },
topBar:{

    height:50,
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center',
},
topBarTitleText:{
    color:'#ffffff',
    fontSize:20,


}



})
export default ImagePickerHeader