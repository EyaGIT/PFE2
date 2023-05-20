import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React,{useState,useLayoutEffect}  from 'react'
import Custominput from '../../components/Custominput/Custominput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native';
import PicherIm from '../../components/PickerIm/PicherIm'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
const CreateNewAccount = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');


  const navigation = useNavigation();
  const onContinuePressed = () => {
   navigation.navigate("Order Bracelet");

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
  })})

const onSigninPressed = () => {
  navigation.navigate("Sign in");

}

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
   <ScrollView style={{width:'100%',paddingLeft:20,paddingRight:30,height:180}}>
      <View style={{justifyContent: "flex-start",flexDirection:"row",alignItems:"center",height:150,width:'100%',paddingTop:110}}>
      <Text style={{fontSize: 33, color: '#394452',height:60 }}>Sign up to</Text> 
        <Text style={{fontSize: 33, color: '#E20522',height:60 }}> Cashless</Text>
    </View>
   
    <View style={{alignItems:"center",justifyContent:"center",width:"100%",height:170,paddingBottom:40}}> 
     <PicherIm/>
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
            <TouchableOpacity onPress={onContinuePressed}>
        <CustomButton  text="Continue "/>
        </TouchableOpacity>
        </View>

        <Text style={{paddingTop:10,paddingBottom:30}}>
          <Text style={{color:'#858C94'}}>Already have an account ?</Text>
          <TouchableOpacity onPress={onSigninPressed}  >
          <Text style={{color:'#E20522',fontWeight:'bold'}} > Sign in</Text></TouchableOpacity>
       </Text>

       </View>

       </ScrollView>
    </SafeAreaView>
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