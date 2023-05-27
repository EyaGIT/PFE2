import { StyleSheet,View, Text,Image,TouchableOpacity,ScrollView,Dimensions,StatusBar,TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect ,useState, useRef,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import CustomButton from '../../components/CustomButton/CustomButton'
import AvatarAnas from '../../../assets/images/AvatarAnas.png'
import Custominput from '../../components/Custominput/Custominput';
import DateTimePicker from '@react-native-community/datetimepicker'
import cal from '../../../assets/images/Calendar.png'
import Receipt from '../Receipt/Receipt'
import ImageContact from '../../../assets/images/ImagContact.png'
import { SelectList } from 'react-native-dropdown-select-list'
import arrow from '../../../assets/images/icons/ArrowBack.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { transfer } from "../../api/user_api";








const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const SendMoneyAll = ({userInfo}) => {
  
  const [category,setCategory]=useState({})
  const [categories1,setCategories1]=useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [Montant, setMontant] = useState('');
      const onSendPressed = () => {
        
        if (isLoading) {
          // Prevent multiple submissions while already loading
          return;
        }
        if (Object.keys(category).length === 0) {
          setError('Selcet user bracelet');
          return ;
        }
        if(Montant===''||Montant==='0'){
          setError('Add Amount');
          return ;
        }

        setIsLoading(true);
        AsyncStorage.getItem('AccessToken')
        
      .then(token => {
        if (token) {
          transfer({
            idSender: userInfo.bracelets[0]._id,
            idReceiver:category.key,
            amount:parseInt(Montant)
      
    },token)
      .then(result=>{
        if(result.status===200){
          if(result.data.error){
            setIsLoading(false);
            setError(result.data.error);
            
            return;
          }else{
            console.log(result.data);
            setTimeout(() => {
            setIsLoading(false); // Stop loading
            data=result.data
            dir="Home"
            navigation.navigate("Receipt",{ data,dir });
          }, 2000)
          }
        }
      }).catch((error) => {
        setIsLoading(false);
        console.log(error);
        setIsLoading(false); // Stop loading
        // Handle error
      })
        }}).catch(error => {
         
          console.error(error);
          
          setIsLoading(false);
        }); // Start loading
        ;
         }
    
    const navigation=useNavigation();
    useEffect(()=>{
      const test = userInfo.children.map((item) => ({
        key: item.bracelets[0]._id,
        value: item.firstName + ' ' + item.lastName,
      }));
      setCategories1(test);
      console.log(categories1)
    },[])
    useLayoutEffect(()=>{
      navigation.setOptions({
        headerShown:true,
        headerTransparent:true,
        headerTitleAlign: 'center',
        headerTitleStyle: { alignSelf:'center',color: 'rgba(0,0,0,0)' ,height:'100%',
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
            
         
          
         <View>
            <Text style={{textAlign: 'center',fontSize: 25,color:'#FFFFFF',paddingBottom:30,paddingTop:30}}></Text>
            
        </View>      
     <View>


     </View>

          
      <View style={styles.body}>
      <View style={{width:'100%',paddingTop:20,flexDirection:'row',justifyContent:'center'}}>


                

                <View style={{minHeight:90,paddingTop:10,paddingLeft:5,flexDirection:'column',width:'90%'}}>
                <View style={{minHeight:90,paddingTop:10,paddingLeft:5,flexDirection:'column',width:'100%',position:"absolute",zIndex:9999}}>
                
    
                      <SelectList
                      
                      setSelected={(key,val) => setCategory({key,val})} 
                      data={categories1}
                      placeholder={"Choose member"}
                     
                      dropdownStyles={{
                        container: {
                          backgroundColor: '#EBEBEB',
                          borderWidth: 1,
                          borderColor: 'gray',
                          borderRadius: 8,
                          paddingHorizontal: 10,
                          paddingVertical: 8,
                        },
                        listContainer: {
                          maxHeight: 200,
                        },
                        listItem: {
                          paddingVertical: 8,
                          paddingHorizontal: 10,
                        },
                        selectedItem: {
                          backgroundColor: 'lightblue',
                        },
                      }}
                      itemStyles={{
                        label: {
                          color: 'black',
                        },
                      }}
                      search={false}
                      />
 
                </View>
                </View>
            </View>

          
        <View style={{paddingTop:10,alignItems:'center', justifyContent:'center',paddingLeft:30,paddingRight:30,marginBottom:50,zIndex:-99}}>

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
  <View style={{width:"70%",alignItems:'center',justifyContent:'center',marginTop:30}}>
        <CustomButton  text="Send " onPress={onSendPressed} />
        </View>

  
        </View>


        
       
      
      
      
            
          </View>
         
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
  
  linearGradient: {
    flex:1
    
  },
  SafeAreaView:{
    flex:1
  },
 
 

body:{
  width:screenWidth,
    
  height:screenHeight,
  paddingtop:10,
  paddingLeft:10,
  paddingRight:10,
  zIndex: 2,
  backgroundColor:'#F2F2F2',
  borderTopLeftRadius:45,
  borderTopRightRadius:45,
  flex:2,
  minHeight: screenHeight-70,
  width:'100%'
  
  
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  stepIndicator: {
    marginVertical: 50,
    position:"absolute",
    width:screenWidth,
    top:-70,
    
    
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepLabel: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#999999',
  },
  stepLabelSelected: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#E20522',
  },
    slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color:'black',
    paddingTop:10
    
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
});

export default SendMoneyAll