import React, {useState,useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  PermissionsAndroid,FlatList,Button
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CameraRollPicker from 'react-native-camera-roll-picker';
import RNFS from 'react-native-fs';





const Camera = () => {
  const [cameraPhoto, setCameraPhoto] = useState();
  const [galleryPhoto, setGalleryPhoto] = useState();
  const [profileImage, setProfileImage] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    requestStoragePermission();
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
      console.warn(err);
    }
  };
  //------------------
  const handleImageSelection = async (selectedImages) => {
    if (selectedImages.length > 0) {
      const selectedImage = selectedImages[0];
      setSelectedPhoto(selectedImage);

      // Log URL and base64 data
      try {
        const fileUri = selectedImage.uri;
        const base64Data = await RNFS.readFile(fileUri, 'base64');
        console.log('Image URL:', fileUri);
        //console.log('Base64 data:', base64Data);
      } catch (error) {
        console.log('Error reading file:', error);
      }
    }
  };
  //------------------
  const renderSelectedImage = ({ item }) => (
    <Image style={{ width: 100, height: 100 }} source={{ uri: item.uri }} />
  );
  //------------------

  

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


  const openImagePicker = () => {
    const options = {
      title: 'Select Profile Image',
      customButtons: [{ name: 'custom', title: 'Choose from Custom Gallery' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      mediaType: 'photo',
      maxWidth: 500,
      maxHeight: 500,
      quality: 0.8,
      allowsEditing: true,
      selectionLimit: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('Image selection canceled');
      } else if (response.error) {
        Alert.alert('Error', 'An error occurred while selecting the image');
      } else if (response.customButton) {
        // Handle custom button press (open custom image gallery)
        console.log('Custom gallery selected');
        // Implement your custom image gallery logic here
      } else {
        // Image selected from default gallery
        setProfileImage(response.uri);
      }
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Button title="Open Gallery" onPress={() => {}} />
      {selectedPhoto && (
        <Image style={{ width: 200, height: 200 }} source={{ uri: selectedPhoto.uri }} />
      )}
      <CameraRollPicker
        selectSingleItem
        callback={handleImageSelection}
        groupTypes="All"
        assetType="Photos"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebebeb',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#233f49',
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginTop: 50,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#ebebeb',
    fontWeight: 'bold',
  },
  imageStyle: {
    height: 150,
    width: 150,
    marginTop: 20,
    borderRadius: 5,
  },
});

export default Camera;