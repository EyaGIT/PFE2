import { View, Text,TextInput,StyleSheet,Image} from 'react-native'
import React from 'react'
import Tunisia from '../../../assets/images/Tunisia.png'

const Custominput = ({value,setValue,placeholder,secureTextEntry,focus}) => {
  return (
    <View style={styles.container}>
    
      <Image source={Tunisia} style={{marginTop:12}}/>
      <Text style={{marginTop:15 ,paddingLeft:10}}> +216</Text>
      <TextInput 
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      style={styles.input}
      secureTextEntry={secureTextEntry}
      onFocus={focus}
      keyboardType="numeric"
      />
     
    </View>
  )
}
const styles= StyleSheet.create({
    container:{
      backgroundColor :'white',
      width: '100%',
      flexDirection:'row',
      bordercolor:'#A5ABB3',
      borderWidth:1,
      borderRadius:15,

      paddingHorizontal:10,
      marginVertical:10,
      




    },
    input : {

        paddingLeft:10,
        
    },

})

export default Custominput