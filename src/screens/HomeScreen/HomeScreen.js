import { StyleSheet,View, Text,Image,TouchableOpacity,ScrollView,Dimensions,StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect,useState } from 'react'
import {useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import PopUp from '../../components/PopUp/PopUp';
import SendMoneyAll from '../SendMoneyAll/SendMoneyAll';

import tran from '../../../assets/images/tran.png'
import bra from '../../../assets/images/bra.png'
import hist from '../../../assets/images/hist.png'
import not from '../../../assets/images/not.png'
import udemy from '../../../assets/images/udemy.png'
import card from '../../../assets/images/card.png'
import card2 from '../../../assets/images/card2.png'
import avatar from '../../../assets/images/avatar.png'
import proAvatar from '../../../assets/images/proAvatar.png'
import wallet from '../../../assets/images/Wallet.png'
import AsyncStorage from '@react-native-async-storage/async-storage';


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const HomeScreen = () => {
  const [Visible,setVisible]=useState(false);
  const [Amount,setAmount]=useState(0);
  const navigation = useNavigation();
  AsyncStorage.getItem('user')
  .then(userString => {
    // Check if user exists in storage
    if (userString) {
      // User found, parse user string to JavaScript object
      const user = JSON.parse(userString);
      setAmount(user.bracelets[0].amount)
      
      // Do something with the user object
    } else {
      // User not found in storage
      console.log('User not found in storage.');
    }
  })
  .catch(error => {
    console.log(error);
  });
 

  const onviewallPressed = () => {
    navigation.navigate("Contacts");
     }
     const onTransressed = () => {
      navigation.navigate("Send Money All");
       }
  const onNotificationPressed = () => {
      navigation.navigate("Notifications");
       }

       const onTopUpPressed = () => {
        navigation.navigate("Top Up");
         }
  
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false,
    })
  }, [])
  return (
      
        <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 1}} locations={[0,0.6]} colors={['#E20522', '#000000']} style={styles.linearGradient}>
          
          <SafeAreaView style={styles.SafeAreaView}>
          <StatusBar barStyle="light-content" backgroundColor={'transparent'} translucent={true} />
            
          <ScrollView style={styles.scrollView}  showsVerticalScrollIndicator={false}>
          
          <View style={styles.head}>
              <View style={styles.nav}>
                <View style={{borderRadius:25,borderColor:"white",borderWidth:2,width:45,height:45,justifyContent:"center",alignItems:'center'}}><Image source={proAvatar} style={{width:'102%',height:'102%',borderRadius:25}} /></View>
                <TouchableOpacity style={{width:45,height:45,justifyContent:'center',alignItems:'center', borderColor:"white",borderWidth:0,borderRadius:17}} onPress={onNotificationPressed}>
                  <Image source={not} style={{width:26,height:28}} />
                </TouchableOpacity>
              </View>
              <View style={styles.money}>
                <Text style={{textAlign: 'center',fontSize: 13,color:'#AD9CDB'}}>Available Balance</Text>
                <Text style={{textAlign: 'center',fontWeight: 'bold',fontSize: 40,color:'#FFFFFF'}}>{Amount} TND</Text>
              </View>
          </View>
          
          <SafeAreaView style={{ position: 'absolute', elevation: 3,zIndex: 3,flex:1,width:'100%',height:110,top:screenHeight/4.7 }}>
                
                <View style={{width:'100%',height:50,alignItems: 'center',justifyContent:'center',height:'100%'}}>
                  <View style={styles.menu}>
                  <TouchableOpacity onPress={onTopUpPressed}>
                    <View style={styles.flex}>
                      
                    <Image source={wallet} style={{width:33,height:30}} />
                    <Text>Top Up</Text>
                    
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={onTransressed}>
                    <View style={styles.flex}>
                    
                    <Image source={tran} style={{width:30,height:30}} />
                    <Text>Transfer</Text>
                    
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=> setVisible(true)}>
                    <View style={styles.flex}>
                    
                    <Image source={bra} style={{width:30,height:30}} />
                    <Text>Braclet</Text>
                    
                    </View>
                    </TouchableOpacity>
                    <PopUp
                isVisible={Visible}
                onClose={()=> setVisible(false)}
                message='your '
                />
                    
                    
                    
                  </View>
                </View>
                
          </SafeAreaView>
          
          <View style={styles.body}>
          
            <View style={{marginTop:70,width:'100%',marginBottom:10}}>
              <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{fontSize:25,fontWeight:'bold'}}>Members</Text>
                <View>
                  <TouchableOpacity onPress={onviewallPressed}>
                  <Text>View All</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flexDirection:"row",marginTop:10}}>
                <TouchableOpacity style={{alignItems:"center",marginRight:18}} onPress={() => navigation.navigate('Member')}>
                <Image source={avatar} style={{width:45,height:45,borderRadius:10}} />
                <Text>Hena</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center",marginRight:18}} onPress={() => navigation.navigate('Member')}>
                <Image source={avatar} style={{width:45,height:45,borderRadius:10}} />
                <Text>Hena</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignItems:"center",marginRight:18}} onPress={() => navigation.navigate('New Member1')}>
                  <View style={{width:45,height:45,borderRadius:10, backgroundColor:'rgba(142, 147, 153, 0.24)',alignItems:"center",justifyContent:"center",padding:0}}>
                    <Text style={{fontSize:35,margin:0,padding:0,textAlignVertical:'bottom',textAlign:'center',lineHeight:47}}>+</Text>
                  </View>
                  
                
                
                </TouchableOpacity>
              </View>
            </View>


            <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{fontSize:25,fontWeight:'bold'}}>Transaction</Text>
                <View>
                  <TouchableOpacity>
                  <Text>Today</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flexDirection:'column',width:'100%',alignItems:'center',justifyContent:'space-between'}}>
                <TouchableOpacity style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-between', backgroundColor:'#F8F8F8',paddingLeft:25,paddingRight:25,height:70,marginTop:10,borderRadius:20}}>
                <Image source={udemy} style={{width:20}} />
                <View style={{flex:1,paddingLeft:20,paddingRight:20}}>
                <Text style={{fontWeight:'bold',fontSize:20}}>Udemy</Text>
                <Text>payment</Text>
                </View>
                <Text>-$165.00</Text>
                </TouchableOpacity>


                <TouchableOpacity style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-between', backgroundColor:'#F8F8F8',paddingLeft:25,paddingRight:25,height:70,marginTop:10,borderRadius:20}}>
                <Image source={udemy} style={{width:20}} />
                <View style={{flex:1,paddingLeft:20,paddingRight:20}}>
                <Text style={{fontWeight:'bold',fontSize:20}}>Amazon</Text>
                <Text>payment</Text>
                </View>
                <Text>-$165.00</Text>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-between',paddingTop:10}}>
                <Text style={{fontSize:25,fontWeight:'bold'}}>Promo & Discount</Text>
               
              </View>
              <View>
              <SafeAreaView >
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <Image source={card} style={{width:300,marginRight:10}} />
      <Image source={card2} style={{width:300}} />
      </ScrollView>
    </SafeAreaView>
                
              </View>
            
          </View>
          </ScrollView>
          </SafeAreaView>
        </LinearGradient>
        
      

      
    
    
  )
}
const styles = StyleSheet.create({
  scrollView: {
    width:screenWidth,
    
    height:screenHeight,
  },
  flex:{alignItems: 'center',
  justifyContent:'center',},
  menu:{
    
    paddingLeft:37,
    paddingRight:37,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    backgroundColor:'#FFFFFF',
    width:'78%',height:'93%',
    borderRadius:20,
    shadowColor: "#000000",
    shadowOffset: {
    width: 0,
    height: 8,
},
shadowOpacity:  0.21,
shadowRadius: 8.19,
elevation: 11
  },
  linearGradient: {
    flex:1
    
  },
  SafeAreaView:{
    flex:1
  },
  nav:{
    flex:1.5,
    paddingLeft:30,
    paddingRight:30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
  },
  money:{
    
    flex:2.5
  },
head:{
  zIndex: 2,
  height:screenHeight / 3.4,
flex:1
},
body:{
  paddingtop:10,
  paddingLeft:25,
  paddingRight:25,
  zIndex: 2,
  backgroundColor:'#F2F2F2',
  borderTopLeftRadius:45,
  borderTopRightRadius:45,
  flex:2,
  minHeight: screenHeight/1.1,
  
  
  }
})

export default HomeScreen