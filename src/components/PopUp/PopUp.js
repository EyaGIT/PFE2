import { View, Text,Image,Pressable,SafeAreaView,StyleSheet,Dimensions} from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'
import Camera from '../../../assets/images/Camera.png'
import Gallery from '../../../assets/images/Gallery.png'
import { MultipleSelectList } from 'react-native-dropdown-select-list'
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const PopUp = ({
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

  <View  style={styles.buttons}>
  <View style={{height:'90%',width:'90%'}}>
    <Text style={{alignSelf:'center',fontSize:24}}>New Limit</Text>
    
  </View>

  </View>



   </Modal>
  )
}

const styles = StyleSheet.create({
   
    modal:{

        justifyContent:'center',
        alignItems:'center',
        margin:0,
        height:screenHeight,
        
    },
    buttonIcon:{
    width:30,
    height:screenHeight,
    margin:0,
},

buttons:{
  backgroundColor:'white',
  flexDirection:'row',
  borderRadius:30,
  minHeight:screenHeight/4,
  width:'85%',
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

export default PopUp