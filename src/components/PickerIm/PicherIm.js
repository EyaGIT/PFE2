import { View, Text,Image,StyleSheet,SafeAreaView } from 'react-native'
import React,{useState, useRef,useCallback} from 'react'
import ImagePickerAvatar from '../uplode_Image/ImagePickerAvatar';
import ImagePickerHeader from '../uplode_Image/ImagePickerHeader';
import ImagePickerModal from '../uplode_Image/ImagePickerModal';
import { launchImageLibrary } from 'react-native-image-picker';
import * as ImagePicker from 'react-native-image-picker'


const PicherIm = () => {
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
     console.log(pickerResponse.assets[0].uri);
     ImagePicker.launchCamera(options,setPickerResponse);
    },[]);
    const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;
  return (
    <SafeAreaView  >
    <ImagePickerAvatar  style={{backgroundColor:"red",margin:0,padding:0,top:-20,height:100}} uri={uri} onPress={() => setVisible(true)}/>
    <ImagePickerModal
    style={{backgroundColor:"red",height:100}}
    isVisible={Visible}
    onClose={() => setVisible(false)}
    onImageLibraryPress={onImageLibraryPress}
    OnCameraPress={onCameraPress}
    />
      
    </SafeAreaView>
  )
}

export default PicherIm