import { View, Text,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import Custominput from '../../components/Custominput/Custominput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native';
const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

 

  const onSignInPressed = () => {
      console.warn("Sign in ");
     }
  const onforgetpasswordPressed = () => {
    
    navigation.navigate("Forget ¨Password");

  }
  const onsignupPressed = () => {
    
    
    navigation.navigate("Sign up");

  }
  
 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{justifyContent: "flex-start",flexDirection:"row",alignItems:"center",width:"90%",paddingBottom:30}}>
        <Text style={{fontSize: 33, color: '#394452',height:60 }}>Sign in to</Text> 
        <Text style={{fontSize: 33, color: '#E20522',height:60 }}> Cashless</Text>
      </View>
      <View style={Styles.container}>
        <View style={{width:"100%"}}>
          <Text>
          <Text> Email or Phone Number </Text>
          <Text style={{color:'red'}}> *</Text>
          </Text>
          <Custominput 
          placeholder="Username" 
          value={username} 
          setValue={setUsername}
          />
          </View>
        
        <View style={{width:"100%"}}>
          <Text>
          <Text> Password</Text>
          <Text style={{color:'red'}}> *</Text>
          </Text>
          <Custominput
           placeholder="Password" 
           value={password} 
           setValue={setPassword}
           secureTextEntry={true}
           /></View>
      </View>
        <View style={{width:"80%"}}>
        <CustomButton  text="Sign in " onPress={onSignInPressed}/>
        </View>
        
        <Text style={{paddingTop:30}}>
          <Text style={{color:'#E20522',fontWeight:'bold'}}  onPress={onforgetpasswordPressed}> Forgot the password ?</Text>
       </Text>
         
       <Text style={{paddingTop:40}}>
          <Text style={{color:'#858C94'}}> Don’t have an account ?</Text>
          <Text style={{color:'#E20522',fontWeight:'bold'}} onPress={onsignupPressed}> Sign up</Text>
       </Text>


       </View>
  )
}
const Styles = StyleSheet.create({
  container: {
    
    paddingBottom:30,
    
    alignItems: 'center',
    width:"80%"
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
});
export default Signin