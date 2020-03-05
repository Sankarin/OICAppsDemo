import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity,FlatList,Dimensions} from 'react-native';
import themes from '../styles/theme.style';


class ProductImage extends Component{

    render() {
        const {product_Image} = this.props;
        return (
          <View style={styles.container}>
            <Image 
          source = { product_Image===''
          ? 
          require('../assets/images/placeholder.png')
          : 
          {uri: product_Image} }   style ={
            product_Image===''?
             styles.placeholderStyle  :
            styles.imageStyle 
          }
        
          />
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
        imageStyle:
        {
            resizeMode:'contain',
            height: 150, 
            width: Dimensions.get('screen').width, 
            margin:20,
        },
        placeholderStyle: {
          height: 100,
           width: 100,
            resizeMode : 'center', 
            marginTop:10,
            opacity:0.1
      },
      });
      
      export default ProductImage;