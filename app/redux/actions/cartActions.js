import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART ,CHECKOUT_CREATE} from './types';
import {client} from '../../../client'


export const checkoutCreate = () => dispatch => {

    client.checkout.create().then((checkout) => {
        // Do something with the checkout
        dispatch({
            type: CHECKOUT_CREATE,
            payload: checkout.id
        })
      });
}
export const addToCart = (checkoutId,lineItemsToAdd) => dispatch => {

    client.checkout.addLineItems(checkoutId, lineItemsToAdd).then((checkout) => {
     //   console.log(checkout.lineItems)
        // Do something with the updated checkout
        dispatch({
            type: ADD_TO_CART,
            payload: checkout.lineItems
        })
      });
    

    
}
export const removeItem = (checkoutId, lineItemIdsToRemove,item) => dispatch => {
    //console.log(item)

    client.checkout.removeLineItems(checkoutId, lineItemIdsToRemove).then((checkout) => {
        // Do something with the updated checkout
        //console.log(checkout); 

        dispatch({
            type: REMOVE_FROM_CART,
            payload: item,
        })
      });
    
}
export const emptyCart = () => dispatch => {
    dispatch({
        type: EMPTY_CART,
    })
}

