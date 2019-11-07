import React, { Suspense, lazy, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeSelectUser } from './selectors';
import * as actionTypes from './constants'; 
import { Title, PriceTag, Actions, Button, HomeContainer } from "./ui";
import reducer from "./reducer";
import { ReactReduxContext } from "react-redux";


const PinkmanHappy = lazy(()=> import ('../../components/PinkmanHappy'))
const PinkmanAngry = lazy(()=> import ('../../components/PinkmanAngry'))

const pinkmanLazy = (quantity) => {
    if(quantity > 5){
        return (<Suspense fallback={<div>Loading...</div>}>
                    <PinkmanHappy count={quantity} />
                </Suspense>
        );
    }else if(quantity > 0){
        return (<Suspense fallback={<div>Loading...</div>}>
                    <PinkmanAngry count={quantity} />
                </Suspense>
                );
    }
    return null;
}

function Home({ quantity, loading, onQuantityUp, onQuantityDown, onQuantityAsyncUp, onQuantityAyncDown, userName }) {
    const context = React.useContext(ReactReduxContext);
    // console.log("context",context);
    useEffect(()=>{
        context.store.injectReducer('home', reducer);
    })
  return (
    <HomeContainer>
        <Title>Seller: {userName}</Title>
        {pinkmanLazy(quantity)}
        <PriceTag>Methamphetamine Quantity: $ {quantity} pound</PriceTag>
        <Actions>
            <Button onClick={onQuantityUp} disabled={loading}>UP</Button>
            <Button onClick={onQuantityAsyncUp} disabled={loading}>{loading ? 'loading...' : 'ASYNC UP'}</Button>
            <Button onClick={onQuantityDown} disabled={loading}>DOWN</Button>
            <Button onClick={onQuantityAyncDown} disabled={loading}>{loading ? 'loading...' : 'ASYNC DOWN'}</Button>
        </Actions>
    </HomeContainer>
  );
}

const mapStateToProps = state =>({
  ...state.home,
  userName: makeSelectUser()
})
const mapDispatchToProps = dispatch => ({
    onQuantityAsyncUp: () => dispatch({ type: actionTypes.QUANTITY_ASYNC_UP, value: 1 }),
    onQuantityUp: () => dispatch({ type: actionTypes.QUANTITY_UP, value: 1 }),
    onQuantityDown: () => dispatch({ type: actionTypes.QUANTITY_DOWN, value: 1 }),
    onQuantityAyncDown: () => dispatch({ type: actionTypes.QUANTITY_ASYNC_DOWN, value: 1 })
    
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);
