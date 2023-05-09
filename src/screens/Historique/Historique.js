import { StyleSheet,View, Text,Image,TouchableOpacity,ScrollView,Dimensions,StatusBar,TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect,useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import tacos from '../../../assets/images/Tacos.png'
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const Historique = () => {

    const navigation = useNavigation();
      
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
    < View style={styles.head}>
              
              <View  >
            <Text style={{textAlign: 'center',fontSize: 25,color:'#FFFFFF',paddingBottom:40}}>Historique</Text>
            
        </View> 
          </View>
    

        <View style={styles.body}>
        <View style={{width:'100%',paddingTop:10,flexDirection:'row'}}>
                <View style={{width:'25%',alignItems:'center',paddingTop:10}}>
                     <Image source={tacos} style={{width:55,aspectRatio: 1, resizeMode: 'contain',marginRight:10}}/>   
                </View>
                <View style={{height:90,paddingTop:10,paddingLeft:5,flexDirection:'column',width:'70%'}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View>
                    <Text style={{fontSize:17,fontWeight:'500'}} >Chaneb Tacos</Text></View>
                    <View><Text style={{color:'red',paddingLeft:40}}> $450.00</Text></View>
                    
                    
                    
                </View>
                <View style={{paddingTop:5}}>
               <Text>
                <Text style={{color:'#6D7580',paddingTop:5}}>Dec 09, 2023 |</Text>
                <Text style={{color:'#6D7580',paddingTop:5}}>14:50 PM</Text>
                </Text>
                </View>
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