import { View, Text,TextInput,StyleSheet} from 'react-native'
import React from 'react'

const Custominput = ({value,setValue,placeholder,secureTextEntry,focus}) => {
  return (
    <View style={styles.container}>
      
      <TextInput 
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      style={styles.input}
      secureTextEntry={secureTextEntry}
      onFocus={focus}
      />
    </View>
  )
}
const styles= StyleSheet.create({
    container:{
      backgroundColor :'white',
      width: '100%',

      bordercolor:'#A5ABB3',
      borderWidth:1,
      borderRadius:15,

      paddingHorizontal:10,
      marginVertical:10,
      




    },
    input : {},

})

export default Custominput