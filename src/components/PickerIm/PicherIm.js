import { View, Text,Image,StyleSheet,SafeAreaView,PermissionsAndroid } from 'react-native'
import React,{useState, useRef,useCallback,useEffect} from 'react'
import ImagePickerAvatar from '../uplode_Image/ImagePickerAvatar';
import ImagePickerHeader from '../uplode_Image/ImagePickerHeader';
import ImagePickerModal from '../uplode_Image/ImagePickerModal';

import * as ImagePicker from 'react-native-image-picker';
import GalleryScreen from './GalleryScreen';




const PicherIm = ({uriForm, default1 }) => {
    const [pickerResponse,setPickerResponse]=useState(null);
    const[Visible,setVisible]=useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const [Photo, setPhoto] = useState(null);
    const [Photobase64, setPhotobase64] = useState(null);
    const [galleryPhoto, setGalleryPhoto] = useState();
    
    const addUri=(uri,base64Data)=>{
      setPhoto(uri);
      setPhotobase64(base64Data)
      console.log('test')
      uriForm(base64Data)
      
      
    }
    
    //--------------------
    useEffect(() => {
      requestStoragePermission();
      if(default1){
        setPhoto(default1)
      }
      
    }, []);
  
    const requestStoragePermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission',
            message: 'App needs access to your storage to get your photos',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Storage permission granted');
        } else {
          console.log('Storage permission denied');
        }
      } catch (err) {
        console.error(err);
      }
    };
    const openGalleryModal = async () => {
      
          setModalVisible(true);
          setVisible(false)
          
    
      
    };
  
    const closeGalleryModal = () => {
      setModalVisible(false);
    };
    //--------------------
  
    
  
    
  
    
   
    const onCameraPress=useCallback(async ()=>{
      setVisible(false);

     const options ={
       saveToPhotos: true,
       mediaType:'photo',
       includeBase64:true,
     };
     const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
     await ImagePicker.launchCamera(options,(data)=>addUri(data?.assets[0].uri,data?.assets[0].base64));
      //setCameraPhoto(result.assets[0].uri);
    }
     
     //await ImagePicker.launchCamera(options,(data)=>console.log(data?.assets));
     
    },[]);
    const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;
  return (
    <SafeAreaView  >
    <ImagePickerAvatar  style={{backgroundColor:"black",margin:0,padding:0,top:-20,height:90}} uri={Photo} onPress={() => setVisible(true)}/>
    <ImagePickerModal
    style={{backgroundColor:"black",height:90,top:1000,position:'absolute'}}
    isVisible={Visible}
    onClose={() => setVisible(false)}
    onImageLibraryPress={openGalleryModal}
    OnCameraPress={onCameraPress}
    />
    <GalleryScreen isVisible={isModalVisible} onClose={closeGalleryModal} image={addUri}/>
    
    </SafeAreaView>
  )
}

export default PicherIm