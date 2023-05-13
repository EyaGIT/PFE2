import { View, Text,StyleSheet,SafeAreaView } from 'react-native'
import React,{useState,useLayoutEffect} from 'react'
import Custominput from '../../components/Custominput/Custominput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native';


const ForgetPassword = () => {
  const navigation = useNavigation();
    const [email, setEmail] = useState('');

    const onContinuePressed = () => {
        navigation.navigate("Reset Password");
    }
        

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
      })
    }, [])



  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center',marginLeft:20,marginRight:20 }}>

    <View style={{justifyContent: "flex-start",flexDirection:"row",alignItems:"center",width:'100%'}}>
     <Text style={{fontSize: 33, color: '#394452',height:60 }}>Forget password</Text> 
     </View>

     <View style={{paddingTop:30,width:'100%'}}>
     <Text style={{fontSize: 15, color: '#394452'}}>Please enter your email, we will confirm the password change via email</Text>
     </View> 

     <View style={{paddingTop:30,width:'100%'}}>
          <Text>
          <Text> Email</Text>
          <Text style={{color:'red'}}> *</Text>
          </Text>
          <Custominput
           placeholder="Email" 
           value={email} 
           setValue={setEmail}
           secureTextEntry={true}
           /></View>


        <View style={{paddingTop:30,width:'100%'}}>
        <CustomButton  text="Continue " onPress={onContinuePressed}/>
        </View>
    </SafeAreaView>
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

export default ForgetPassword