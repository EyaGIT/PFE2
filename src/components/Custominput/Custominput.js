import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Custominput = ({ value, setValue, placeholder, secureTextEntry, focus,keyboard }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry && !showPassword}
        onFocus={focus}
        keyboardType={keyboard}
        
      />

      {secureTextEntry && (
        <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIconContainer}>
          <Image
            source={showPassword ? require('../../../assets/images/icons/show.png') : require('../../../assets/images/icons/hide.png')}
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:"#F9F9F9",
    width: '100%',
    color: 'black',
    borderColor: '#A5ABB3',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
   
  },
  input: {
    flex: 1,
    color: 'black',
  },
  eyeIconContainer: {
    marginLeft: 10,
  },
  eyeIcon: {
    width: 20,
    height: 20,
    
  },
});

export default Custominput;
