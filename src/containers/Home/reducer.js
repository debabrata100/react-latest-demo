import * as actionTypes from './constants';
import produce from "immer";
export const initialState = {
    quantity: 0,
    loading: false,
    firstName: "Jesse",
    lastName: 'Pinkman'
}

const reducer = (state = initialState, action) => produce(state, draft=>{
    switch(action.type){
        case actionTypes.QUANTITY_UP_START:
            draft.loading = true;
            break;
        case actionTypes.QUANTITY_DOWN_START:
            draft.loading = true;
            break;
        case actionTypes.QUANTITY_UP_SUCCESS:
            draft.quantity = state.quantity + action.value;
            draft.loading = false;
            break;
        case actionTypes.QUANTITY_DOWN_SUCCESS:
            draft.quantity = state.quantity - action.value;
            draft.loading = false;
            break;
        case actionTypes.QUANTITY_UP:
            draft.quantity = state.quantity + action.value;
            break;
        case actionTypes.QUANTITY_DOWN:
            draft.quantity = state.quantity - action.value;
            break;
        default: return;
    }
});
// const reducer = (state = initialState, action) => {
//     switch(action.type){
//         case actionTypes.QUANTITY_UP_START:
//             return {...state, loading: true }
//         case actionTypes.QUANTITY_DOWN_START:
//             return {...state, loading: true }
//         case actionTypes.QUANTITY_UP_SUCCESS:
//             return {...state, quantity: state.quantity + action.value, loading: false }
//         case actionTypes.QUANTITY_DOWN_SUCCESS:
//             return {...state, quantity: state.quantity - action.value, loading: false }
//         case actionTypes.QUANTITY_UP:
//             return { ...state, quantity: state.quantity + action.value }
//         case actionTypes.QUANTITY_DOWN:
//             return { ...state, quantity: state.quantity - action.value }
//         default: return {...state };
//     }
// }
export default reducer;