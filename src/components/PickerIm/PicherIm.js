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

    const onImageLibraryPress = useCallback (async ()=>{


     const options ={

       selectionLimit :1,
       mediaType:'photo',
       includeBase64:true,

     };
     await ImagePicker,launchImageLibrary(options,(data)=>console.log(data));
     
    },[]
    
    );
   
    const onCameraPress=React.useCallback(async ()=>{

     const options ={
       saveToPhotos: true,
       mediaType:'photo',
       includeBase64:false,
     };
     
     await ImagePicker.launchCamera(options,(data)=>console.log(data?.assets));
     
    },[]);
    const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;
  return (
    <SafeAreaView  >
    <ImagePickerAvatar  style={{backgroundColor:"black",margin:0,padding:0,top:-20,height:100}} uri={uri} onPress={() => setVisible(true)}/>
    <ImagePickerModal
    style={{backgroundColor:"black",height:100,top:1000,position:'absolute'}}
    isVisible={Visible}
    onClose={() => setVisible(false)}
    onImageLibraryPress={onImageLibraryPress}
    OnCameraPress={onCameraPress}
    />
    <View style={{width:'100%',height:80,alignItems:'center',justifyContent:'center'}}>
      <Text style={{fontSize:19,color:'#000000',fontWeight:'700'}}>User name</Text></View>
    </SafeAreaView>
  )
}

export default PicherIm