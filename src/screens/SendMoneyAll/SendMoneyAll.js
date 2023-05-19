import { StyleSheet,View, Text,Image,TouchableOpacity,ScrollView,Dimensions,StatusBar,TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect ,useState, useRef} from 'react'
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










const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const SendMoneyAll = () => {
  
  const [category,setCategory]=useState('Anas Cherni')
  const categories1 =[
    {key:'1', value:'Anas Cherni'},
    {key:'2', value:'Eya Belkadhi'},
  ];
      const onSendPressed = () => {
        navigation.navigate("Receipt");
         }
    const [Montant, setMontant] = useState('');
    const navigation=useNavigation();
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
          
         <View>
            <Text style={{textAlign: 'center',fontSize: 25,color:'#FFFFFF',paddingBottom:30,paddingTop:30}}>SendMoney</Text>
            
        </View>      
     <View>


     </View>

          
      <View style={styles.body}>
      <View style={{width:'100%',paddingTop:20,flexDirection:'row'}}>
                <View style={{width:'25%',alignItems:'center'}}>
                        <Image  source={ImageContact} />
                </View>
                <View style={{height:90,paddingTop:10,paddingLeft:5,flexDirection:'column',width:'70%'}}>
                <View >
    
    <SelectList
    
    setSelected={(val) => setCategory(val)} 
    data={categories1}
    placeholder={"Select Category"}
    
    search={false}


    
    />
    {console.log(category)}
 </View>
                </View>
            </View>

          
        <View style={{paddingTop:10,alignItems:'center', justifyContent:'center',paddingLeft:30,paddingRight:30,marginBottom:50}}>

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
  <View style={{width:"70%",alignItems:'center',justifyContent:'center',marginTop:30}}>
        <CustomButton  text="Send " onPress={onSendPressed} />
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
  
  linearGradient: {
    flex:1
    
  },
  SafeAreaView:{
    flex:1
  },
 
 

body:{
  paddingtop:10,
  paddingLeft:10,
  paddingRight:10,
  zIndex: 2,
  backgroundColor:'#FBFBFB',
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