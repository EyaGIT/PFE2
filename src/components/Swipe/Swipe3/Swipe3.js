import { View, Text,Image,ScrollView ,Dimensions} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import SuccessAvatar from '../../../../assets/images/SuccessAvatar.png'
import CustomButton from '../../CustomButton/CustomButton';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const Swipe3 = ({handellogin}) => {

    const onConfirmPressed = () => {
      handellogin();
        console.warn("Sign in ");
       
  
    }
  return (
    <SafeAreaView style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
    <ScrollView style={{width:screenWidth,height:screenHeight}} showsVerticalScrollIndicator={false}>
    <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
    <View style={{alignItems:'center',justifyContent:'center',paddingTop:50}}>
      <Image source={SuccessAvatar} />
    </View>

    <View style={{alignItems:'center',justifyContent:'center',flex:2}}>

        <Text style={{fontSize: 30, color: 'black',fontWeight: 'bold',paddingTop:40}}>Member created</Text>
    </View>
    
    <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text style={{paddingTop:10}}>
        Congrats ! we have successfully
        </Text>
        <Text> created a new member</Text>
    </View>

    

    </View>
    </ScrollView>
    </SafeAreaView>

    
  )
}

export default Swipe3