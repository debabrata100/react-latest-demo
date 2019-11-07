import React from "react";
import styled, { css } from "styled-components";

import { Switch, Route, Link } from "react-router-dom";

import Home from "../Home";
import About from "../About";
import Profile from "../Profile";
import history from "../../utils/history";
import { connect } from "react-redux";

const AppContainer = styled.div`
    width: 100%;
`;
const AppHeader = styled.div`
    width: 100%;
    display: flex;
    height: 60px;
    align-items: center;
    // background: orange;
`;
const HeaderLink = styled(Link)`
    display: inline-flex;
    padding: 0.25em 2em;
    margin: 1em;
    text-decoration: none;
    border-radius: 4px;
    -webkit-font-smoothing: antialiased;
    -webkit-touch-callout: none;
    user-select: none;
    cursor: pointer;
    outline: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: bold;
    font-size: 16px;
    border: 2px solid #41addd;
    color: #41addd;
    ${props =>
        props.selected &&
        css`
            background-color: #41addd;
            color: #fff;
        `}
    &:active {
        background: #41addd;
        color: #fff;
    }
`;
function App(props) {
    const handlePush = () => {
        history.push("/about");
    };
    return (
        <AppContainer>
            <AppHeader>
                <HeaderLink to="/home" selected={props.pathname === "/home"}>
                    Home
                </HeaderLink>
                <HeaderLink to="/about" selected={props.pathname === "/about"}>
                    About
                </HeaderLink>
                <HeaderLink to="/" selected={props.pathname === "/"}>
                    Profile
                </HeaderLink>
                <button
                    onClick={handlePush}
                    style={{ height: 20, cursor: "pointer" }}
                >
                    test push menthod
                </button>
            </AppHeader>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/" component={Profile} />
            </Switch>
        </AppContainer>
    );
}
const mapStateToProps = state => ({
    pathname: state.router.location.pathname,
    search: state.router.location.search,
    hash: state.router.location.hash
});
export default connect(mapStateToProps)(App);
