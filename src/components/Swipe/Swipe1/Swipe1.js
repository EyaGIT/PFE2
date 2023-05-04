import { View, Text,Image,StyleSheet } from 'react-native'
import React,{useState, useRef,useCallback} from 'react'
import { RadioButton } from 'react-native-paper';
import PhoneInput from "react-native-phone-number-input";
import CustomButton from '../../CustomButton/CustomButton';
import Custominput from '../../Custominput/Custominput';
import NewAvatar from '../../../../assets/images/NewAvatar.png'
import ImagePickerAvatar from '../../uplode_Image/ImagePickerAvatar';
import ImagePickerHeader from '../../uplode_Image/ImagePickerHeader';
import ImagePickerModal from '../../uplode_Image/ImagePickerModal';
import { launchImageLibrary } from 'react-native-image-picker';
import * as ImagePicker from 'react-native-image-picker'

const Swipe1 = () => {

  const [pickerResponse,setPickerResponse]=useState(null);
     const[Visible,setVisible]=useState(false);

     const onImageLibraryPress = useCallback (()=>{


      const options ={

        selectionLimit :1,
        mediaType:'photo',
        includeBase64:false,

      };
      ImagePicker,launchImageLibrary(options,setPickerResponse);
     },[]
     
     );

     const onCameraPress=React.useCallback(()=>{

      const options ={
        saveToPhotos: true,
        mediaType:'photo',
        includeBase64:false,
      };
      ImagePicker.launchCamera(options,setPickerResponse);
     },[]);

     const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;


  const [valuee, setValuee] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const phoneInput = useRef(null);
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [checked, setChecked] = React.useState('first');

  return (
    <View>
      <View >
    <ImagePickerAvatar  uri={uri} onPress={()=>setVisible(true)}/>
    <ImagePickerModal
    isVisible={Visible}
    onClose={()=>setVisible(false)}
    onImageLibraryPress={onImageLibraryPress}
    OnCameraPress={onCameraPress}
    />
      
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
    </View>
  )
}

export default Swipe1