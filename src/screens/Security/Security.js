import { View, Text,StyleSheet,TouchableOpacity,Alert } from 'react-native'
import React,{useState,useLayoutEffect,useEffect} from 'react'
import Custominput from '../../components/Custominput/Custominput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation,useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { editpassword } from '../../api/user_api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Security = () => {
  
  const route = useRoute();
  const id = route.params?.id ? route.params.id : '';
  console.log(id);
    const [CurrentPassword, setCurrentPassword] = useState('');
    const [NewPassword, setNewPassword] = useState('');
  const [RetypeNewPassword, setRetypeNewPassword] = useState('');
 


   // Define your userId state variable at the top of your Security component
const [userId, setUserId] = useState('');


useEffect(() => {
  if(id){
  setUserId(id)
  console.log(id,'lol');
  }
}, [id]);

const handleSubmit = async () => {
  if (NewPassword !== RetypeNewPassword) {
    Alert.alert('Error', 'New passwords do not match');
    return;
  }
      

      
  // Call the API
  const result = await editpassword({
    userId: userId,
    currentPassword: CurrentPassword,
    newPassword: NewPassword,
    retypeNewPassword: RetypeNewPassword,
  });
      
  // Check the result and show an alert
  if (result.error) {
    Alert.alert('Error', result.error);
  } else {
    Alert.alert('Success', 'Password updated successfully');
  }
};

   
    




  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#FFFFFF' }}>
<View style={{ justifyContent: 'center', alignItems: 'center',width:'100%',paddingBottom:120 }}> 
        <View style={{width:'80%'}}> 
         
          <Text> Current password </Text>
         
          
          <Custominput 
          placeholder="" 
          value={CurrentPassword} 
          setValue={setCurrentPassword}
          secureTextEntry={true}
          />
          </View>


          <View style={{width:'80%'}}> 
          
          <Text> New password </Text>
        
          <Custominput 
          placeholder="" 
          value={NewPassword} 
          setValue={setNewPassword}
          secureTextEntry={true}
          />
          </View>


          <View style={{width:'80%'}}> 
         
          <Text> Retype New password </Text>
          
          <Custominput 
          placeholder="" 
          value={RetypeNewPassword} 
          setValue={setRetypeNewPassword}
          secureTextEntry={true}
          />
          </View>


          <View style={{width:"50%"}}>
     
        <CustomButton   onPress={handleSubmit} text="Save Changes" />
        
        </View>
        </View>
        </SafeAreaView>
  )
}

export default Security