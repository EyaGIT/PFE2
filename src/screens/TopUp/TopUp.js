import { StyleSheet,View, Text,Image,TouchableOpacity,ScrollView,Dimensions,StatusBar,TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect,useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import { RadioButton } from 'react-native-paper';
import mastercard from '../../../assets/images/mastercard.png'
import addnewcard from '../../../assets/images/addnewcard.png'
import CustomButton from '../../components/CustomButton/CustomButton';
import {addAmount,AllInfoUser} from "../../api/user_api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import arrow from '../../../assets/images/icons/ArrowBack.png'
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const TopUp = () => {
    const [Montant, setMontant] = useState('');
    const [checked, setChecked] = React.useState('first');
    [isAddingMoney, setIsAddingMoney] = useState(false);
    
  const navigation = useNavigation();

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
      fontSize: 35,fontWeight:'100'},
        
      headerLeft: () => (
        <TouchableOpacity
          style={{
            width: 45,
            height: 45,
            borderRadius: 25,
            borderColor: 'white',
            borderWidth: 2,
            marginLeft: 20,
            marginRight:30,
            marginBottom:15,
            marginTop:15,
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
  placeholder="20"
  value={Montant}
  keyboardType="numeric"
  onChangeText={setMontant}
  
  
  />
  <Text style={{fontSize:30,fontWeight:'500',color:"#000000",paddingLeft:30}}>TND</Text>
  </View>
</View>

<View style={{flexDirection:'row',paddingLeft:15,justifyContent:'space-between'}}>
   <TouchableOpacity style={{backgroundColor:"#EBEBEB",borderRadius:15,borderColor:'#EBEBEB',width:90,height:50,alignItems:"center",justifyContent:"center",flexDirection:"row"}} onPress={() => setMontant('100')} >
<Text>
    <Text style={{color:'#E20522'}} >100</Text>
    <Text style={{fontSize:10,fontWeight:'100',color:"#000000"}}>   TND</Text>
</Text>
   </TouchableOpacity>
   <TouchableOpacity style={{backgroundColor:"#EBEBEB",borderRadius:15,borderColor:'#EBEBEB',width:90,height:50,alignItems:"center",justifyContent:"center",flexDirection:"row"}} onPress={() => setMontant('200')}>
<Text>
    <Text style={{color:'#E20522'}}>200</Text>
    <Text style={{fontSize:10,fontWeight:'100',color:"#000000"}}>   TND</Text>
</Text>
   </TouchableOpacity>
   <TouchableOpacity style={{backgroundColor:"#EBEBEB",borderRadius:15,borderColor:'#EBEBEB',width:90,height:50,alignItems:"center",justifyContent:"center",flexDirection:"row"}} onPress={() => setMontant('300')}>
<Text>
    <Text style={{color:'#E20522'}}>300</Text>
    <Text style={{fontSize:10,fontWeight:'100',color:"#000000"}}>   TND</Text>
</Text>
   </TouchableOpacity>

</View>

<View style={{paddingTop:10,alignItems:'center', justifyContent:'center',paddingLeft:20,paddingRight:20,marginBottom:30}}>
<View style={{width:'100%',paddingBottom:25,paddingTop:15}}>
    <Text style={{color:'#8E9399'}}>Select Card</Text>
</View>
<View style={{backgroundColor:"#EBEBEB",borderRadius:30,borderColor:'#EBEBEB',width:"100%",minHeight:100,alignItems:'center',justifyContent:'center',flexDirection:"column"}}>
<View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',height:80}}>
      <View style={{width:'90%',height:100,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <View style={{width:'25%',alignItems:'center'}}>
                        <Image  source={mastercard} />
                </View>
                <View style={{paddingLeft:5,flexDirection:'column',width:'70%',width:'50%'}}>
                    <View style={{}}>
                
                    <Text style={{color:'#000000',fontSize:13}}>Mastercard</Text>
                    <Text >**** **** **** **22</Text>
                    
                  </View>
                </View>
                <View style={{width:80,alignItems:'center'}}>
                <RadioButton
                value="Female"
                status={ checked === 'Female' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('Female')}
                color='#E20522'
                />
                </View>
</View>
</View >
<View style={{width:"101%",borderColor:'#F2F2F2',alignSelf:'center',borderTopWidth:1.4}}></View>
<View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',height:80}}>
      <View style={{width:'90%',height:100,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <View style={{width:'25%',alignItems:'center'}}>
                        <Image  source={mastercard} />
                </View>
                <View style={{paddingLeft:5,flexDirection:'column',width:'70%',width:'50%'}}>
                    <View style={{}}>
                
                    <Text style={{color:'#000000',fontSize:13}}>Mastercard</Text>
                    <Text >**** **** **** **22</Text>
                    
                  </View>
                </View>
                <View style={{width:80,alignItems:'center'}}>
                <RadioButton
                value="Male"
                status={ checked === 'Male' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('Male')}
                color='#E20522'
                />
                </View>
</View>
</View >
<View style={{width:"101%",borderColor:'#F2F2F2',alignSelf:'center',borderTopWidth:1.4}}></View>
<View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',height:80}}>
      <View style={{flex:1,width:'90%',flexDirection:'row',alignItems:'center',justifyContent:'center',paddingRight:80}}>
                <View style={{width:'25%',alignItems:'center'}}>
                        <Image  source={addnewcard} />
                </View>
                <View style={{height:50,paddingLeft:10,flexDirection:'column'}}>
                    <View >
                
                    <Text style={{color:'#000000',fontSize:13}}>Mastercard</Text>
                    <Text >**** **** **** **22</Text>
                    
                  </View>
                </View>
               
</View>
</View >



  </View>
  <View style={{width:"80%",paddingTop:20}}>
        <CustomButton  text="Top Up " onPress={addamount} />
        </View>
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