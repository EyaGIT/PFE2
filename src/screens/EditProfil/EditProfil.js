import { View, Text,SafeAreaView, TouchableOpacity,Image,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import Custominput from '../../components/Custominput/Custominput'
import CustomButton from '../../components/CustomButton/CustomButton'
import DatePicker from '../../components/DatePicker/DatePicker'
import Tunisia from '../../../assets/images/Tunisia.png'
import { TextInput } from 'react-native-paper'
import CustominputImg from '../../components/CustominputImg/CustominputImg'
import { SelectList } from 'react-native-dropdown-select-list'

const EditProfil = () => {
    const [category,setCategory]=useState('Male')
    const categories1 =[
        {key:'1', value:'Male'},
        {key:'2', value:'Female'},
      ];

    const [userfirstname, setUserfirstname] = useState('');
    const [userlastname, setUserlastname] = useState('');
    const [usermail, setUsermail] = useState('');
    const [userphone, setUserphone] = useState('');
  return (

    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{width:"90%"}} >
      <Custominput
           placeholder="Anas" 
           value={userfirstname} 
           setValue={setUserfirstname}
           secureTextEntry={true}
           />
      </View>
      <View style={{width:"90%"}} >
      <Custominput
           placeholder="Cherni" 
           value={userlastname} 
           setValue={setUserlastname}
           secureTextEntry={true}
           />
      </View>
      <View style={{width:"90%"}} >
      <Custominput
           placeholder="chernianas@gmail.com" 
           value={usermail} 
           setValue={setUsermail}
           secureTextEntry={true}
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
      <View  style={{width:"90%"}}>
      <SelectList
       setSelected={setCategory}
       data={categories1}
       placeholder={"Select Category"}
       defaultOption={{key:'1', value:'Male'}}
       search={false}
       boxStyles={styles.container}


       
       />
      </View>
      <View style={{width:"60%",paddingTop:20}}>
      <TouchableOpacity >
        <CustomButton  text="Save Changes" />
        </TouchableOpacity>
        </View>
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