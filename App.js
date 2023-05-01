/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,

} from 'react-native';
;
import Navigation from './src/navigation';




const App = () => {
return (
  <SafeAreaView style={Styles.root}>
    <Navigation/>
  </SafeAreaView>
);

};
const Styles =StyleSheet.create({

  root:{
    flex : 1,
  }
});






export default App;
