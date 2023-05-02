import { StyleSheet,View, Text,Image,TouchableOpacity,ScrollView,Dimensions,StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect ,useState, useRef} from 'react'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import CustomButton from '../../components/CustomButton/CustomButton'
import Custominput from '../../components/Custominput/Custominput';
import NewAvatar from '../../../assets/images/NewAvatar.png'
import Swiper from 'react-native-swiper';
import StepIndicator from 'react-native-step-indicator';
import { RadioButton } from 'react-native-paper';
import PhoneInput from "react-native-phone-number-input";

import DatePicker from 'react-native-datepicker'
const firstIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  separatorFinishedColor: '#E20522',
  separatorUnFinishedColor: '#db4256',
  stepIndicatorFinishedColor: '#E20522',
  stepIndicatorUnFinishedColor: '#db4256',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 12,
  currentStepLabelColor: '#E20522',
};

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const NewMember1 = () => {
  const [date, setDate] = useState('2023-05-2');

  const [checked, setChecked] = React.useState('first');

  const [valuee, setValuee] = useState("");
  const [formattedValue, setFormattedValue] = useState("");

  const phoneInput = useRef(null);

  const [value, setValue] = useState()
  const [step, setStep] = useState(0);
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');


  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const [currentPage, setCurrentPage] = React.useState(0);

  const onStepPress = (position) => {
    setCurrentPage(position);
  };

  const renderLabel = ({
    position,
    label,
    currentPosition,
  }) => {
    return (
      <Text
        style={
          position === currentPosition
            ? styles.stepLabelSelected
            : styles.stepLabel
        }
      >
        {label}
      </Text>
    );
  };

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
            <Text style={{textAlign: 'center',fontSize: 25,color:'#FFFFFF',paddingBottom:20,paddingTop:20}}>New member</Text>
            
        </View>      


          
      <View style={styles.body}>
          
      <View style={styles.stepIndicator}>
        <StepIndicator
          stepCount={3}
          customStyles={firstIndicatorStyles}
          currentPosition={currentPage}
          labels={['Account', 'Profile', 'Band']}
          renderLabel={renderLabel}
          onPress={onStepPress}
        />
      </View>

      <View >

        <Image source={NewAvatar} style={{alignItems:'center', justifyContent: 'center'}}/>
      </View>
      <View>
      <Custominput 
          placeholder="Firstname" 
          value={firstname} 
          setValue={setfirstname}
          />
      </View>

      <View>
      <Custominput 
          placeholder="Lastname" 
          value={lastname} 
          setValue={setlastname}
          />

      </View>

      <View>
      <Custominput 
          placeholder="Email" 
          value={email} 
          setValue={setemail}
          />

      </View>

      <View style={{ width: '100%',bordercolor:'#A5ABB3',
      borderWidth:1,
      borderRadius:15,

      paddingHorizontal:10,
      marginVertical:10,}}>

      <PhoneInput
            ref={phoneInput}
            defaultValue={valuee}
            defaultCode="TN"
            onChangeText={(text) => {
              setValuee(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
           
            
            autoFocus
          />
      </View>


      <View style={{flexDirection:"row"}}>
      <Text>Male</Text>
      <RadioButton
        value="Male"
        status={ checked === 'Male' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('Male')}
        color='#E20522'
      />
       <Text>Female</Text>
      <RadioButton
        value="Female"
        status={ checked === 'Female' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('Female')}
        color='#E20522'
      />
      </View>

      <View>
      <DatePicker
        style={{width: 200}}
        date={date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
       
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
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
  paddingLeft:25,
  paddingRight:25,
  zIndex: 2,
  backgroundColor:'#FBFBFB',
  borderTopLeftRadius:45,
  borderTopRightRadius:45,
  flex:2,
  minHeight: screenHeight/1.3,
  
  
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  stepIndicator: {
    marginVertical: 50,
    
    
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
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



export default NewMember1