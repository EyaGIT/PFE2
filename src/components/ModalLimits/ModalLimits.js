import { View, Text,Image,Pressable,SafeAreaView,StyleSheet,Dimensions} from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'
import Camera from '../../../assets/images/Camera.png'
import Gallery from '../../../assets/images/Gallery.png'
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const ModalLimits = ({
 isVisible,
 onClose,
 OnPress,




}) => {
  return (
   <Modal

    isVisible={isVisible}
    onBackButtonPress={onClose}
    onBackdropPress={onClose}
    style={styles.modal}
    >

  <SafeAreaView  style={styles.buttons}>
  <View style={{height:'90%',width:'90%'}}>
    <Text style={{alignSelf:'center',fontSize:24}}>hhhhhh</Text>
  </View>

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
    height:screenHeight/2,
    margin:10,
},

buttons:{
  backgroundColor:'white',
  flexDirection:'row',
  borderTopRightRadius:40,
  borderTopLeftRadius:40,
  minHeight:screenHeight/2,
  justifyContent:'center',
  alignItems:'center',


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

export default ModalLimits