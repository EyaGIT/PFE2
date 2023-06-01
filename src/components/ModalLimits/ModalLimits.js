import { View, Text,Image,Pressable,SafeAreaView,StyleSheet,Dimensions, TouchableOpacity} from 'react-native'
import React,{useEffect} from 'react'
import Modal from 'react-native-modal'
import Camera from '../../../assets/images/Camera.png'
import Gallery from '../../../assets/images/Gallery.png'
import { MultipleSelectList } from 'react-native-dropdown-select-list'
import CustomButton from '../CustomButton/CustomButton'
import { ScrollView } from 'react-native-gesture-handler'
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
import { Picker } from '@react-native-picker/picker';
import {getShopsProduct} from '../../api/user_api';
import { API_BASE_URL } from '@env';
const ModalLimits = ({
  isVisible,
  onClose,
  OnPress,
  addShop
}) => {
  const [selectedShop, setSelectedShop] = React.useState(null);
  const [selectedProducts, setSelectedProducts] = React.useState([]);
  const [shopData, setShopData] = React.useState([]);
  const [data, setData] = React.useState([]);

  const fetchData = async () => {
    const response = await getShopsProduct();
    let productsData = [];
  
    const products = response.data.products;
    for (const type in products) {
      productsData.push({ key: type, value: type, disabled: true });
  
      products[type].forEach(product => {
        productsData.push({ key: product.id, value: product.name });
      });
    }
  
    let shops = response.data.chains.map((chain, index) => {
      return { key: index.toString(), label: chain.chain_name, value: { name: chain.chain_name, image: chain.chain_image } };
    });
  
    setData(productsData);
    setShopData(shops);
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={styles.modal}
    >
      <SafeAreaView style={styles.buttons}>
        <ScrollView style={{ height: '50%', width: '90%' }}>
          <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: '700', paddingBottom: 40, paddingTop: 20 }}>
            New Limit
          </Text>
          <View style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 10, height: 50 }}>
            <Picker
              selectedValue={selectedShop}
              onValueChange={(itemValue, itemIndex) => setSelectedShop(itemValue)}
            >
              {shopData.map((item, index) => (
                <Picker.Item key={index} label={item.label} value={index} />
              ))}
            </Picker>
          </View>
          <View style={{ paddingTop: 20 }}>
            <MultipleSelectList 
              setSelected={(val) => {
                console.log(val)
                setSelectedProducts(val);
              }}
              data={data} 
              save="value"
              label="Select Shop"
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 20 }}>
            <View style={{ width: '40%', paddingRight: 10 }}>
              <CustomButton text='Apply' onPress={() => {
                const selectedChain = shopData[selectedShop]?.value || { name: '', image: '' };
                console.log({ title: selectedChain.name, product: selectedProducts, image: selectedChain.image });
                addShop({ title: selectedChain.name, product: selectedProducts, image: API_BASE_URL + "/uploads/" + selectedChain.image }); 
              }} />
            </View>
            <View style={{ width: '40%', paddingLeft: 10 }}>
              <CustomButton text='Reset'></CustomButton>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
   
    modal:{

        justifyContent:'flex-end',
        margin:0,
    },
    buttonIcon:{
    width:30,
    height:screenHeight/2,
    margin:10,
},

buttons:{
  backgroundColor:'white',
  flexDirection:'column',
  borderTopRightRadius:40,
  borderTopLeftRadius:40,
  minHeight:screenHeight/2,
  
  alignItems:'center',


},

button:{
 flex:1,
 justifyContent:'center',
 alignItems:'center',

},
buttonText:{

    fontSize:14,
    fontWeight:'600',
}





});

export default ModalLimits