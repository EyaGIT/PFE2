import { View, Text,Image,StyleSheet,Dimensions} from 'react-native'
import React,{useState, useRef,useCallback} from 'react'
import { RadioButton } from 'react-native-paper';
import PhoneInput from "react-native-phone-number-input";
import CustomButton from '../../CustomButton/CustomButton';
import Custominput from '../../Custominput/Custominput';
import NewAvatar from '../../../../assets/images/NewAvatar.png'


import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker'
import { verifyEmailExists } from "../../../api/user_api";
import FormData from "form-data";

import PicherIm from '../../PickerIm/PicherIm';
import { ScrollView } from 'react-native-gesture-handler';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const Swipe1 = ({handellogin,userInfo}) => {
  
  const [showDatePicker, setShowDatePicker] = useState(false);


  const onContinePressed = () => {
    handellogin();
    console.warn("Contine");}

  

    
  const [date, setDate] = useState(new Date());
  const [password, setpassword] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [imageuri, setimageuri] = useState('');
  const [checked, setChecked] = React.useState('Male');
  const [error, setError] = useState('');

// Input validation functions
const isPasswordValid = (password) => password.length >= 6;
const isNameValid = (name) => name.trim() !== '';
const isEmailValid = (email) => {
  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
const isImageUriValid = (imageuri) => imageuri !== '';
const getImageType=(uri) => {
  const parts = uri.split('.');
  const extension = parts[parts.length - 1];
  const mimeType = `image/${extension}`;
  return mimeType.toLowerCase();
}
// Handle form submission
const handleSubmit = () => {
  if (
    password.trim() === '' ||
    firstname.trim() === '' ||
    lastname.trim() === '' ||
    email.trim() === '' ||
    imageuri === ''||imageuri === null
  ) {
    errorMessage = 'All fields are required';
    setError(errorMessage)
    return
  }
  if (!isImageUriValid(imageuri)) {
    setError('Image is required');
    return;
  }
  // Validate inputs
  

  if (!isNameValid(firstname)) {
    setError('First name is required');
    return;
  }

  if (!isNameValid(lastname)) {
    setError('Last name is required');
    return;
  }

  if (!isEmailValid(email)) {
    setError('Invalid email address');
    return;
  }
  if (!isPasswordValid(password)) {
    setError('Password should be at least 6 characters long');
    return;
  }

  

  // Validate date (age > 10)
  const currentDate = new Date();
  const age = currentDate.getFullYear() - date.getFullYear();
  if (age < 10) {
    setError('Age should be at least 10 years');
    return;
  }
  verifyEmailExists({
    email: email.toLocaleLowerCase(),
    
  })
    .then(result=>{
      if(result.status===200){
        if(result.data.exists===true){
          setError('email address exists');
          return;
        }else{
          const formData ={'firstName': firstname,
          'lastName': lastname,
          'password': password,
          'email': email.toLocaleLowerCase(),
          'birthDate': date,
          'gender': checked,
        'image':imageuri}
          
          
       /* const imageName = imageuri.split('/').pop();
        
        const imageType = getImageType(imageName);
        
          formData.append('image', {
            uri: imageuri,
            name: imageName,
            type: imageType,
          });
          console.log("hhhhhheader",formData);*/
          userInfo(formData);
          handellogin();
          console.log('Form submitted successfully');
        }
      }
    })
  // All inputs are valid, proceed with form submission
  setError('');
  console.log("lena",imageuri)
  
};

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <SafeAreaView style={{ width:screenWidth,justifyContent: "flex-start", alignItems: "center"}}>
       <ScrollView style={styles.scrollView}  showsVerticalScrollIndicator={false}>
    <View style={{alignItems:'center',justifyContent:'center',marginTop:-40}}>
    <PicherIm uriForm={setimageuri}/>
    </View>
    {error && <Text style={{width:'80%',fontSize:15,color:'red'}}>{error}</Text>}
    <View style={styles.body}>
    <View style={{width:'80%',flexDirection:"row"}}>
      





<Text style={{paddingTop:5}}>Male</Text>
<RadioButton
value="Male"
status={ checked === 'Male' ? 'checked' : 'unchecked' }
onPress={() => setChecked('Male')}
color='#E20522'
/>
<Text style={{paddingTop:5}}>Female</Text>
<RadioButton
value="Female"
status={ checked === 'Female' ? 'checked' : 'unchecked' }
onPress={() => setChecked('Female')}
color='#E20522'
/>

</View>
<View style={{width:'80%'}}>
<Text>
          <Text> First name </Text>
          <Text style={{color:'red'}}> *</Text>
          </Text>
<Custominput 
  placeholder="Firstname" 
  value={firstname} 
  setValue={setfirstname}
  />
</View>

<View style={{width:'80%'}}>
<Text>
          <Text> Last name </Text>
          <Text style={{color:'red'}}> *</Text>
          </Text>
<Custominput 
  placeholder="Lastname" 
  value={lastname} 
  setValue={setlastname}
  />

</View>

<View style={{width:'80%'}}>
<Text>
          <Text> Email  </Text>
          <Text style={{color:'red'}}> *</Text>
          </Text>
<Custominput 
  placeholder="Email" 
  value={email} 
  setValue={setemail}
  keyboard="email-address"
  />

</View>
<View style={{width:'80%'}}>
<Text>
          <Text> Password </Text>
          <Text style={{color:'red'}}> *</Text>
          </Text>
<Custominput 
  placeholder="Password" 
  value={password} 
  setValue={setpassword}
  secureTextEntry={true}
  />

</View>







<View style={{width:'80%'}}>
<Text>
          <Text> Date of birth </Text>
          <Text style={{color:'red'}}> *</Text>
          </Text>
<Custominput 
          placeholder="Date" 
          value={date.getDate().toString()+'/'+(date.getMonth()+1).toString()+'/'+date.getFullYear().toString()}
          
          focus={() => setShowDatePicker(true)}
          />
      
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          onChange={onDateChange}
        />)}
        </View>

        <View style={{width:"50%"}}>
        <CustomButton  text="Continue " onPress={handleSubmit}/>
        </View>
        </View>
 </ScrollView>
</SafeAreaView>
  )
}
const styles = StyleSheet.create({
  scrollView: {
    width:screenWidth,
    
    height:screenHeight,
  },
  body:{
      
    
    backgroundColor:'#FBFBFB',
    borderTopLeftRadius:45,
    borderTopRightRadius:45,
    flex:1,
    minHeight:screenHeight-77,
    marginBottom:30,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',

   paddingBottom:100
   
    
    
    },})
 
export default Swipe1