import { CHECKOUT_UPDATE_SHIPPING_ADDRESS } from './types';
import {client} from '../../../client';

export const addOrder = (checkoutId,shippingAddress,data) => dispatch => {

    client.checkout.updateShippingAddress(checkoutId, shippingAddress).then(checkout => {
        // Do something with the checkout
       // console.log(checkout)
        dispatch({
            type: CHECKOUT_UPDATE_SHIPPING_ADDRESS,
            payload: data
        })
      });
}