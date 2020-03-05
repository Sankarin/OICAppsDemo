import {FETCH_PRODUCTS} from './types';
import {getProducts} from '../../data';
import {client} from '../../../client';


export const fetchProducts = () => dispatch => {
 
  const collectionId ='Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzE1OTg3NDI4NTY2NA==';
  
  client.collection.fetchWithProducts(collectionId, {productsFirst: 20}).then((collection) => {
    
    //console.log(collection)
    dispatch(fetchProductsSuccess(collection.products));
  });
};

function fetchProductsSuccess(products) {
  return {
    type: FETCH_PRODUCTS,
    payload: products,
    loading:false,
  };
}
