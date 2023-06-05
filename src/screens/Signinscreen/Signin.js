import { View, Text,StyleSheet } from 'react-native'
import React,{useState,useLayoutEffect,useEffect} from 'react'
import Custominput from '../../components/Custominput/Custominput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native';
import {user_login,AllInfoUser} from "../../api/user_api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { socket } from "../../api/ApiManager";
const Signin = ({onLoginSuccess,onLoad,setUserInfo }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [emailError, setEmailError] = useState('');
const [passwordError, setPasswordError] = useState('');
const navigation=useNavigation();
const handleEmailChange = text => {
  setEmail(text);
  setEmailError('');
};

const handlePasswordChange = text => {
  setPassword(text);
  setPasswordError('');
};

  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    setEmail(text);
  if (re.test(text) || regex.test(text)) {
    setCheckValidEmail(false);
    setEmailError('');
  } else {
    setCheckValidEmail(true);
    setEmailError('Wrong email format');
  }
  };
/*
  const checkPasswordValidity = value => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return 'Password must not contain Whitespaces.';
    }
*/
   /* const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return 'Password must have at least one Uppercase Character.';
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return 'Password must have at least one Lowercase Character.';
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      return 'Password must contain at least one Digit.';
    }

    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(value)) {
      return 'Password must be 8-16 Characters Long.';
    }*/

    // const isContainsSymbol =
    //   /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    // if (!isContainsSymbol.test(value)) {
    //   return 'Password must contain at least one Special Symbol.';
    // }
/*
    return null;
  };*/
  useEffect(() => {
    
  }, []);
  useEffect(() => {
    const handleUserInfo = async (user, error) => {
      if (!error) {
        
        await setUserInfo(user);
        console.log(user)
        
      } else {
        
      }
    };
    socket.on('user_info', handleUserInfo);

       
    
  
    return () => {
      socket.off('user_info', handleUserInfo);
    };
  }, [setUserInfo]);

  const handleLogin = () => {
    onLoad(true);
  
    if (email === '') {
      alert('Please enter your email');
      onLoad(false);
      return;
    }
  
    if (password === '') {
      alert('Please enter your password');
      onLoad(false);
      return;
    }
  
    user_login({
      email: email.toLocaleLowerCase(),
      password: password,
    })
      .then(async result => {
        if (result.status === 200) {
          await AsyncStorage.setItem('AccessToken', result.data.token);
          await AsyncStorage.getItem('AccessToken').then(async token => {
            console.log(token);
            onLoginSuccess(token);
          }).catch(e => console.log(e));
        } else if (result.status === 404) {
          // If the status is 404, show a specific error message
          alert('The email does not exist. Please check your email.');
          onLoad(false);
        } else if (result.status === 401) {
          // If the status is 401, show a specific error message
          alert('Incorrect password. Please check your password.');
          onLoad(false);
        } else {
          // For all other failed status codes
          alert('Failed to login. Please check your email and password.');
          onLoad(false);
        }
      })
      .catch(err => {
        // In case of an error, show a more specific error message
        alert(`An error occurred during login: ${err.message}`);
        onLoad(false);
      });
  };
  

 

 

  const onSignInPressed = () => {
      console.warn("Sign in ");
     

  }
  const onforgetpasswordPressed = () => {
    
    navigation.navigate("Forget ¨Password");

  }
  const onsignupPressed = () => {
    
    
    navigation.navigate("Sign up");

  }
  
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false,
    })
  }, [])
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor:'#FFFFFF'}}>
      <View style={{justifyContent: "flex-start",flexDirection:"row",alignItems:"center",width:"90%",paddingBottom:30}}>
        <Text style={{fontSize: 33, color: '#394452',height:60 }}>Sign in to</Text> 
        <Text style={{fontSize: 33, color: '#E20522',height:60 }}> Cashless</Text>
      </View>
      <View style={Styles.container}>
        <View style={{width:"100%"}}>
          <Text>
          <Text> Email  </Text>
          <Text style={{color:'red'}}> *</Text>
          </Text>
          {emailError !== '' && <Text style={Styles.textFailed}>{emailError}</Text>}
          
          <Custominput 
          placeholder="Email" 
          value={email} 
          setValue={setEmail}
          onChangeText={handleEmailChange}
          keyboard="email-address"
          
          />
         
          </View>
        
        <View style={{width:"100%"}}>
          <Text>
          <Text> Password</Text>
          <Text style={{color:'red'}}> *</Text>
          </Text>
          {passwordError !== '' && <Text style={Styles.textFailed}>{passwordError}</Text>}
          <Custominput
           placeholder="Password" 
           value={password} 
           setValue={setPassword}
           onChangeText={handlePasswordChange}
           secureTextEntry={true}
           /></View>

      </View>
        <View style={{width:"60%"}}>
        <CustomButton  text="Sign in " onPress={handleLogin}/>
        </View>
        
       {/*} <Text style={{paddingTop:30}}>
          <Text style={{color:'#E20522',fontWeight:'bold'}}  onPress={onforgetpasswordPressed}> Forgot the password ?</Text>
  </Text>{*/}
         
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
  textFailed:{

    color: 'red',
    fontSize: 14,
    marginTop: 5,
  }
});
export default Signin