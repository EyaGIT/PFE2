import { View, Text,StyleSheet } from 'react-native'
import React,{useState}  from 'react'
import Custominput from '../../components/Custominput/Custominput'
import CustomButton from '../../components/CustomButton/CustomButton'

const CreateNewAccount = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const onContinuePressed = () => {
    console.warn("Continue");

}

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{justifyContent: "flex-start",flexDirection:"row",alignItems:"center",width:"90%"}}>
      <Text style={{fontSize: 33, color: '#394452',height:60 }}>Sign up to</Text> 
        <Text style={{fontSize: 33, color: '#E20522',height:60 }}> Cashless</Text>
    </View>
      
    <View style={Styles.container}>
        <View style={{width:"100%"}}>
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
          <View style={{width:"100%"}}>
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
          <View style={{width:"100%"}}>
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
          <View style={{width:"100%"}}>
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

          <View style={{width:"80%",paddingTop:20}}>
        <CustomButton  text="Continue " onPress={onContinuePressed}/>
        </View>

        <Text style={{paddingTop:20}}>
          <Text style={{color:'#858C94'}}>Already have an account ?</Text>
          <Text style={{color:'#E20522',fontWeight:'bold'}}> Sign in</Text>
       </Text>




    </View>
  )
}
   const Styles = StyleSheet.create({
  container: {
    
    
    
    alignItems: 'center',
    width:"80%"
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
});
export default CreateNewAccount