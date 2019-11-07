import React from 'react';
import { initialState } from "./reducer";
import { createSelector } from 'reselect';

const selectAds = state =>  state.loading ? <label>Showing Ads from selectors</label> : 'ssasa';

const selectName = state => state || initialState;
const makeSelectUser =  
createSelector(
    selectName,
    (state) => {
        return `${state.firstName} ${state.lastName}`;
    }
);
export { selectAds, selectName, makeSelectUser } ;