import React,{useEffect} from 'react';
import {StyleSheet,Image} from 'react-native';
import { createBottomTabNavigator,transparent,Dimensions } from '@react-navigation/bottom-tabs'
import OrderBracelet from '../screens/OrderBracelet/OrderBracelet';
import ResetPassword from '../screens/ResetPassword/ResetPassword';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import NewMember1 from '../screens/NewMember1/NewMember1';
import essai from '../screens/essai/essai';
import SendMoney from '../screens/SendMoney/SendMoney';
import Receipt from '../screens/Receipt/Receipt';
import Member from '../screens/Member/Member';
import Map from '../screens/Map/Map';
import CustomTabBarButton from '../components/CustomTabBarButton/CustomTabBarButton'
import Home from "../../assets/images/icons/Home.png";
import HomeOutline from "../../assets/images/icons/Home_outline.png";
import Maps from "../../assets/images/icons/Maps.png";
import MapsOutline from "../../assets/images/icons/Maps_outline.png";
import Hist from "../../assets/images/icons/Hist.png";
import HistOutline from "../../assets/images/icons/Hist_outline.png";
import Settings from "../../assets/images/icons/Settings.png";
import SettingsOutline from "../../assets/images/icons/Settings_outline.png";
import Static from "../../assets/images/icons/Static.png";
import StaticOutline from "../../assets/images/icons/Static_outline.png";
import Settings1 from '../screens/Settings1/Settings1'
import Historique from '../screens/Historique/Historique';
import Statistics  from "../screens/Statistics/Statistics";
const Tab = createBottomTabNavigator();

function HomeNav({onLogoutSuccess,onLoad,userInfo}) {
  useEffect(() => {
    // ...existing code...

     // Update the user information state
    });
  
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={({route})=>({
      HeaderShown:false,
      tabBarShowLabel: false,
      tabBarStyle:styles.TabBarStyle,
      tabBarActiveTintColor:'red',
      tabBarInactiveTintColor: 'black',
      tabBarIcon: ({color, size, focused}) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? HomeOutline : HomeOutline;
        } else if (route.name === 'Map') {
          iconName = focused ? Maps : MapsOutline;
        } else if (route.name === 'History') {
          iconName = focused ? Hist : HistOutline;
        } else if (route.name === 'Settings') {
          iconName = focused
            ? Settings
            : SettingsOutline;
        }else if (route.name === 'Statistics') {
          iconName = focused
            ? Static
            : StaticOutline;
        }

        return <Image source={iconName} style={{width:30,height:30}} />;
      },
      
    })}>
      
      <Tab.Screen name="Map" component={Map} options={{tabBarButton: props => <CustomTabBarButton route='Map' {... props} />, headerStyle: {
    backgroundColor: 'red',
  }}}/>
      <Tab.Screen name="History" options={{tabBarButton: props => <CustomTabBarButton route='History' {... props} />}} >
      {props => <Historique {...props} userInfo={userInfo} />}
      </Tab.Screen>
      
      <Tab.Screen name="Home" options={{tabBarButton: props => <CustomTabBarButton route='Home' {... props} />,headerTitle: null,}} >
      {props => <HomeScreen {...props} userInfo={userInfo} />}
      </Tab.Screen>
      <Tab.Screen name="Statistics" component={Statistics} options={{tabBarButton: props => <CustomTabBarButton route='Static' {... props} />, headerTitleStyle: {
      fontWeight: 'normal',
    },}} />
      
      <Tab.Screen name="Settings" options={{tabBarButton: props => <CustomTabBarButton route='Settings' {... props} />}} >
            {(props) => <Settings1 {...props} onLogoutSuccess={onLogoutSuccess} onLoad={onLoad} userInfo={userInfo} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  TabBarStyle:{
    
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 10,
      shadowRadius: 50,
          
      position: 'absolute',
      alignItems:'center',
      backgroundColor:'rgb(255,255,255)',
      justifyContent:'space-between',
      elevation: 18,
      padding:0,
      margin:0,
      borderTopWidth: 0,
      
    height: 60,
  }
})
export default HomeNav;