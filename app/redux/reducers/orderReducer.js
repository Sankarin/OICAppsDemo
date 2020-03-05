import { CHECKOUT_UPDATE_SHIPPING_ADDRESS } from '../actions/types';
const initialState = {
        order: {
        items: [],
        customer: {}
    }
}
export default function(state = initialState, action) {
    switch(action.type) {
        case CHECKOUT_UPDATE_SHIPPING_ADDRESS:
            return {
                ...state,
                order: {customer: action.payload.customer, items: action.payload.cartItems}
            }
        default:
            return state
    }
}