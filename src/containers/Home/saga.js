import { delay, put, takeLatest, takeEvery } from 'redux-saga/effects';
import * as actionTypes from "./constants";
import * as actions from './actions';
// import { push } from 'connected-react-router'

// handlers
function* asyncUp(payload) {
    yield put({ type: actionTypes.QUANTITY_UP_START });
    yield delay(1000);
    yield put(actions.quantityUpSuccess(payload));
    // yield put(push('/about'))
}
function* asyncDown(payload){
    yield put({ type: actionTypes.QUANTITY_DOWN_START });
    yield delay(1000);
    yield put(actions.quantityDownSuccess(payload));
}

// watchers
export function* watchAsyncUp(){
    yield takeLatest(actionTypes.QUANTITY_ASYNC_UP,asyncUp);
    yield takeEvery(actionTypes.QUANTITY_ASYNC_DOWN, asyncDown);
}