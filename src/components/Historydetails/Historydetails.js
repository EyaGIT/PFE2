import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Modal from 'react-native-modal';

const screenHeight = Dimensions.get('window').height;

const Historydetails = ({ isVisible, onClose, item }) => {
  console.log(item,"cbon hhhh");
  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose} style={styles.modal}>
      <View style={styles.buttons}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Payment details</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.label}>Shop name</Text>
          <Text style={styles.value}>Chaneb tacos</Text>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.rowContainer}>
          <Text style={styles.label}>Products</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text>Pizza</Text>
          <Text>Qte:2</Text>
          <Text style={{ color: 'black' }}>15 DT</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text>Pizza</Text>
          <Text>Qte:2</Text>
          <Text style={{ color: 'black' }}>15 DT</Text>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.rowContainer}>
          <Text style={styles.label}>Total</Text>
          <Text style={styles.total}>20 DT</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    height: screenHeight,
  },
  buttons: {
    backgroundColor: 'white',
    flexDirection: 'column',
    borderRadius: 30,
    minHeight: screenHeight / 4,
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    width: '90%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
  },
  title: {
    fontSize: 19,
    fontWeight: '600',
  },
  rowContainer: {
    width: '90%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
  },
  label: {
    fontSize: 16,
    color: '#756D81',
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
  },
  separator: {
    width: '100%',
    borderColor: '#B3B3B5',
    alignSelf: 'center',
    borderTopWidth: 1.4,
  },
  total: {
    fontWeight: 'bold',
    color: 'red',
  },
});

export default Historydetails;
