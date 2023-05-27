import { View, Text,SafeAreaView, TouchableOpacity,Image,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import Custominput from '../../components/Custominput/Custominput'
import CustomButton from '../../components/CustomButton/CustomButton'
import DatePicker from '../../components/DatePicker/DatePicker'
import Tunisia from '../../../assets/images/Tunisia.png'
import { TextInput } from 'react-native-paper'
import CustominputImg from '../../components/CustominputImg/CustominputImg'
import PicherIm from '../../components/PickerIm/PicherIm'
import { ScrollView } from 'react-native-gesture-handler'


const EditProfil = () => {
    

    const [userfirstname, setUserfirstname] = useState('');
    const [userlastname, setUserlastname] = useState('');
    const [usermail, setUsermail] = useState('');
    const [userphone, setUserphone] = useState('');
  return (

    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center',width:'100%',backgroundColor:'#F2F2F2' }}>
      <ScrollView style={{width:'100%',paddingLeft:20,paddingRight:30,height:180}}>
        <View style={{alignItems:"center",justifyContent:"flex-start",width:"100%",marginTop:-150,top:140,marginBottom:140}}> 
     <PicherIm/>
   </View>
    <View style={{justifyContent: 'center', alignItems: 'center',width:'100%' }}>
      <View style={{width:"90%"}} >
      <Custominput
           placeholder="Anas" 
           value={userfirstname} 
           setValue={setUserfirstname}
           secureTextEntry={false}
           
           />
      </View>
      <View style={{width:"90%"}} >
      <Custominput
           placeholder="Cherni" 
           value={userlastname} 
           setValue={setUserlastname}
           secureTextEntry={false}
          
           />
      </View>
      <View style={{width:"90%"}} >
      <Custominput
           placeholder="chernianas@gmail.com" 
           value={usermail} 
           setValue={setUsermail}
           secureTextEntry={false}
           
           />
      </View>
      <View style={{width:"90%"}} >
      <DatePicker/>
      </View>
      <View style={{width:"90%"}} >
        <CustominputImg
        placeholder="22453769" 
        value={userphone} 
        setValue={setUserphone}
        secureTextEntry={true}/>
      
      </View>
    
      <View style={{width:"60%",paddingTop:20}}>
      <TouchableOpacity >
        <CustomButton  text="Save Changes" />
        </TouchableOpacity>
        </View>
        </View>
        </ScrollView>
    </SafeAreaView>
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

export default EditProfil