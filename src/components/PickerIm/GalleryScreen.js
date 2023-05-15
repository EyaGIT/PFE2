import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';
import Modal from 'react-native-modal';
import CameraRollPicker from 'react-native-camera-roll-picker';
import RNFS from 'react-native-fs';
const GalleryScreen = ({ isVisible, onClose,image}) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleImageSelection = async (selectedImages) => {
    if (selectedImages.length > 0) {
      const selectedImage = selectedImages[0];
      setSelectedPhoto(selectedImage);
      try {
        const fileUri = selectedImage.uri;
        const base64Data = await RNFS.readFile(fileUri, 'base64');
        console.log('Image URL:', fileUri);
        image(fileUri)
        //console.log('Base64 data:', base64Data);
      } catch (error) {
        console.log('Error reading file:', error);
      }
      

      onClose(); // Close the modal after image selection
    }
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={{ flex: 1 }}>
        <Button title="Close" onPress={onClose} />
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
    </Modal>
  );
};

export default GalleryScreen;
