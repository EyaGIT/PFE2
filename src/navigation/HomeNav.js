import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import OrderBracelet from '../screens/OrderBracelet/OrderBracelet';
import ResetPassword from '../screens/ResetPassword/ResetPassword';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import NewMember1 from '../screens/NewMember1/NewMember1';
import essai from '../screens/essai/essai';
import SendMoney from '../screens/SendMoney/SendMoney';
import Receipt from '../screens/Receipt/Receipt';
import Member from '../screens/Member/Member';
import Map from '../screens/Map/Map';

const Tab = createBottomTabNavigator();

function HomeNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Member" component={Member} />
      <Tab.Screen name="SendMoney" component={SendMoney} />
      <Tab.Screen name="Receipt" component={Receipt} />
    </Tab.Navigator>
  );
}
export default HomeNav;