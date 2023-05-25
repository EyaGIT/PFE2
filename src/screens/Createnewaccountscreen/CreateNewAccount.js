import { View, Text,StyleSheet, TouchableOpacity,ActivityIndicator } from 'react-native'
import React,{useState,useLayoutEffect}  from 'react'
import Custominput from '../../components/Custominput/Custominput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native';
import PicherIm from '../../components/PickerIm/PicherIm'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { verifyEmailExists } from "../../api/user_api";
const CreateNewAccount = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
//--------------------------------

  
  const [imageuri, setimageuri] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
  if (isLoading) {
    // Prevent multiple submissions while already loading
    return;
  }
  if (
    password.trim() === '' ||
    firstname.trim() === '' ||
    lastname.trim() === '' ||
    mail.trim() === '' ||
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

  if (!isEmailValid(mail)) {
    setError('Invalid email address');
    return;
  }
  if (!isPasswordValid(password)) {
    setError('Password should be at least 6 characters long');
    return;
  }

  

  
  setIsLoading(true); // Start loading
  verifyEmailExists({
    email: mail.toLocaleLowerCase(),
    
  })
    .then(result=>{
      if(result.status===200){
        if(result.data.exists===true){
          setIsLoading(false);
          setError('email address exists');
          
          return;
        }else{
          const formData1 ={'firstName': firstname,
          'lastName': lastname,
          'password': password,
          'email': mail.toLocaleLowerCase(),
        'image':imageuri}
          
          
       
        console.log(formData1);
          setTimeout(() => {
          setIsLoading(false); // Stop loading
          navigation.navigate('Order Bracelet', { formData1 }); // Pass formData as a parameter
        }, 2000);
        
          console.log('Form submitted successfully');
        }
      }
    }).catch((error) => {
      setIsLoading(false);
      console.log(error);
      setIsLoading(false); // Stop loading
      // Handle error
    });
  // All inputs are valid, proceed with form submission
  setError('');
  
  
};
//--------------------------------

  const navigation = useNavigation();
 
useLayoutEffect(()=>{
  navigation.setOptions({
    headerShown:true,
    headerTitle: null,
    headerTransparent: true,
    headerTitleStyle: {
      width: 0,
      height: 0,
      fontSize:20,
      color:'#F2F2F2'
    },
    headerStyle: {
      backgroundColor:'#F2F2F2'
    },
  })})

const onSigninPressed = () => {
  navigation.navigate("Sign in");

}
const renderContent = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
   <ScrollView style={{width:'100%',paddingLeft:20,paddingRight:30,height:180}}>
      <View style={{justifyContent: "flex-start",flexDirection:"row",alignItems:"center",height:150,width:'100%',paddingTop:110}}>
      <Text style={{fontSize: 33, color: '#394452',height:60 }}>Sign up to</Text> 
        <Text style={{fontSize: 33, color: '#E20522',height:60 }}> Cashless</Text>
    </View>
    {error && <Text style={{width:'80%',fontSize:15,color:'red'}}>{error}</Text>}
    <View style={{alignItems:"center",justifyContent:"center",width:"100%",height:170,paddingBottom:40}}> 
     <PicherIm uriForm={setimageuri}/>
   </View>
    <View style={Styles.container}>
   
        <View style={{width:"90%"}}>
          <Text>
          <Text> First Name </Text>
          <Text style={{color:'red'}}> *</Text>
          </Text>
          <Custominput 
          placeholder="First Name" 
          value={firstname} 
          setValue={setFirstname}
          />
        </View>
          </View>


          <View style={Styles.container}>
          <View style={{width:"90%"}}>
          <Text>
          <Text> Last Name </Text>
          <Text style={{color:'red'}}> *</Text>
          </Text>
          <Custominput 
          placeholder="Last name" 
          value={lastname} 
          setValue={setLastname}
          />
          </View>
         </View>


          <View style={Styles.container}>
          <View style={{width:"90%"}}>
          <Text>
          <Text> Email  </Text>
          <Text style={{color:'red'}}> *</Text>
          </Text>
          <Custominput 
          placeholder="Email" 
          value={mail} 
          setValue={setMail}
          />
          </View>
          </View>

          <View style={Styles.container}>
          <View style={{width:"90%"}}>
          <Text>
          <Text> Password  </Text>
          <Text style={{color:'red'}}> *</Text>
          </Text>
          <Custominput 
          placeholder="Password" 
          value={password} 
          setValue={setPassword}
          />
          </View>
          </View>
           <View style={Styles.container}>
          <View style={{width:"70%",paddingTop:20}}>
           
        <CustomButton  text="Continue " onPress={handleSubmit}/>
        
        </View>

        <Text style={{paddingTop:10,paddingBottom:30}}>
          <Text style={{color:'#858C94'}}>Already have an account ?</Text>
          <TouchableOpacity onPress={onSigninPressed}  >
          <Text style={{color:'#E20522',fontWeight:'bold'}} > Sign in</Text></TouchableOpacity>
       </Text>

       </View>

       </ScrollView>
    </SafeAreaView>
  );
};
  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#FF0000" />
      </View>
      ) : (
        renderContent()
      )}
    </View>
  )
}
   const Styles = StyleSheet.create({
  container: {
    
    
   
    alignItems: 'center',
    width:"100%",
    justifyContent:'center'
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
});
export default CreateNewAccount