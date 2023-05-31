import { View, Text,StyleSheet,TouchableOpacity} from 'react-native'
import React,{useState,useLayoutEffect} from 'react'
import Custominput from '../../components/Custominput/Custominput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Security = () => {


    const [CurrentPassword, setCurrentPassword] = useState('');
    const [NewPassword, setNewPassword] = useState('');
  const [RetypeNewPassword, setRetypeNewPassword] = useState('');
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
      <TouchableOpacity >
        <CustomButton  text="Save Changes" />
        </TouchableOpacity>
        </View>
        </View>
        </SafeAreaView>
  )
}

export default Security