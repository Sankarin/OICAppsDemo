import React,{Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import {connect} from 'react-redux';
import themes from '../styles/theme.style';
import ProductItem from'../components/ProductItem.component';
import {checkoutCreate,addToCart} from '../redux/actions/cartActions';

class ProductDetails extends Component{

  constructor(props) {
    super(props);
   
}

componentDidMount = () =>{
  if(this.props.checkoutId.length==0) {
    this.props.checkoutCreate();
   
  }
}

_addItemsToCart = (product) => {
  const lineItemsToAdd = [
    {
      variantId: product.variants[0].id,
      quantity: 1,
      // customAttributes: [{key: "Price", value: product.variants[0].price}]
    }
  ];
 
  const {checkoutId}=this.props
  console.log(checkoutId)
  this.props.addToCart(checkoutId,lineItemsToAdd);
};
     
    render(){
        const {navigation,route}=this.props
         const product = route.params.product
        return(
            <ScrollView>
             <ProductItem
                item={product}
                addItemsToCart={this._addItemsToCart}
                product={product}
                navigation={navigation}
              />
        </ScrollView>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products.items,
    checkoutId:state.cart.checkoutId
  });
  const mapDispatchToProps = {
    checkoutCreate,
      addToCart,
  };
  const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ProductDetails);
  export default AppContainer;