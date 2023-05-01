import { View, Text,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import Custominput from '../../components/Custominput/Custominput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ResetPassword = () => {

  const [NewPassword, setNewPassword] = useState('');
  const [RetypeNewPassword, setRetypeNewPassword] = useState('');


  const navigation = useNavigation();

  const onConfirmPressed = () => {
    
    navigation.navigate("Forget ¨Password");

  }




   
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{justifyContent: "flex-start",flexDirection:"row",alignItems:"center",width:"90%",flex:0.3,paddingTop:30}}>
        <Text style={{fontSize: 33, color: '#394452',height:60 ,paddingTop:20}}>New Password</Text> 
    </View>

    <View style={{width:'90%',flex:0.2}}> 
          <Text>
          <Text> New password </Text>
          <Text style={{color:'red'}}> *</Text>
          </Text>
          <Custominput 
          placeholder="********" 
          value={NewPassword} 
          setValue={setNewPassword}
          />

    

    </View>

    <View style={{width:'90%',flex:0.2}}>

    <Text>
          <Text> Retype new password </Text>
          <Text style={{color:'red'}}> *</Text>
          </Text>
          <Custominput 
          placeholder="********" 
          value={RetypeNewPassword} 
          setValue={setRetypeNewPassword}
          />

    </View>



    <View style={{width:'80%',flex:0.5,paddingTop:20}}>  

    <CustomButton  text="Confirm" onPress={onConfirmPressed}/>
    </View>
    </SafeAreaView>
  )
}
const Styles = StyleSheet.create({
  container: {
    
  
    alignItems: 'center',
    width:"80%",
    backgroundColor:'red',
    flex:1
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
});
export default ResetPassword