import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const AboutContainer = styled.div`
    padding: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
function About(props) {
    const { pathname, about } = props;

    return (
        <AboutContainer>
            About page: ({pathname})<p>{about}</p>
        </AboutContainer>
    );
}
const mapStateToProps = state => ({
    pathname: state.router.location.pathname,
    search: state.router.location.search,
    hash: state.router.location.hash,
    ...state.about
});
export default connect(mapStateToProps)(About);
