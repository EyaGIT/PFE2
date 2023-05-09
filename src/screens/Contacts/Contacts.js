import { StyleSheet,View, Text,Image,TouchableOpacity,ScrollView,Dimensions,StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import ImageContact from '../../../assets/images/ImagContact.png'
import plus from '../../../assets/images/plus.png'


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Contacts = () => {
    
  const navigation = useNavigation();

 

  const onuserPressed = () => {
    navigation.navigate("Member");
     }
 

  const onplusPressed = () => {
    navigation.navigate("New Member1");
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
    < View style={styles.head}>
              <View style={styles.nav}>
                
                <TouchableOpacity style={{paddingLeft:50}} onPress={onplusPressed}>
                  <Image source={plus} style={{width:22,height:20}} />
                </TouchableOpacity>
              </View>
              <View  >
            <Text style={{textAlign: 'center',fontSize: 25,color:'#FFFFFF',paddingBottom:40}}>Contacts</Text>
            
        </View> 
          </View>
    

        <View style={styles.body}>
            <TouchableOpacity onPress={onuserPressed}>
            <View style={{width:'100%',paddingTop:20,flexDirection:'row'}}>
                <View style={{width:'25%',alignItems:'center'}}>
                        <Image  source={ImageContact} />
                </View>
                <View style={{height:40,alignItems:'center',paddingTop:20,paddingLeft:10}}>
                    <Text style={{fontSize:18,color:'#212121',fontWeight:'700'}}>User name</Text>
                </View>
            </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={onuserPressed} >
            <View style={{width:'100%',paddingTop:20,flexDirection:'row'}}>
                <View style={{width:'25%',alignItems:'center'}}>
                        <Image  source={ImageContact} />
                </View>
                <View style={{height:40,alignItems:'center',paddingTop:20,paddingLeft:10}}>
                    <Text style={{fontSize:18,color:'#212121',fontWeight:'700'}}>User name</Text>
                </View>
            </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={onuserPressed}>
            <View style={{width:'100%',paddingTop:20,flexDirection:'row'}}>
                <View style={{width:'25%',alignItems:'center'}}>
                        <Image  source={ImageContact} />
                </View>
                <View style={{height:40,alignItems:'center',paddingTop:20,paddingLeft:10}}>
                    <Text style={{fontSize:18,color:'#212121',fontWeight:'700'}}>User name</Text>
                </View>
            </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={onuserPressed}> 
            <View style={{width:'100%',paddingTop:20,flexDirection:'row'}}>
                <View style={{width:'25%',alignItems:'center'}}>
                        <Image  source={ImageContact} />
                </View>
                <View style={{height:40,alignItems:'center',paddingTop:20,paddingLeft:10}}>
                    <Text style={{fontSize:18,color:'#212121',fontWeight:'700'}}>User name</Text>
                </View>
            </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={onuserPressed}>
            <View style={{width:'100%',paddingTop:20,flexDirection:'row'}}>
                <View style={{width:'25%',alignItems:'center'}}>
                        <Image  source={ImageContact} />
                </View>
                <View style={{height:40,alignItems:'center',paddingTop:20,paddingLeft:10}}>
                    <Text style={{fontSize:18,color:'#212121',fontWeight:'700'}}>User name</Text>
                </View>
            </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={onuserPressed}>
            <View style={{width:'100%',paddingTop:20,flexDirection:'row'}}>
                <View style={{width:'25%',alignItems:'center'}}>
                        <Image  source={ImageContact} />
                </View>
                <View style={{height:40,alignItems:'center',paddingTop:20,paddingLeft:10}}>
                    <Text style={{fontSize:18,color:'#212121',fontWeight:'700'}}>User name</Text>
                </View>
            </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={onuserPressed}>
            <View style={{width:'100%',paddingTop:20,flexDirection:'row'}}>
                <View style={{width:'25%',alignItems:'center'}}>
                        <Image  source={ImageContact} />
                </View>
                <View style={{height:40,alignItems:'center',paddingTop:20,paddingLeft:10}}>
                    <Text style={{fontSize:18,color:'#212121',fontWeight:'700'}}>User name</Text>
                </View>
            </View>
           </TouchableOpacity>
            
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


export default Contacts