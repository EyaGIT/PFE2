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













const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const SendMoney = () => {
  
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
  
    const onDateChange = (event, selectedDate) => {
        setShowDatePicker(false);
        if (selectedDate) {
          setDate(selectedDate);
        }
      };
    
      const showDate = () =>{
        console.log("test");
        setShowDatePicker(true);
        console.log("test");
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
        <View style={{ paddingTop:20,alignItems:'center'}}>

            <Image source={AvatarAnas}/>
            <Text style={styles.title}>Anas Cherni </Text>
        </View>
          
        <View style={{paddingTop:10,alignItems:'center', justifyContent:'center',paddingLeft:30,paddingRight:30,marginBottom:50}}>

          <View style={{backgroundColor:"white",borderRadius:30,borderColor:'#E20522',borderWidth:1.5,width:267,height:72,alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
          <TextInput 
            style={{fontSize:35,height:"100%"}}
            placeholder="1,500"
            value={Montant}
            
            onChangeText={setMontant}
            
            
            />
            <Text style={{fontSize:35,fontWeight:"bold",color:"#E20522"}}>TND</Text>
            </View>
        </View>


        <View style={{flexDirection:"row",justifyContent:'space-around',alignItems:'center',height:90}}>
        <View style={{backgroundColor:"white",borderRadius:50,borderColor:'rgba(0,0,0,0.3)',borderWidth:1.5,width:207,height:72,alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
          <TextInput 
            style={{fontSize:20,height:"100%"}}
            placeholder="1,500"
            value={date.getDate().toString()+'/'+(date.getMonth()+1).toString()+'/'+date.getFullYear().toString()}
            
              
              onFocus={() => setShowDatePicker(true)}
            
            
            />
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <Image source={cal}  />
            </TouchableOpacity>
            {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          onChange={onDateChange}
        />)}
            
            </View>
            <View style={{backgroundColor:"white",borderRadius:50,borderColor:'rgba(0,0,0,0.3)',borderWidth:1.5,width:127,height:72,alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
          <TextInput 
            style={{fontSize:25,height:"100%"}}
            placeholder="10:50"
            
            
            onChangeText={setMontant}
            
            
            />
            </View>
        </View>
        <View style={{flexDirection:"row",justifyContent:'center',alignItems:'center',height:90}}>
        
            <View style={{backgroundColor:"white",borderRadius:50,borderColor:'rgba(0,0,0,0.3)',borderWidth:1.5,width:345,height:72,alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
          <TextInput 
            style={{fontSize:35,height:"100%"}}
            
            
            
            onChangeText={setMontant}
            
            
            />
            </View>
            
        </View>
        <View>
        <CustomButton text={'Transfer'}/>
        </View>
        <View >
         


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

export default SendMoney