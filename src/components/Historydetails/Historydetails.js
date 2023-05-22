import { View, Text,Image,Pressable,SafeAreaView,StyleSheet,Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'
import Camera from '../../../assets/images/Camera.png'
import Gallery from '../../../assets/images/Gallery.png'
import { MultipleSelectList } from 'react-native-dropdown-select-list'
import CustomButton from '../CustomButton/CustomButton'
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const Historydetails = ({
 isVisible,
 onClose,
 OnPress,
 message,





}) => {
    
  return (
   <Modal

    isVisible={isVisible}
   onBackdropPress={onClose}
    style={styles.modal}
    
    >

  <View  style={styles.buttons}>
  <View style={{width:'90%',alignItems:'center',flexDirection:'row',justifyContent:'space-between',height:40}}>

<Text style={{fontSize:19,fontWeight:'600'}}>Payment details</Text>

</View>
<View style={{width:'90%',alignItems:'center',flexDirection:'row',justifyContent:'space-between',height:40}}>

<Text style={{fontSize:16,color:'#756D81'}}>Shop name</Text>
<Text style={{fontSize:16,fontWeight:'500'}}>Chaneb tacos</Text>

</View>
<View style={{width:"100%",borderColor:'#B3B3B5',alignSelf:'center',borderTopWidth:1.4}}></View>
<View style={{width:'90%',alignItems:'center',flexDirection:'row',justifyContent:'space-between',height:40}}>

<Text style={{fontSize:16,color:'#756D81'}}>Products</Text>


</View>
  <View style={{width:'90%',alignItems:'center',flexDirection:'row',justifyContent:'space-between',height:20}}>
                 
                <Text>Pizza</Text>
                <Text>Qte:2</Text>
                
                <Text style={{color:'black'}}>15 DT</Text>
            </View>
            <View style={{width:'90%',alignItems:'center',flexDirection:'row',justifyContent:'space-between',height:40}}>
               
            <Text>Pizza</Text>
                <Text>Qte:2</Text>
                
                <Text style={{color:'black'}}>15 DT</Text>
            </View>

            <View style={{width:"100%",borderColor:'#B3B3B5',alignSelf:'center',borderTopWidth:1.4}}></View>
            <View style={{width:'90%',alignItems:'center',flexDirection:'row',justifyContent:'space-between',height:50}}>
            <Text style={{fontSize:16,color:'#756D81'}}>Total</Text>
               
               
               <Text style={{fontWeight:'bold',color:'red'}}>20 DT</Text>
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
  flexDirection:'column',
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

export default Historydetails