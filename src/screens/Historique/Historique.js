import { StyleSheet,View, Text,Image,TouchableOpacity,ScrollView,Dimensions,StatusBar,TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect,useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import tacos from '../../../assets/images/Tacos.png'
import income from '../../../assets/images/income.png'
import expense from '../../../assets/images/expense.png'
import AvatarAnas from '../../../assets/images/AvatarAnas.png'
import Historydetails from '../../components/Historydetails/Historydetails';
import { format } from 'date-fns';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const Historique = ({userInfo}) => {
  const [Visible,setVisible]=useState(false);
  const navigation = useNavigation();
  const [Operation,setOperation]=useState([{}])
  const [sellingPoint,setSellingPoint]=useState({})
  useLayoutEffect(()=>{
      navigation.setOptions({
        headerShown:true,
        headerStyle:{
          backgroundColor:'#F2F2F2',
          elevation:0,
        }
        })})
  useEffect(() => {
    if(userInfo){
   setOperation(userInfo.bracelets[0].operations);
   console.log(Operation.map((item, index) => {
    if(item){
      console.log(item.amount,item.type);
    }
    
   }
    )
    
    )
    
  }}, [userInfo]);
  
  return (
    
         
    <SafeAreaView style={styles.SafeAreaView}>
   
   
      
    <ScrollView style={styles.scrollView}  showsVerticalScrollIndicator={false}>
    
    

        <View >
        {Operation.slice().reverse().map((item, index) => (
          

                <TouchableOpacity key={index} onPress={()=> setVisible(true)}>
                <View style={{width:screenWidth,paddingTop:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingLeft:10,paddingRight:10}}>
                        <View style={{flex:1,width:'25%',alignItems:'center'}}>
                             <Image source={tacos} style={{width:70,height:70,aspectRatio: 1, resizeMode: 'contain',marginRight:10}}/>   
                        </View>
                        
                            <View style={{flex:2,flexDirection:'column',justifyContent:'flex-start'}}>
                            {item.sellingPoint && <Text style={{ fontSize: 17, fontWeight: '500' }}>{item.sellingPoint.sp_name}</Text>}
                              <View style={{flexDirection:'row'}}>
                               
                                <Text style={{color:'#6D7580',paddingTop:5}}>{new Date(item.date).toLocaleDateString("en-US", {year: "numeric",month: "short",day: "2-digit",})} |</Text>
                                <Text style={{color:'#6D7580',paddingTop:5}}> {new Date(item.date).toLocaleTimeString("en-US", {hour: "numeric",minute: "numeric",hour12: true,})}</Text>
                              </View>
                            </View>
                         
        
        
                            <View style={{justifyContent:'space-between',alignItems:'flex-start'}}>
                              <Text style={{color:'red', fontWeight:'700',alignSelf:'flex-end'}}> - {item.amount} TND</Text>
                              <View style={{flexDirection:'row',paddingTop:5}} >
                                  <Image source={expense} style={{width:20,aspectRatio: 1, resizeMode: 'contain',marginRight:2}}/>
                                  <Text style={{}}>Expense</Text>
                              </View>
                            </View>
        
        
        
                </View>
                </TouchableOpacity>
              ))}
        
        <Historydetails
        
        isVisible={Visible}
        onClose={()=> setVisible(false)}
        
        />

        <View style={{width:screenWidth,paddingTop:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingLeft:10,paddingRight:10}}>
                <View style={{flex:1,width:'25%',alignItems:'center'}}>
                     <Image source={AvatarAnas} style={{width:70,height:70,aspectRatio: 1, resizeMode: 'contain',marginRight:10}}/>   
                </View>
                
                    <View style={{flex:2,flexDirection:'column',justifyContent:'flex-start'}}>
                      <Text style={{fontSize:17,fontWeight:'500'}} >Anas Cherni </Text>
                      <View style={{flexDirection:'row'}}>
                        <Text style={{color:'#6D7580',paddingTop:5}}>Dec 09, 2023 |</Text>
                        <Text style={{color:'#6D7580',paddingTop:5}}> 14:50 PM</Text>
                      </View>
                    </View>



                    <View style={{justifyContent:'space-between',alignItems:'flex-start'}}>
                      <Text style={{color:'green', fontWeight:'700',alignSelf:'flex-end'}}> + $25</Text>
                      <View style={{flexDirection:'row',paddingTop:5}} >
                          <Image source={income} style={{width:20,aspectRatio: 1, resizeMode: 'contain',marginRight:2}}/>
                          <Text style={{color:'#E20522'}}>Income</Text>
                      </View>
                    </View>


        </View>
        <View style={{width:screenWidth,paddingTop:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingLeft:10,paddingRight:10}}>
                <View style={{flex:1,width:'25%',alignItems:'center'}}>
                     <Image source={tacos} style={{width:70,height:70,aspectRatio: 1, resizeMode: 'contain',marginRight:10}}/>   
                </View>
                
                    <View style={{flex:2,flexDirection:'column',justifyContent:'flex-start'}}>
                      <Text style={{fontSize:17,fontWeight:'500'}} >Chaneb Tacos</Text>
                      <View style={{flexDirection:'row'}}>
                        <Text style={{color:'#6D7580',paddingTop:5}}>Dec 09, 2023 |</Text>
                        <Text style={{color:'#6D7580',paddingTop:5}}> 14:50 PM</Text>
                      </View>
                    </View>



                    <View style={{justifyContent:'space-between',alignItems:'flex-start'}}>
                      <Text style={{color:'green', fontWeight:'700',alignSelf:'flex-end'}}> + $25</Text>
                      <View style={{flexDirection:'row',paddingTop:5}} >
                          <Image source={income} style={{width:20,aspectRatio: 1, resizeMode: 'contain',marginRight:2}}/>
                          <Text style={{color:'#E20522'}}>Income</Text>
                      </View>
                    </View>


        </View>
                    
                    
                    
                    
                </View>
                
                
            



     </ScrollView>
    </SafeAreaView> 
   
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
    paddingtop:20,
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
export default Historique