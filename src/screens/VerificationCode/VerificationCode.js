import { View, Text, TextInput,StyleSheet, TouchableOpacity } from 'react-native'
import React,{useRef,useState} from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Custominput from '../../components/Custominput/Custominput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native';
import BackArrowB from '../../components/BackArrowB/BackArrowB'

const VerificationCode = () => {
 
   const firstInput = useRef()
   const secondInput = useRef()
   const thirdInput = useRef()
   const fourthInput = useRef()

   const {otp,setOtp}= useState({ 1:'', 2:'', 3:'', 4:''})
   const navigation = useNavigation();

   const onVerifyPressed = () => {
   
     navigation.navigate("Order Bracelet");
 
   }

   const onBackPressed = () => {
   
    navigation.navigate("Sign up");

  }


  return (
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={onBackPressed}> 
        <BackArrowB />
      </TouchableOpacity>
      
    <View style={{justifyContent: "flex-start",flexDirection:"row",alignItems:"center",width:"90%",paddingBottom:30}}>
      <Text style={{fontSize: 33, color: '#394452',height:60 }}>Verification Code</Text> 
      
    </View>
    <View style={Styles.otpcontainer }>
      <View style={Styles.otpBox}>
        <TextInput
        style={Styles.otpText}
        keyboardType='number-pad'
        maxLength={1}
        ref={firstInput}
        onChangeText={(text)=>{
          //setOtp({...otp, 1:text})
          text && secondInput.current.focus()
        }}
        />
      </View>
      <View style={Styles.otpBox}>
        <TextInput
         style={Styles.otpText} 
         keyboardType='number-pad'
         maxLength={1}
         ref={secondInput}
         onChangeText={(text)=>{
          //setOtp({...otp, 2:text})
          text ? thirdInput.current.focus():firstInput.current.focus()
        }}
         />
      </View>
      <View style={Styles.otpBox}>
        <TextInput 
        style={Styles.otpText}
         keyboardType='number-pad'
         maxLength={1}
         ref={thirdInput}
         onChangeText={(text)=>{
          //setOtp({...otp, 3:text})
          text ? fourthInput.current.focus():secondInput.current.focus()
        }}
         />
      </View>
      <View style={Styles.otpBox}>
        <TextInput 
        style={Styles.otpText} 
        keyboardType='number-pad'
        maxLength={1}
        ref={fourthInput}
        onChangeText={(text)=>{
            //setOtp({...otp, 4:text})
           !text && thirdInput.current.focus()
          }}
        />
      </View>

      
    </View>
    <View style={{width:"80%",paddingTop:20}} >
        <CustomButton  text="Verify " onPress={onVerifyPressed} />
        </View>

      <View>
      <Text style={{color:'#858C94',paddingTop:20}}>Resend code in 48 s </Text>

      </View>
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
  otpcontainer:{
    
   
   
    justifyContent:'space-evenly',
    alignItems:'center',
    flexDirection: 'row',
    marginBottom:20,
    marginHorizontal:20,
    width:'90%'


  },

  otpBox : {

    borderRadius:5,
    borderColor:Colors.DEFAULT_RED,
    borderWidth: 0.5,

  },
  otpText:{

    fontSize:25,
    color:Colors.DEFAULT_RED,
    padding:0,
    textAlign:'center',
    paddingHorizontal:18,
    paddingVertical:10,
 
  },
});

export default VerificationCode