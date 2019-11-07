import * as actionTypes from './constants';
export const quantityUpSuccess = (payload) => ({
    type: actionTypes.QUANTITY_UP_SUCCESS,
    value: payload.value
})
export const quantityDownSuccess = (payload) => ({
    type: actionTypes.QUANTITY_DOWN_SUCCESS,
    value: payload.value
})