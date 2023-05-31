import { StyleSheet,View, Text,Image,TouchableOpacity,ScrollView,Dimensions,StatusBar,TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect ,useState, useRef,useEffect} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import cal from '../../../assets/images/Calendar.png'

const DatePicker = ({Birth,def}) => {
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    useEffect(() => {
      if(def){
        setDate(def)
      }
    }, []);
    const onDateChange = (event, selectedDate) => {
        setShowDatePicker(false);
        if (selectedDate) {
          setDate(selectedDate);
          Birth(date)
        }
      };
    
      const showDate = () =>{
        console.log("test");
        setShowDatePicker(true);
        console.log("test");
      }
  return (
    
        <View style={styles.container}>
          <TextInput 
            style={{height:"100%"}}
            
            value={date.getDate().toString()+'/'+(date.getMonth()+1).toString()+'/'+date.getFullYear().toString()}
            
              
              onFocus={() => setShowDatePicker(true)}
            
            
            />
            <TouchableOpacity style={{paddingTop:10,paddingLeft:150}} onPress={() => setShowDatePicker(true)}>
            <Image source={cal}  />
            </TouchableOpacity>
            {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          onChange={onDateChange}
        />)}
            
            </View>

  )
}
const styles= StyleSheet.create({
    container:{
      backgroundColor:"#F9F9F9",
      width:'100%',
      flexDirection:'row',

      borderColor: '#A5ABB3',
      borderWidth:1,
      borderRadius:10,

      paddingHorizontal:10,
      marginVertical:10,
      




    },
    

})


export default DatePicker