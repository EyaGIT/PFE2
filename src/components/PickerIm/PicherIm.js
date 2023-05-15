import { View, Text,Image,StyleSheet,SafeAreaView,PermissionsAndroid } from 'react-native'
import React,{useState, useRef,useCallback} from 'react'
import ImagePickerAvatar from '../uplode_Image/ImagePickerAvatar';
import ImagePickerHeader from '../uplode_Image/ImagePickerHeader';
import ImagePickerModal from '../uplode_Image/ImagePickerModal';
import { launchImageLibrary } from 'react-native-image-picker';
import * as ImagePicker from 'react-native-image-picker';
import GalleryScreen from './GalleryScreen';




const PicherIm = () => {
    const [pickerResponse,setPickerResponse]=useState(null);
    const[Visible,setVisible]=useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const [Photo, setPhoto] = useState(null);
    const [galleryPhoto, setGalleryPhoto] = useState();

    const addUri=(uri)=>{
      setPhoto(uri);
      console.log(Photo)
    }
    //--------------------
    const openGalleryModal = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission',
            message: 'App needs access to your storage to get your photos',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setModalVisible(true);
          console.log('Storage permission granted');
        } else {
          console.log('Storage permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    
      
    };
  
    const closeGalleryModal = () => {
      setModalVisible(false);
    };
    //--------------------
  
    let options = {
      saveToPhotos: true,
      mediaType: 'photo',
    };
  
    const openCamera = async () => {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const result = await launchCamera(options);
        setCameraPhoto(result.assets[0].uri);
      }
    };
  
    const openGallery = async () => {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      launchImageLibrary({
          
            
        selectionLimit: 2,
        mediaType: 'photo',
        includeBase64: false,
      
    },(res)=>console.log(res.assets.length));
      /*if (result.didCancel) {
        // User canceled the image selection
        console.log('Image selection canceled');
      } else {
        // Image selected successfully
        console.log('Selected image:', result.assets[0].uri);
        // Perform further actions with the selected image
      }
    setGalleryPhoto(result.assets[0].uri);*/}
    };

    
   
    const onCameraPress=React.useCallback(async ()=>{

     const options ={
       saveToPhotos: true,
       mediaType:'photo',
       includeBase64:false,
     };
     const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await ImagePicker.launchCamera(options,(data)=>setPhoto(data?.assets[0].uri));
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