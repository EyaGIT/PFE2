import { View, Text,Image,Pressable,SafeAreaView,StyleSheet} from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'
import Camera from '../../../assets/images/Camera.png'
import Gallery from '../../../assets/images/Gallery.png'

const ImagePickerModal = ({
 isVisible,
 onClose,
 onImageLibraryPress,
 OnCameraPress,




}) => {
  return (
   <Modal

    isVisible={isVisible}
    onBackButtonPress={onClose}
    onBackdropPress={onClose}
    style={styles.modal}
    >

  <SafeAreaView  style={styles.buttons}>
  <Pressable  style={styles.button}  onPress={onImageLibraryPress}>
    <Image style={styles.buttonIcon} source={Gallery}/>
    
    <Text style={styles.buttonText}>Library</Text>

  </Pressable>
  <Pressable style={styles.button}  onPress={OnCameraPress}>
    <Image style={styles.buttonIcon} source ={Camera}/>
    <Text style={styles.buttonText}>Camera</Text>
  </Pressable>


  </SafeAreaView>



   </Modal>
  )
}

const styles = StyleSheet.create({
   
    modal:{

        justifyContent:'flex-end',
        margin:0,
    },
    buttonIcon:{
    width:30,
    height:30,
    margin:10,
},

buttons:{
  backgroundColor:'white',
  flexDirection:'row',
  borderTopRightRadius:30,
  borderBottomLeftRadius:30,


},

button:{
 flex:1,
 justifyContent:'center',
 alignItems:'center',

},
buttonText:{

    fontSize:14,
    fontWeight:'600',
}





});

export default ImagePickerModal