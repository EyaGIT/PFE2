import { View, Text,SafeAreaView, TouchableOpacity,Image,StyleSheet } from 'react-native'
import React,{useState,useEffect} from 'react'
import Custominput from '../../components/Custominput/Custominput'
import CustomButton from '../../components/CustomButton/CustomButton'
import DatePicker from '../../components/DatePicker/DatePicker'
import Tunisia from '../../../assets/images/Tunisia.png'
import { TextInput } from 'react-native-paper'
import CustominputImg from '../../components/CustominputImg/CustominputImg'
import PicherIm from '../../components/PickerIm/PicherIm'
import { ScrollView } from 'react-native-gesture-handler'
import { useRoute } from '@react-navigation/native';
import { API_BASE_URL } from '@env';
import { edituserPrinc } from '../../api/user_api';

const EditProfil = () => {
  
  const editUserInfo = async () => {
    console.log("dddd")
    
        const userData = {
          userId: userId, // Use the actual user Id
          firstName: userfirstname, // Use the actual First Name
          lastName: userlastname, // Use the actual Last Name
          email: usermail, // Use the actual Email
          phone: userphone, // Use the actual Phone
          birthDate: date, // Use the actual Birth Date
          image: Img, // Use the actual Image
        };
        console.log(userData);
       await edituserPrinc(userData).then(result => {
          if (result.status == 200) {
            console.log(result.data);
            // Add further actions as needed
          } else {
            console.log(result.error);
          }
        }).catch(error => {
          console.log(error);
        });
      
    
  };
  useEffect(() => {
    if(member){
    setUserId(member._id)
    setUserfirstname(member.firstName);
    setUserlastname(member.lastName)
    setUsermail(member.email);
    console.log(API_BASE_URL+"/uploads/"+member.image)
    setUserphone(member.phone);
    setDate(member.birthDate);}
  }, [member]);
  const route = useRoute();
  const { member} = route.params;
  const [date, setDate] = useState();
    const [userfirstname, setUserfirstname] = useState('');
    const [userlastname, setUserlastname] = useState('');
    const [usermail, setUsermail] = useState('');
    const [userphone, setUserphone] = useState('');
    const [userId, setUserId] = useState('');
    const [Img, setImg ]= useState('');

  return (

    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center',width:'100%',backgroundColor:'#FFFFFF' }}>
      <ScrollView style={{width:'100%',paddingLeft:20,paddingRight:30,height:180}}>
        <View style={{alignItems:"center",justifyContent:"flex-start",width:"100%",marginTop:-150,top:140,marginBottom:140}}> 
        <PicherIm uriForm={setImg} default1={API_BASE_URL+"/uploads/"+member.image}/>
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
        />
      
      </View>
    
      <View style={{width:"60%",paddingTop:20}}>
      
        <CustomButton onPress={editUserInfo} text="Save Changes" />
       
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