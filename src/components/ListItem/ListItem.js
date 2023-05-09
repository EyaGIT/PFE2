import React from 'react';
import { Dimensions, StyleSheet, Text, View,Image } from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProps,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { TaskInterface } from '../App';
import { FontAwesome5 } from '@expo/vector-icons';
import Trash from '../../../assets/images/icons/Trash.png';
import ta from '../../../assets/images/Tacos.png';

const LIST_ITEM_HEIGHT = 70;

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * 0.05;

const ListItem = ({
  task,
  onDismiss,
  simultaneousHandlers,
}) => {
  const translateX = useSharedValue(0);
  const itemHeight = useSharedValue(LIST_ITEM_HEIGHT);
  const marginVertical = useSharedValue(10);
  const opacity = useSharedValue(1);

  const panGesture = useAnimatedGestureHandler({
    onActive: (event) => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      const shouldBeDismissed = translateX.value < TRANSLATE_X_THRESHOLD;
      if (shouldBeDismissed) {
        translateX.value = withTiming(-SCREEN_WIDTH);
        itemHeight.value = withTiming(0);
        marginVertical.value = withTiming(0);
        opacity.value = withTiming(0, undefined, (isFinished) => {
          if (isFinished && onDismiss) {
            runOnJS(onDismiss)(task);
          }
        });
      } else {
        translateX.value = withTiming(0);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  const rIconContainerStyle = useAnimatedStyle(() => {
    const opacity = withTiming(
      translateX.value < TRANSLATE_X_THRESHOLD ? 1 : 0
    );
    return { opacity };
  });

  const rTaskContainerStyle = useAnimatedStyle(() => {
    return {
      height: itemHeight.value,
      marginVertical: marginVertical.value,
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View style={[styles.taskContainer, rTaskContainerStyle]}>
      <Animated.View style={[styles.iconContainer, rIconContainerStyle]}>
      
        <Image source={Trash} style={{height:LIST_ITEM_HEIGHT * 0.5,width:LIST_ITEM_HEIGHT * 0.5}} />
      </Animated.View>
      <PanGestureHandler
        simultaneousHandlers={simultaneousHandlers}
        onGestureEvent={panGesture}
      >
        <Animated.View  key={task.index} style={[styles.task, rStyle]}>
         
            <Image source={task.image} style={{width:55,aspectRatio: 1, resizeMode: 'contain',marginRight:10}} />
            <View>
          <Text style={styles.taskTitle}>{task.title}</Text>
          <Text>Products not allowed :</Text>
          <View style={{flexDirection:'row'}}>
          {task.product.map((product,index) => (
          <Text key={index} style={styles.taskProduct}>{product}, </Text>
          
        ))}</View>
        </View>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
    taskContainer: {
      width: '100%',
      alignItems: 'center',
      
    },
    task: {
      width: '90%',
      height: LIST_ITEM_HEIGHT,
      justifyContent: 'flex-start',
      paddingLeft: 20,
      backgroundColor: '#EDEDED',
      borderRadius: 10,
      flexDirection:'row',
      alignItems:'center'
      // Shadow for iOS
      
      // Shadow for Android
      
    },
    taskTitle: {
      fontSize: 16,
      color:'red',
      fontWeight:'bold'
    },
    taskProduct: {
        fontSize: 10,
        color:"#A3ADB2"
      },
    iconContainer: {
      height: LIST_ITEM_HEIGHT,
      width: LIST_ITEM_HEIGHT,
      position: 'absolute',
      right: '0%',
      justifyContent: 'center',
      alignItems: 'center',

    },
  });
  
  export default ListItem;