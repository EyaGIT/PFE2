import React from 'react';
import {View, StyleSheet, Text,TouchableOpacity,Dimensions} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import DropShadow from "react-native-drop-shadow";
const CustomTabBarButton = props => {
    const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
    const {route,children, accessibilityState,onPress} = props
    


    if (route ==='Home') {
        return (
          <View style={styles.btnWrapper}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={[
                  styles.svgGapFiller,
                  {
                    borderTopLeftRadius: route === 'Home' ? 0 : 0,
                  },
                ]}
              />
              
              
                
              <View
                style={[
                  styles.svgGapFiller,
                  {
                    borderTopRightRadius: route === 'Settings' ? 10 : 0,
                  },
                ]}
              />
            </View>
    
            <TouchableOpacity
              activeOpacity={1}
              onPress={onPress}
              style={[styles.activeBtn,{backgroundColor: accessibilityState.selected ? 'red':'red'},styles.Home]}>
                <View>{children}</View>
              
            </TouchableOpacity>
          </View>
        );
      } else {
        return (
            
          <TouchableOpacity
            activeOpacity={1}
            onPress={onPress}
            style={[
              styles.inactiveBtn,
              {
                borderTopLeftRadius: route === 'Home' ? 10 : 0,
                borderTopRightRadius: route === 'Settings' ? 10 : 0,
              },
            ]}>
            <View>{children}</View>
          </TouchableOpacity>
        );
      }
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
      },
    btnWrapper: {
        flex: 1,
        alignItems: 'center',
        
        
      },
      activeBtn: {
        flex: 1,
        position: 'absolute',
        top: -22,
        width: 65,
        height: 65,
        borderRadius: 65 / 2,
        
        alignItems: 'center',
        justifyContent: 'center',

        
        
      },
      inactiveBtn: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'flex-end',
        height:'100%',
        
      },
      svgGapFiller: {
        flex: 1,
        backgroundColor:'white',
        width: 65,
        height: 65,
        alignSelf:'flex-end',
        
      },
})

export default CustomTabBarButton;
