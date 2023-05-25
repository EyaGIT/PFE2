import { StyleSheet,View, Text,Image,TouchableOpacity,ScrollView,Dimensions,StatusBar,TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect,useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import { RadioButton } from 'react-native-paper';
import mastercard from '../../../assets/images/mastercard.png'
import addnewcard from '../../../assets/images/addnewcard.png'
import CustomButton from '../../components/CustomButton/CustomButton';
import {addAmount,AllInfoUser} from "../../api/user_api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import arrow from '../../../assets/images/icons/ArrowBack.png';
import { socket } from "../../api/ApiManager";
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const TopUp = () => {
    const [Montant, setMontant] = useState('');
    const [checked, setChecked] = React.useState('first');
    [isAddingMoney, setIsAddingMoney] = useState(false);
    
  const navigation = useNavigation();
  useEffect(() => {
    // Subscribe to the 'moneyAdded' event
    //socket.emit('get_user_info',result.data._id);
    });
  const addamount = async  () =>{
    if (!isAddingMoney) {
      setIsAddingMoney(true);
    await AsyncStorage.getItem('user')
    .then(async userString => {
      // Check if user exists in storage
      if (userString) {
        // User found, parse user string to JavaScript object
        const user = JSON.parse(userString);
        token = await AsyncStorage.getItem('AccessToken').then(async token=>{
          await addAmount({
            id: user.bracelets[0]._id,
            amount: parseInt(Montant,10),
          },token).then(async result => {
              
            
              if (result.status == 200) {
                
                await AllInfoUser(token).then(result =>{
                  if (result.status == 200) {
                  AsyncStorage.setItem('user', JSON.stringify(result.data));
                  //socket.emit('get_user_info',result.data._id);
                  
                  navigation.replace('HomeNav');
                }else if (result.status== 401){
                    navigation.replace('Sign in');
                    }
               
                })}else if (result.status== 401){
                    console.log('Not your bracelet')
                    }
                  })
        });
        
        
              
        
        // Do something with the user object
      } else {
        // User not found in storage
        console.log('User not found in storage.');
      }
      
    })
    setIsAddingMoney(false);
  }}
    

  const onuserPressed = () => {
    navigation.navigate("Member");
     }
 

  const onplusPressed = () => {
    navigation.navigate("New Member1");
     }
  
   
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:true,
      headerTransparent:true,
      headerTitleAlign: 'center',
      headerTitleStyle: { alignSelf:'center',color: 'white' ,height:'100%',
      fontSize: 27,fontWeight:'100'},
        
      headerLeft: () => (
        <TouchableOpacity
          style={{
            width: 45,
            height: 45,
            borderRadius: 25,
            borderColor: 'white',
            borderWidth: 1,
            marginLeft: 10,
            marginRight:30,
            marginBottom:37,
            marginTop:37,
            justifyContent: 'center',
            alignItems: 'center',
            
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={arrow}
            style={{ width: '60%', height: '60%' }}
          />
        </TouchableOpacity>
      ),headerStyle: {
        
        height:'auto'
        
      
      

        
  
        },
    })
  }, [])
  return (
    <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 1}} locations={[0,0.6]} colors={['#E20522', '#000000']} style={styles.linearGradient}>
         
    <SafeAreaView style={styles.SafeAreaView}>
    <StatusBar barStyle="light-content" backgroundColor={'transparent'} translucent={true} />
   
      
    <ScrollView style={styles.scrollView}  showsVerticalScrollIndicator={false}>
    < View style={styles.head}>
              
              
          </View>
    

        <View style={styles.body}>
        <View style={{paddingTop:40,alignItems:'center', justifyContent:'center',paddingLeft:30,paddingRight:30,marginBottom:30}}>
<View style={{width:'100%',paddingBottom:25,}}>
    <Text style={{color:'#8E9399'}}>Amount</Text>
</View>
<View style={{backgroundColor:"#EBEBEB",borderRadius:30,borderColor:'#EBEBEB',width:230,height:100,alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
<TextInput 
  style={{fontSize:35,height:"100%",paddingLeft:40}}
  placeholder=""
  value={Montant}
  keyboardType="numeric"
  onChangeText={setMontant}
  
  
  />
  <Text style={{fontSize:30,fontWeight:'500',color:"#000000",paddingLeft:30}}>TND</Text>
  </View>
</View>
<View style={{flexDirection:'column'}}>
<View style={{flexDirection:'row',paddingLeft:15,justifyContent:'space-between'}}>
   <TouchableOpacity style={{backgroundColor:"#EBEBEB",borderRadius:15,borderColor:'#EBEBEB',width:90,height:50,alignItems:"center",justifyContent:"center",flexDirection:"row"}} onPress={() => setMontant('100')} >
<Text>
    <Text style={{color:'#E20522'}} >10</Text>
    <Text style={{fontSize:10,fontWeight:'100',color:"#000000"}}>   TND</Text>
</Text>
   </TouchableOpacity>
   <TouchableOpacity style={{backgroundColor:"#EBEBEB",borderRadius:15,borderColor:'#EBEBEB',width:90,height:50,alignItems:"center",justifyContent:"center",flexDirection:"row"}} onPress={() => setMontant('200')}>
<Text>
    <Text style={{color:'#E20522'}}>20</Text>
    <Text style={{fontSize:10,fontWeight:'100',color:"#000000"}}>   TND</Text>
</Text>
   </TouchableOpacity>
   <TouchableOpacity style={{backgroundColor:"#EBEBEB",borderRadius:15,borderColor:'#EBEBEB',width:90,height:50,alignItems:"center",justifyContent:"center",flexDirection:"row"}} onPress={() => setMontant('300')}>
<Text>
    <Text style={{color:'#E20522'}}>30</Text>
    <Text style={{fontSize:10,fontWeight:'100',color:"#000000"}}>   TND</Text>
</Text>
   </TouchableOpacity>
   

</View>
<View style={{flexDirection:'row',paddingLeft:15,justifyContent:'space-between',paddingTop:10}}>
   <TouchableOpacity style={{backgroundColor:"#EBEBEB",borderRadius:15,borderColor:'#EBEBEB',width:90,height:50,alignItems:"center",justifyContent:"center",flexDirection:"row"}} onPress={() => setMontant('100')} >
<Text>
    <Text style={{color:'#E20522'}} >50</Text>
    <Text style={{fontSize:10,fontWeight:'100',color:"#000000"}}>   TND</Text>
</Text>
   </TouchableOpacity>
   <TouchableOpacity style={{backgroundColor:"#EBEBEB",borderRadius:15,borderColor:'#EBEBEB',width:90,height:50,alignItems:"center",justifyContent:"center",flexDirection:"row"}} onPress={() => setMontant('200')}>
<Text>
    <Text style={{color:'#E20522'}}>60</Text>
    <Text style={{fontSize:10,fontWeight:'100',color:"#000000"}}>   TND</Text>
</Text>
   </TouchableOpacity>
   <TouchableOpacity style={{backgroundColor:"#EBEBEB",borderRadius:15,borderColor:'#EBEBEB',width:90,height:50,alignItems:"center",justifyContent:"center",flexDirection:"row"}} onPress={() => setMontant('300')}>
<Text>
    <Text style={{color:'#E20522'}}>70</Text>
    <Text style={{fontSize:10,fontWeight:'100',color:"#000000"}}>   TND</Text>
</Text>
   </TouchableOpacity>
   

</View>
</View>
        <View style={{width:"70%",paddingTop:40}}>
        <CustomButton  text="Top Up " onPress={addamount} />
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
    
    paddingLeft:25,
    paddingRight:25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    backgroundColor:'#FFFFFF',
    width:'87%',height:'100%',
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
    flex:2,
    paddingTop:30,
    paddingLeft:260,
    paddingRight:30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
  },
  
head:{
  zIndex: 2,
  height:screenHeight /5.2,
flex:1
},
body:{
  paddingtop:15,
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


export default TopUp