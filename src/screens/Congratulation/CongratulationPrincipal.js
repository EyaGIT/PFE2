import { View, Text,Image,ScrollView ,Dimensions} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton/CustomButton';
import SuccessAvatar from '../../../assets/images/Succ.png'
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const CongratulationPrincipal = ({handellogin}) => {

    const onConfirmPressed = () => {
      handellogin();
        console.warn("Sign in ");
       
  
    }
  return (
    <SafeAreaView style={{alignItems:'center',justifyContent:'center',flexDirection:'row', backgroundColor:'#FFFFFF'}}>
    <ScrollView style={{width:screenWidth,height:screenHeight}} showsVerticalScrollIndicator={false}>
    <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
    <View style={{alignItems:'center',justifyContent:'center',paddingTop:100}}>
      <Image source={SuccessAvatar} style={{width:150,height:150}} />
    </View>

    
    
    <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text style={{paddingTop:10,fontSize:20}}>
        Congrats ! you have successfully
        </Text>
        <Text style={{fontSize:20}}> created your account</Text>
    </View>

    <View style={{width:"50%",alignItems:'center',justifyContent:'center',marginTop:30}}>
        <CustomButton  text="Sign in"  />
        </View>


    </View>
    </ScrollView>
    </SafeAreaView>

    
  )
}

export default CongratulationPrincipal