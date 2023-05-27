import { StyleSheet,View, Text,Image,TouchableOpacity,ScrollView,Dimensions,StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect,useState ,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import ImageContact from '../../../assets/images/ImagContact.png'
import plus from '../../../assets/images/plus.png'
import { API_BASE_URL } from '@env';
import arrow from '../../../assets/images/icons/ArrowBack.png';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Contacts = ({userInfo}) => {
 const [children,setchildren]=useState([]);
  const navigation = useNavigation();
  
  useEffect(() => {
    // ...existing code...

    setchildren(userInfo.children); // Update the user information state
    });

 

  const onuserPressed = (item,item2) => {
    navigation.navigate("Member",{ member: item ,userInfo:item2});
     }
 

  const onplusPressed = (item) => {
    navigation.navigate("New Member1",{ member: item });
     }
  
   
     useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: true,
        headerTransparent: true,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          alignSelf: 'center',
          color: 'white',
          height: '100%',
          fontSize: 27,
          fontWeight: '100'
        },
        headerLeft: () => (
          <TouchableOpacity
            style={{
              width: 45,
              height: 45,
              borderRadius: 25,
              borderColor: 'white',
              borderWidth: 1,
              marginLeft: 10,
              marginRight: 30,
              marginBottom: 37,
              marginTop: 37,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() => navigation.goBack()}
          >
            <Image source={arrow} style={{ width: '60%', height: '60%' }} />
          </TouchableOpacity>
        ),
        headerRight: () => {
          if (userInfo.role.name === 'member') {
            return (
              <TouchableOpacity
                style={{ paddingRight: 20 }}
                onPress={onplusPressed}
              >
                <Image source={plus} style={{ width: 22, height: 20 }} />
              </TouchableOpacity>
            );
          }
          return null;
        },
        headerStyle: {}
      });
    }, [])
  return (
    <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 1}} locations={[0,0.6]} colors={['#E20522', '#000000']} style={styles.linearGradient}>
         
    <SafeAreaView style={styles.SafeAreaView}>
    <StatusBar barStyle="light-content" backgroundColor={'transparent'} translucent={true} />
   
      
    <ScrollView style={styles.scrollView}  showsVerticalScrollIndicator={false}>
    < View style={styles.head}>
              
         
    
          </View>
    

        <View style={styles.body}>
        {children.map((item, index) => (
                <TouchableOpacity key={index} onPress={()=>onuserPressed(item,userInfo)}>
                <View style={{width:'100%',paddingTop:20,flexDirection:'row'}}>
                    <View style={{width:'25%',alignItems:'center'}}>
                            <Image style={{width:65,height:65,borderRadius:65/2}}  source={{uri:API_BASE_URL+"/uploads/"+item.image}} />
                    </View>
                    <View style={{height:45,alignItems:'center',paddingTop:20,paddingLeft:10}}>
                        <Text style={{fontSize:18,color:'#212121',fontWeight:'700'}}>{item.lastName} {item.firstName}</Text>
                    </View>
                </View>
               </TouchableOpacity>
              ))}
            
          
            
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
  height:screenHeight /7,
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