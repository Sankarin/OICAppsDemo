import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import themes from '../styles/theme.style';

class ProductVartImage extends Component {
  selectedImage =()=>{
   this.props.dynamicImage(this.props.productImage)
  }
 
 render() {
    const {productImage} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>{this.selectedImage()}}>
        <Image source={{uri:productImage}} style={[{ width:59, height:59,resizeMode:'center',overflow:'hidden', 
                                borderRadius: 10,},{borderWidth:1,borderColor:'#e2e2e2',}]}/>
 
        </TouchableOpacity>
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
export default ProductVartImage;
