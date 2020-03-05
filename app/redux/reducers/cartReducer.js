import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART,CHECKOUT_CREATE} from '../actions/types';
const initialState = {
    cart: [],
    total: 0,
    checkoutId:'',
}
export default function(state=initialState, action) {
    switch(action.type){
        case CHECKOUT_CREATE:
            return {
                ...state,
                checkoutId:action.payload,
            }
        case ADD_TO_CART:
            return {
                ...state,
                cart: [action.payload, ...state.cart],
                total: state.total +Number(action.payload[0].variant.price) 
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item, i) => i !== action.payload.index),
                total: state.total - Number(action.payload.item[0].variant.price)
            }
        case EMPTY_CART:
            return {
                ...state,
                cart: [],
                total: 0,
                checkoutId:'',
            }
        
        default:
            return state
    }
}