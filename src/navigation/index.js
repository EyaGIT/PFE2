import { View, Text } from 'react-native';
import React,{useState,useEffect} from 'react';
import {AllInfoUser} from "../api/user_api";
import AsyncStorage from '@react-native-async-storage/async-storage';
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
import Map from '../screens/Map/Map';import HomeNav from './HomeNav';
import PicherIm from '../components/PickerIm/PicherIm';
import Settings from '../screens/Settings1/Settings1';
import Limits from '../screens/Limits/Limits';
import EditProfil from '../screens/EditProfil/EditProfil';
import Contacts from '../screens/Contacts/Contacts';
import Notifications from '../screens/Notifications/Notifications';
import TopUp from '../screens/TopUp/TopUp';
import Historique from '../screens/Historique/Historique';
import SendMoneyAll from '../screens/SendMoneyAll/SendMoneyAll';
import LoadingPage from '../screens/LoadingPage/LoadingPage';
import Security from '../screens/Security/Security';
import Camera from '../screens/Camera/Camera';
import NetInfo from '@react-native-community/netinfo';
import { socket } from "../api/ApiManager";
import Settingsmember from '../screens/Settingsmember/Settingsmember';
import OrderBracelet2 from '../screens/OrderBracelet2/OrderBracelet2';
import CongratulationPrincipal from '../screens/Congratulation/CongratulationPrincipal';


import Statistics from '../screens/Statistics/Statistics';
const Stack = createNativeStackNavigator();



const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [isConnected, setIsConnected] = useState(true);
  const [isSignin, setIsSignin] = useState(false);
  const handleLoginSuccess = async (token) => {
    
    setIsLoggedIn(true);
      
    
  };

  const handleLogoutSuccess = async () => {
    
    setIsLoading(true)
    
    await AsyncStorage.removeItem('AccessToken');
    setUserInfo(null);
    socket.disconnect();
    setIsLoggedIn(false);
  }
  const handleLoad = (test)=>{
    
    setIsLoading(test)
  }
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
  
    return () => {
      unsubscribe();
    };
  }, []);
  
  useEffect(() => {
    
    }, []);
    useEffect(() => {
      const handleUserInfo = async (user, error) => {
        if (!error) {
          
          await setUserInfo(user);
          console.log(userInfo)
          setIsSignin(true)
          setIsLoggedIn(true);
          setIsLoading(false);
        } else {
          setIsLoggedIn(false);
          setIsLoading(false);
        }
      };
      socket.on('user_info', handleUserInfo);
      if (isConnected) {
        
        
    
        setIsLoading(true);
        if (isLoggedIn === false) {
          AsyncStorage.getItem('AccessToken')
            .then(token => {
              if (token) {
                console.log(token)
                socket.connect();
                socket.emit('login', token);
                
                
              // Redirect to the desired screen in the stack navigator
              
              
              } else {
                setIsLoggedIn(false);
                setIsLoading(false);
              }
            })
            .catch(error => {
              console.error(error);
              setIsLoggedIn(false);
              setIsLoading(false);
            });
        }
         else {
          console.log("hhhhh")
          AsyncStorage.getItem('AccessToken')
            .then(token => {
              if (token) {
                console.log(token,"hhh")
                socket.connect();
                socket.emit('login', token);
                
                
              // Redirect to the desired screen in the stack navigator
              
              
              } else {
                setIsLoggedIn(false);
                setIsLoading(false);
              }
            })
            .catch(error => {
              console.error(error);
              setIsLoggedIn(false);
              setIsLoading(false);
            });
          console.log('emchy plz')        }
      } else {
        setIsLoading(true);
        setIsLoggedIn(false);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    
      return () => {
        socket.off('user_info', handleUserInfo);
      };
    }, [isConnected, isLoggedIn]);
    
  return (
    <NavigationContainer >
      <Stack.Navigator >
     
      
      {isLoading ? (
      <Stack.Screen name="Load" component={LoadingPage} options={{headerShown:false}}/>
      ):(
      isLoggedIn ? (
      <>
      {console.log(userInfo)}
      
      <Stack.Screen name="HomeNav" options={{headerShown:false}}>
            {(props) => <HomeNav {...props} onLogoutSuccess={handleLogoutSuccess} onLoad={handleLoad} userInfo={userInfo} />}
          </Stack.Screen>
      <Stack.Screen name="Order Bracelet" component={OrderBracelet}/>
      <Stack.Screen name="Map" component={Map}/>
      <Stack.Screen name="Home Screen" component={HomeScreen}/>
     
      <Stack.Screen name="Member" component={Member}/>
      <Stack.Screen name="Receipt" component={Receipt}/>
      <Stack.Screen name="Send Money" component={SendMoney}/>
      <Stack.Screen name="New Member1" component={NewMember1}/>
      <Stack.Screen name="Verification code" component={VerificationCode}/>
      
      <Stack.Screen name="Send Money All">
            {(props) => <SendMoneyAll {...props} userInfo={userInfo} />}
      </Stack.Screen>
      <Stack.Screen name="Historique" component={Historique}/>
      <Stack.Screen name="Security" component={Security}/>
      
      <Stack.Screen name="Top Up">
            {(props) => <TopUp {...props} userInfo={userInfo} />}
      </Stack.Screen>
      <Stack.Screen name="Congratinscri" component={CongratulationPrincipal}/> 
      <Stack.Screen name="Order Bracelet2" component={OrderBracelet2}/> 
      <Stack.Screen name="Notifications" component={Notifications}/>
      <Stack.Screen name="Settings member" component={Settingsmember}/>
      <Stack.Screen name="Contacts">
            {(props) => <Contacts {...props} userInfo={userInfo} />}
      </Stack.Screen>
      
      <Stack.Screen name="Edit Profil" component={EditProfil}/>
      <Stack.Screen name="Essai" component={essai}/> 
      <Stack.Screen name="Limits" component={Limits}/>

      </>
      ) : (
        <>
        
        <Stack.Screen name="Sign in">
            {(props) => <Signin {...props} onLoginSuccess={handleLoginSuccess} onLoad={handleLoad} setUserInfo={setUserInfo} />}
          </Stack.Screen>
      
      <Stack.Screen name="Reset Password" component={ResetPassword}/>
      
      <Stack.Screen name="Forget ¨Password" component={ForgetPassword}/>
      <Stack.Screen name="Sign up" component={CreateNewAccount}/>
      <Stack.Screen name="Order Bracelet" component={OrderBracelet}/>
      </>
      )
      )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;
