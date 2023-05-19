import { View, Text,Image,Pressable,SafeAreaView,StyleSheet,Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'
import Camera from '../../../assets/images/Camera.png'
import Gallery from '../../../assets/images/Gallery.png'
import { MultipleSelectList } from 'react-native-dropdown-select-list'
import CustomButton from '../CustomButton/CustomButton'
import { ScrollView } from 'react-native-gesture-handler'
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const ModalLimits = ({
 isVisible,
 onClose,
 OnPress,




}) => {
    const [selected, setSelected] = React.useState([]);
  
  const data = [
      {key:'1', value:'Mobiles', disabled:true},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
      {key:'4', value:'Computers', disabled:true},
      {key:'5', value:'Vegetables'},
      {key:'6', value:'Diary Products'},
      {key:'7', value:'Drinks'},
  ]
  return (
   <Modal

    isVisible={isVisible}
    onBackButtonPress={onClose}
    onBackdropPress={onClose}
    style={styles.modal}
    >

  <SafeAreaView  style={styles.buttons}>
  <ScrollView style={{height:'50%',width:'90%'}}>
    <Text style={{alignSelf:'center',fontSize:20,fontWeight:'700',paddingBottom:20,paddingTop:20}}>New Limit</Text>
    <MultipleSelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
       
        label="Select Shop"
    />
     <View style={{flexDirection:'row',justifyContent:'space-evenly',paddingTop:20}}>
  <View style={{width:'40%',paddingRight:10}}>
          
            <CustomButton text='Apply'></CustomButton>
          </View>
          <View style={{width:'40%',paddingLeft:10}}>
            <CustomButton text='Reset'></CustomButton>
          </View>
  
          </View>
  </ScrollView>
 
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
  flexDirection:'column',
  borderTopRightRadius:40,
  borderTopLeftRadius:40,
  minHeight:screenHeight/2,
  
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