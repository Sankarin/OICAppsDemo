import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import themes from '../styles/theme.style';
class Product extends Component {
  addToCart = () => {
    this.props.addItemsToCart(this.props.item);
  };
  render() {
    const {product} = this.props;
    let ProductImage = {uri: product.picture};
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={ProductImage}
            style={{height: 150, margin: 3, width: 250, resizeMode: 'stretch'}}
          />
        </View>
        <View style={styles.productDes}>
          <Text>{product.title}</Text>
          <Text>${product.cost}</Text>
          <Text>{product.author}</Text>
          <TouchableOpacity onPress={this.addToCart} style={styles.addBtn}>
            <Text style={styles.text}>Add to cart</Text>
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
    marginTop: 10,
  },
  addBtn: {
    borderRadius: 30,
    margin: 10,
    backgroundColor: themes.BUTTON_COLOR,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    padding: 10,
  },
});
export default Product;
