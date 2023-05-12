import { View, Text ,StyleSheet,Animated} from 'react-native'
import React,{useEffect, useRef} from 'react'


const LoadingPage = () => {
  const progress = useRef(new Animated.Value(0)).current
  const scale = useRef(new Animated.Value(1)).current

    useEffect(()=>{

      Animated.timing(progress,{toValue:1,useNativeDriver:true}).start();
      Animated.timing(scale,{toValue:1,useNativeDriver:true,duration:3}).start();
    })
  return (
    <View style={styles.container}>
       <Animated.View style={[styles.square,
        { borderRadius:10

        ,
          
          opacity: progress,  
        transform:[{scale},
          {rotate: progress.interpolate(
        {

          inputRange:[0.5,1],
          outputRange :[`${Math.PI}rad`, `${2*Math.PI}rad`],
        }
        ),
      },
        ],
        },]}>

         <Text style={{color:'white',fontSize:80,fontWeight:'bold',position:'absolute'}}>C</Text>
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
 width:90,
 height:90,
 backgroundColor:'#E20522',
alignItems:'center',
justifyContent : 'center'


 }




});
export default LoadingPage