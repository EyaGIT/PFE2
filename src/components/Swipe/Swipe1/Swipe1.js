import { View, Text,Image,StyleSheet,Dimensions} from 'react-native'
import React,{useState, useRef,useCallback} from 'react'
import { RadioButton } from 'react-native-paper';
import PhoneInput from "react-native-phone-number-input";
import CustomButton from '../../CustomButton/CustomButton';
import Custominput from '../../Custominput/Custominput';
import NewAvatar from '../../../../assets/images/NewAvatar.png'

import { launchImageLibrary } from 'react-native-image-picker';
import * as ImagePicker from 'react-native-image-picker'
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker'
import PicherIm from '../../PickerIm/PicherIm';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const Swipe1 = ({handellogin}) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);


  const onContinePressed = () => {
    handellogin();
    console.warn("Contine");}

  

    

  const [password, setpassword] = useState('');
  const [valuee, setValuee] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const phoneInput = useRef(null);
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [checked, setChecked] = React.useState('first');
  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <SafeAreaView style={{ width:screenWidth,justifyContent: "flex-start", alignItems: "center"}}>
      
    <PicherIm/>
    <View style={{width:'80%',flexDirection:"row",paddingTop:10}}>





<Text style={{paddingTop:5}}>Male</Text>
<RadioButton
value="Male"
status={ checked === 'Male' ? 'checked' : 'unchecked' }
onPress={() => setChecked('Male')}
color='#E20522'
/>
<Text style={{paddingTop:5}}>Female</Text>
<RadioButton
value="Female"
status={ checked === 'Female' ? 'checked' : 'unchecked' }
onPress={() => setChecked('Female')}
color='#E20522'
/>

</View>
<View style={{width:'80%'}}>
<Text>
          <Text> Firt name </Text>
          <Text style={{color:'red'}}> *</Text>
          </Text>
<Custominput 
  placeholder="Firstname" 
  value={firstname} 
  setValue={setfirstname}
  />
</View>

<View style={{width:'80%'}}>
<Text>
          <Text> Last name </Text>
          <Text style={{color:'red'}}> *</Text>
          </Text>
<Custominput 
  placeholder="Lastname" 
  value={lastname} 
  setValue={setlastname}
  />

</View>

<View style={{width:'80%'}}>
<Text>
          <Text> Email name </Text>
          <Text style={{color:'red'}}> *</Text>
          </Text>
<Custominput 
  placeholder="Email" 
  value={email} 
  setValue={setemail}
  />

</View>
<View style={{width:'80%'}}>
<Text>
          <Text> Password </Text>
          <Text style={{color:'red'}}> *</Text>
          </Text>
<Custominput 
  placeholder="Password" 
  value={password} 
  setValue={setpassword}
  />

</View>







<View style={{width:'80%'}}>
<Text>
          <Text> Date of birth </Text>
          <Text style={{color:'red'}}> *</Text>
          </Text>
<Custominput 
          placeholder="Date" 
          value={date.getDate().toString()+'/'+(date.getMonth()+1).toString()+'/'+date.getFullYear().toString()}
          
          focus={() => setShowDatePicker(true)}
          />
      
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          onChange={onDateChange}
        />)}
        </View>

        <View style={{width:"80%"}}>
        <CustomButton  text="Continue " onPress={onContinePressed}/>
        </View>


</SafeAreaView>
  )
}

export default Swipe1