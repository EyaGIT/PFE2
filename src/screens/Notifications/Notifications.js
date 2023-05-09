import { View, Text,SafeAreaView,ScrollView,Image,Dimensions } from 'react-native'
import React from 'react'
import ImageContact from '../../../assets/images/ImagContact.png'

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const Notifications = () => {
  return (
    <SafeAreaView style={{ width:screenWidth,height:screenHeight}}>
    <ScrollView>
    <View style={{paddingLeft:20,paddingTop:90,height:130,width:'100%'}}>
    <Text style={{fontSize:20,color:'#2C3A4B',fontWeight:'800'}}>Today</Text>
    </View>
    <View style={{width:'100%',paddingTop:20,flexDirection:'row'}}>
                <View style={{width:'25%',alignItems:'center'}}>
                        <Image  source={ImageContact} />
                </View>
                <View style={{height:90,paddingTop:10,paddingLeft:5,flexDirection:'column',width:'70%'}}>
                    <View >
                    <Text>
                    <Text >You received a payment of</Text>
                    <Text style={{color:'red'}}> $450.00</Text>
                    </Text>
                    <Text >from Grace Anastasia</Text>
                    
                </View>
                <View>
                <Text style={{color:'#6D7580',paddingTop:5}}>10.10 AM</Text>
                </View>
                </View>
            </View>
            <View style={{width:"85%",borderColor:'#B9BABB',alignSelf:'center',borderTopWidth:0.7}}></View>
            <View style={{width:'100%',paddingTop:20,flexDirection:'row'}}>
                <View style={{width:'25%',alignItems:'center'}}>
                        <Image  source={ImageContact} />
                </View>
                <View style={{height:90,paddingTop:10,paddingLeft:5,flexDirection:'column',width:'70%'}}>
                    <View style={{}}>
                    <Text>
                    <Text >You received a payment of</Text>
                    <Text style={{color:'red'}}> $450.00</Text>
                    </Text>
                    <Text >from Grace Anastasia</Text>
                    
                </View>
                <View>
                <Text style={{color:'#6D7580',paddingTop:5}}>10.10 AM</Text>
                </View>
                </View>
            </View>
            <View style={{paddingLeft:20,paddingTop:30,height:90,width:'100%'}}>
    <Text style={{fontSize:20,color:'#2C3A4B',fontWeight:'800'}}>Yesterday</Text>
    </View>

            <View style={{width:'100%',paddingTop:10,flexDirection:'row'}}>
                <View style={{width:'25%',alignItems:'center'}}>
                        <Image  source={ImageContact} />
                </View>
                <View style={{height:90,paddingTop:10,paddingLeft:5,flexDirection:'column',width:'70%'}}>
                    <View style={{}}>
                    <Text>
                    <Text >You received a payment of</Text>
                    <Text style={{color:'red'}}> $450.00</Text>
                    </Text>
                    <Text >from Grace Anastasia</Text>
                    
                </View>
                <View>
                <Text style={{color:'#6D7580',paddingTop:5}}>10.10 AM</Text>
                </View>
                </View>
            </View>
            <View style={{width:"85%",borderColor:'#B9BABB',alignSelf:'center',borderTopWidth:0.7}}></View>
            <View style={{width:'100%',paddingTop:20,flexDirection:'row'}}>
                <View style={{width:'25%',alignItems:'center'}}>
                        <Image  source={ImageContact} />
                </View>
                <View style={{height:90,paddingTop:10,paddingLeft:5,flexDirection:'column',width:'70%'}}>
                    <View style={{}}>
                    <Text>
                    <Text >You received a payment of</Text>
                    <Text style={{color:'red'}}> $450.00</Text>
                    </Text>
                    <Text >from Grace Anastasia</Text>
                    
                </View>
                <View>
                <Text style={{color:'#6D7580',paddingTop:5}}>10.10 AM</Text>
                </View>
                </View>
            </View>
            <View style={{paddingLeft:20,paddingTop:30,height:90,width:'100%'}}>
            <Text style={{fontSize:20,color:'#2C3A4B',fontWeight:'800'}}>This weekend</Text>
    </View>

            <View style={{width:'100%',paddingTop:10,flexDirection:'row'}}>
                <View style={{width:'25%',alignItems:'center'}}>
                        <Image  source={ImageContact} />
                </View>
                <View style={{height:90,paddingTop:10,paddingLeft:5,flexDirection:'column',width:'70%'}}>
                    <View style={{}}>
                    <Text>
                    <Text >You received a payment of</Text>
                    <Text style={{color:'red'}}> $450.00</Text>
                    </Text>
                    <Text >from Grace Anastasia</Text>
                    
                </View>
                <View>
                <Text style={{color:'#6D7580',paddingTop:5}}>10.10 AM</Text>
                </View>
                </View>
            </View>
            <View style={{width:"85%",borderColor:'#B9BABB',alignSelf:'center',borderTopWidth:0.7}}></View>
            <View style={{width:'100%',paddingTop:20,flexDirection:'row'}}>
                <View style={{width:'25%',alignItems:'center'}}>
                        <Image  source={ImageContact} />
                </View>
                <View style={{height:90,paddingTop:10,paddingLeft:5,flexDirection:'column',width:'70%'}}>
                    <View style={{}}>
                    <Text>
                    <Text >You received a payment of</Text>
                    <Text style={{color:'red'}}> $450.00</Text>
                    </Text>
                    <Text >from Grace Anastasia</Text>
                    
                </View>
                <View>
                <Text style={{color:'#6D7580',paddingTop:5}}>10.10 AM</Text>
                </View>
                </View>
            </View>

    

    </ScrollView>
    </SafeAreaView>
  )
}

export default Notifications