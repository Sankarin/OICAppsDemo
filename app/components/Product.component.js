import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import themes from '../styles/theme.style';

class Product extends Component {
  ViewItem = (navigation,product) => {
    navigation.navigate('ProductDetails',{product:product})
  };
 
  render() {
    const {product,navigation} = this.props;
    let ProductImage=product.images.length ? product.images[0].src : ''
    return (
      <View style={styles.container}>
        <View>
         <Image 
          source = { ProductImage===''
          ? 
          require('../assets/images/placeholder.png')
          : 
          {uri: ProductImage} }   style ={
            ProductImage===''?
             styles.placeholderStyle  :
            styles.imageStyle 
          }
        
          />
 
        </View>
        <View style={styles.productDes}>
          <Text>{product.title}</Text>
          <Text>${product.variants[0].price}</Text>
          <Text>{product.productType}</Text>
          <TouchableOpacity onPress={() =>this.ViewItem(navigation,product)} style={styles.viewBtn}>
            <Text style={styles.text}>View</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#fff',
  },
  productDes: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  viewBtn: {
    borderRadius: 5,
    margin: 10,
    width:100,
    backgroundColor: themes.BUTTON_COLOR,
    alignItems:'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    padding: 10,
  },
  imageStyle:
  {
      resizeMode: 'center',
      height: 250, 
      width: 250, 
  },
  placeholderStyle:
  {height: 100,
     width: 100,
      resizeMode : 'center', 
      marginTop:10,
      opacity:0.1},
});
export default Product;
