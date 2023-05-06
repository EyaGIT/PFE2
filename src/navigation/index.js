import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateNewAccount from '../screens/Createnewaccountscreen'
import Signin from '../screens/Signinscreen/Signin';
import VerificationCode from '../screens/VerificationCode/VerificationCode';
import ForgetPassword from '../screens/ForgetPassword/ForgetPassword';
import OrderBracelet from '../screens/OrderBracelet/OrderBracelet';
import ResetPassword from '../screens/ResetPassword/ResetPassword';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import NewMember1 from '../screens/NewMember1/NewMember1';
import essai from '../screens/essai/essai';
import Swipe1 from '../components/Swipe/Swipe1/Swipe1';
import SendMoney from '../screens/SendMoney/SendMoney';
import Receipt from '../screens/Receipt/Receipt';
import Member from '../screens/Member/Member';
import Map from '../screens/Map/Map';
const Stack = createNativeStackNavigator();


const Navigation = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Order Bracelet" component={OrderBracelet}/>
      <Stack.Screen name="Map" component={Map}/>
      <Stack.Screen name="Home Screen" component={HomeScreen}/>
      <Stack.Screen name="Member" component={Member}/>
      <Stack.Screen name="Receipt" component={Receipt}/>
      <Stack.Screen name="Send Money" component={SendMoney}/>
      <Stack.Screen name="New Member1" component={NewMember1}/>
      <Stack.Screen name="Essai" component={essai}/>
     
      <Stack.Screen name="Verification code" component={VerificationCode}/>
      <Stack.Screen name="Sign in" component={Signin}/>
      
      <Stack.Screen name="Reset Password" component={ResetPassword}/>
      <Stack.Screen name="Forget ¨Password" component={ForgetPassword}/>
      <Stack.Screen name="Sign up" component={CreateNewAccount}/>
 
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;
