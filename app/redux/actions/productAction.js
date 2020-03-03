import {FETCH_PRODUCTS} from './types';
import {getProducts} from '../../data';
import {client} from '../../../client';
export const fetchProducts = () => dispatch => {
  // const books = getProducts();

  //  dispatch({
  //     type: FETCH_PRODUCTS,
  //     payload: books
  // })

  client.product.fetchAll().then(products => {
    let temp = products.map(res => {
      return {
        id: '10',
        title: res.title,
        author: 'Eyeglasses',
        authorbio: 'A senior software engineer at PoP Art.',
        publicationdate: '2014-6-27',
        introduction:
          'Learn to build modern web applications with node and expressjs ',
        cost: res.variants[0].price,
        picture: res.images.length ? res.images[0].src : '',
      };
    });

    dispatch(fetchProductsSuccess(temp));
  });
};

function fetchProductsSuccess(products) {
  return {
    type: FETCH_PRODUCTS,
    payload: products,
  };
}
