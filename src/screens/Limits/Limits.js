import React,{useState,useLayoutEffect,useCallback,useRef} from 'react';
import {StyleSheet,View, Text,Image,TouchableOpacity,ScrollView,Dimensions,StatusBar} from 'react-native';
import Slider from "@react-native-community/slider";
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListItem from '../../components/ListItem/ListItem'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const TITLES = [
    'Record the dismissible tutorial 🎥',
    'Leave 👍🏼 to the video',
    'Check YouTube comments',
    'Subscribe to the channel 🚀',
    'Leave a ⭐️ on the GitHub Repo',
  ];
  const data = [
    { shopTitle:'shop', product:['pizza','sandwich']},
    { shopTitle:'Chaneb tacos', product:['pizza','sandwich']}
];
  
  const TASKS = data.map((item, index) => ({ title:item.shopTitle,product:item.product, index }));
  const BACKGROUND_COLOR = '#FAFBFF';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const Limits = () => {
    const navigation=useNavigation();
    useLayoutEffect(()=>{
      navigation.setOptions({
        headerShown:false,
      })
    }, [])


    const [tasks, setTasks] = useState(TASKS);

    const onDismiss = useCallback((task) => {
      setTasks((tasks) => tasks.filter((item) => item.index !== task.index));
    }, []);
  
    const scrollRef = useRef(null);


    const [range, setRange] = useState('50%');
    const [sliding, setSliding] = useState('Inactive');
    return (
        <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 1}} locations={[0,0.6]} colors={['#E20522', '#000000']} style={styles.linearGradient}>
          
          <SafeAreaView style={styles.SafeAreaView}>
          <StatusBar barStyle="light-content" backgroundColor={'transparent'} translucent={true} />
            
          <ScrollView style={styles.scrollView}  showsVerticalScrollIndicator={false}>
          
         <View style={{flex: 1}}>
            <Text style={{textAlign: 'center',fontSize: 25,color:'#FFFFFF',paddingBottom:30,paddingTop:30}}>Limits</Text>
            
        </View>      
     

          
      <SafeAreaView style={styles.body}>
      <View style={{flex: 1}}>
      <Text>Limit Per transaction</Text>
            <Text>{range}</Text>
            
            <Slider style={{flex: 1}}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor='tomato'
            maximumTrackTintColor='#000'
            thumbTintColor='red'
            value={.5}
            onValueChange={value => setRange(value)}
            />
        </View>
        <View style={{flex: 1}}>
        <Text>Limit Per transaction</Text>
        <Text>{range}</Text>
            
            <Slider style={{flex: 1}}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor='tomato'
            maximumTrackTintColor='#000'
            thumbTintColor='red'
            value={.5}
            onValueChange={value => setRange(value)}
            />
        </View>
        <View style={{flex: 5}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontSize:24,fontWeight:'bold',color:'black'}}>Limits</Text>
                <TouchableOpacity><Text>add</Text></TouchableOpacity>
            </View>
            {console.log(tasks)}
            {tasks.map((task) => (
          <ListItem
            simultaneousHandlers={scrollRef}
            key={task.index}
            task={task}
            onDismiss={onDismiss}
          />
        ))}
        </View>
          
        


        
        
        
        <View >
         


        </View>
      
      
      
      
            
          </SafeAreaView>
          </ScrollView>
          </SafeAreaView>
        </LinearGradient>
       
        
    );
}

const styles = StyleSheet.create({
    scrollView: {
        width:screenWidth,
        color:'black',
        height:screenHeight,
        flex:1,
      },
      flex:{alignItems: 'center',
      justifyContent:'center',},
      
      linearGradient: {
        flex:1
        
      },
      SafeAreaView:{
        flex:1
      },
     
     
    
    body:{
      
      paddingLeft:20,
      paddingRight:20,
      backgroundColor:'#FBFBFB',
      borderTopLeftRadius:45,
      borderTopRightRadius:45,
      flex:1,
      minHeight:screenHeight-77,
      
      width:'100%'
      
      
      },
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    stepIndicator: {
      marginVertical: 50,
      position:"absolute",
      width:screenWidth,
      top:-70,
      
      
    },
    page: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    stepLabel: {
      fontSize: 12,
      textAlign: 'center',
      fontWeight: '500',
      color: '#999999',
    },
    stepLabelSelected: {
      fontSize: 12,
      textAlign: 'center',
      fontWeight: '500',
      color: '#E20522',
    },
      slide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 22,
      fontWeight: '600',
      color:'black',
      paddingTop:10
      
    },
    input: {
      height: 40,
      width: '80%',
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 16,
      marginBottom: 16,
    },
  });
  export default () => {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Limits />
      </GestureHandlerRootView>
    );
  };



  
