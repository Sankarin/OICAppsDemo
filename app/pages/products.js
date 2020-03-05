import React, {Component} from 'react';
import {View, StyleSheet, FlatList,Text} from 'react-native';
import {connect} from 'react-redux';
import Product from '../components/Product.component';
import {fetchProducts} from '../redux/actions/productAction';
import Logo from '../components/Logo.component';
import Cart from '../components/Cart.component';
class Products extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Products',
      headerLeft: <Logo navigation={navigation} />,
      headerRight: <Cart navigation={navigation} />,
    };
  };
  constructor(props) {
    super(props);
  }
  componentWillMount = () => {
    this.props.fetchProducts();
  };
 
  render() {
    const {products, navigation,loading} = this.props;
    console.log(loading)
    return (
      <View style={styles.container}>
       {
       !loading &&
        <View style={styles.body}>
        <FlatList
          data={products}
          renderItem={({item}) => (
            <Product
              item={item}
              product={item}
              navigation={navigation}
            />
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => (
            <View style={{height: 0.5, backgroundColor: '#34495e90'}} />
          )}
        />
      </View>
  }<View style={styles.loadingSpinnerContainer}>
  {
    loading &&

    <Text >Loading ......</Text>
  }
  </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    justifyContent: 'center',
  },
  loadingSpinnerContainer:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
  },
});
const mapStateToProps = state => ({
  products: state.products.items,
  loading:state.products.loading,
});
const mapDispatchToProps = {
  fetchProducts,
};
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
export default AppContainer;
