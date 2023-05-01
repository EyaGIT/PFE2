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

const Stack = createNativeStackNavigator();


const Navigation = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Verification code" component={VerificationCode}/>
      <Stack.Screen name="Sign in" component={Signin}/>
      <Stack.Screen name="Order Bracelet" component={OrderBracelet}/>
      <Stack.Screen name="Reset Password" component={ResetPassword}/>
      <Stack.Screen name="Forget ¨Password" component={ForgetPassword}/>
      <Stack.Screen name="Sign up" component={CreateNewAccount}/>
 
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;
