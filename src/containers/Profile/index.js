import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";
import { ReactReduxContext } from "react-redux";
import reducer from "./reducer";
import * as actionTypes from "./constants";

const AboutContainer = styled.div`
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const RecipesContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const Recipe = styled.div`
    color: orange;
    font-weight: bold;
    font-size: 18px;
    line-height: 32px;
    cursor: pointer;
    ${props =>
        props.read &&
        css`
            text-decoration: line-through;
            opacity: 0.6;
        `}
`;
function Profile(props) {
    const { name, recipes, markasRead, markasUnRead } = props;
    const context = React.useContext(ReactReduxContext);
    // console.log("context",context);
    useEffect(() => {
        context.store.injectReducer("profile", reducer);
    }, []);
    const onRecipeClicked = (rcp, index) => {
        if (rcp.read) {
            markasUnRead(index);
        } else {
            markasRead(index);
        }
        console.log("rcp", rcp);
    };
    return (
        <AboutContainer>
            <h1>{name}</h1>
            Recipes to cook
            <RecipesContainer>
                {recipes &&
                    recipes.map((rcp, index) => (
                        <Recipe
                            key={index}
                            onClick={e => onRecipeClicked(rcp, index)}
                            {...rcp}
                        >
                            {rcp.name}
                        </Recipe>
                    ))}
            </RecipesContainer>
        </AboutContainer>
    );
}
const mapStateToProps = state => ({
    ...state.profile
});
const mapDispatchToProps = dispatch => ({
    markasRead: index => dispatch({ type: actionTypes.MARK_AS_READ, index }),
    markasUnRead: index => dispatch({ type: actionTypes.MARK_AS_UNREAD, index })
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
