import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity,FlatList,Dimensions} from 'react-native';
import themes from '../styles/theme.style';
import ProductVartImage from '../components/ProductVartImage.component';
import ProductImage from '../components/ProductImage.component';

class ProductItem extends Component {

  constructor(props) {
    super(props);
   this.state={
    productPreviewImage:'',
    itemProductImages:[],
   }
}
componentDidMount=()=>{
  const {product} = this.props;
    const productImg=product.images.length ? product.images[0].src : ''
    const itemProduct =product.images.map(function(item){
      if(product.option1==item.alt){
       return item.src;
       }
    });

  this.setState({
    productPreviewImage:productImg,
    itemProductImages:itemProduct
  })
}

  _addToCart = () => {
   // this.props.addItemsToCart(this.props.item);
    this.props.addItemsToCart(this.props.product)
  };
 
  renderImage=(image)=>{
      return ( 
      <ProductImage 
       product_Image={image}
         />  
    );
        
  }
  _dynamicImage =(image) =>{
    this.setState({
      productPreviewImage:image
    })
    
  }
  render() {
    const {product} = this.props;
    const itemProduct =product.images.map(function(item){
      if(product.option1==item.alt){
       return item.src;
       }
    });
    
    return (
      <View style={styles.container}>
         {
           this.renderImage(this.state.productPreviewImage)
         }
        <View style={styles.imageListStyle}>
        <FlatList
          data={this.state.itemProductImages}
          renderItem={({item}) => (
            <ProductVartImage
              itemImage={item}
              productImage={item}
              dynamicImage={this._dynamicImage}
            
            />
          )}
          horizontal={true}
          keyExtractor={item => item.id}
        />
        </View>
        <View style={styles.productDes}>
          <Text>{product.productType}</Text>
          <Text>{product.title}</Text>
          <Text>${product.variants[0].price}</Text>
          <TouchableOpacity onPress={this._addToCart} style={styles.addBtn}>
            <Text style={styles.text}>BUY FRAME ONLY</Text>
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
  addBtn: {
    borderRadius: 5,
    margin: 10,
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
      resizeMode: 'cover',
      height: 150, 
      width: Dimensions.get('screen').width, 
  },
  placeholderStyle: {
    height: 100,
     width: 100,
      resizeMode : 'center', 
      marginTop:10,
      opacity:0.1
},
imageListStyle: {

  justifyContent: 'center',
  alignItems: 'center',
  flex:1,
},

});

export default ProductItem;
