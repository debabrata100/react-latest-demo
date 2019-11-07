import React, { Suspense, lazy } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { makeSelectUser } from './selectors';
import * as actionTypes from './constants'; 
import { Title, PriceTag, Actions, Button } from "./ui";
// import Pinkman from "./PinkmanLazyComponent";

const Pinkman = lazy(()=> import ('./PinkmanLazyComponent'))


function App({ quantity, loading, onQuantityUp, onQuantityDown, onQuantityAsyncUp, onQuantityAyncDown, userName }) {
  return (
    <div className="App">
        <Title>Seller: {userName}</Title>
        { 
            quantity > 0 && 
            <Suspense fallback={<div>Loading...</div>}>
              <Pinkman count={quantity} />
            </Suspense>
        }
        <PriceTag>Methamphetamine Quantity: $ {quantity} pound</PriceTag>
        <Actions>
            <Button onClick={onQuantityUp} disabled={loading}>UP</Button>
            <Button onClick={onQuantityAsyncUp} disabled={loading}>{loading ? 'loading...' : 'ASYNC UP'}</Button>
            <Button onClick={onQuantityDown} disabled={loading}>DOWN</Button>
            <Button onClick={onQuantityAyncDown} disabled={loading}>{loading ? 'loading...' : 'ASYNC DOWN'}</Button>
        </Actions>
    </div>
  );
}

const mapStateToProps = state =>({
  ...state.appReducer,
  userName: makeSelectUser(state.appReducer)
})
const mapDispatchToProps = dispatch => ({
    onQuantityAsyncUp: () => dispatch({ type: actionTypes.QUANTITY_ASYNC_UP, value: 1 }),
    onQuantityUp: () => dispatch({ type: actionTypes.QUANTITY_UP, value: 1 }),
    onQuantityDown: () => dispatch({ type: actionTypes.QUANTITY_DOWN, value: 1 }),
    onQuantityAyncDown: () => dispatch({ type: actionTypes.QUANTITY_ASYNC_DOWN, value: 1 }),
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
