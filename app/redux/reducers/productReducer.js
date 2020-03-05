import { FETCH_PRODUCTS } from '../actions/types';
const initialState = {
    items: [],
    loading:true,
};
export default function(state = initialState, action) {
    switch(action.type){
        case FETCH_PRODUCTS:
            return {
                ...state,
                items:action.payload,
                loading:action.loading,
            }
        default:
            return state
    }
}