import { View, Text ,StyleSheet,Animated} from 'react-native'
import React,{useEffect, useRef} from 'react'


const LoadingPage = () => {
  const progress = useRef(new Animated.Value(1)).current
  const scale = useRef(new Animated.Value(1)).current

    useEffect(()=>{


Animated.loop(
  Animated.sequence([
  Animated.parallel(
    [
      Animated.sequence([
        Animated.timing(progress,{toValue:1,useNativeDriver:true,duration:1000}),
        Animated.timing(progress,{toValue:2,useNativeDriver:true,duration:1000}),
      ]),
      Animated.sequence([
        Animated.timing(scale,{toValue:2,useNativeDriver:true}),
        Animated.timing(scale,{toValue:1,useNativeDriver:true}),
      ]),
    ]),
    Animated.delay(1000), 
  ]),
    
  ).start();
      
    })
  return (
    <View style={styles.container}>
       <Animated.View style={[styles.square,
        { borderRadius:10

        ,
          
          opacity: progress,  
        transform:[
          {rotate: progress.interpolate(
        {

          inputRange:[0,1],
          outputRange :[`0rad`, `${2*Math.PI}rad`],
        }
        
        ),
      },
        ],
        },]}>

         <Text style={{color:'white',fontSize:80,fontWeight:'bold',position:'absolute',paddingBottom:5}}>C</Text>
          </Animated.View>

        <View style={{alignItems:'center',justifyContent:'center'}} >
          <Text style={{color:'black',fontSize:60,fontWeight:'bold',marginBottom:17}}>ashless</Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
 container :{
   flex:1,
   
   alignItems:'center',
   justifyContent : 'center',
   flexDirection:'row'


 },
 square:{
 width:80,
 height:90,
 backgroundColor:'#E20522',
alignItems:'center',
justifyContent : 'center',
marginBottom:20



 }




});
export default LoadingPage