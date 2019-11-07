// import React from "react";
import styled from 'styled-components';

export const HomeContainer = styled.div`
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Title = styled.h3`
    font-size: 16px;
    color: #000;
`;
export const PriceTag = styled.div`
    font-weight: bold;
    color: orange;
    font-size: 20px;
    margin: 8px 0px 16px 0px;
`;
export const Actions = styled.div`
    display: flex;
    align-items: center;
    width: 400px;
    justify-content: space-between;
`;
export const Button = styled.button`
    padding: 5px;
    font-size: 14px;
    background-color: orange;
    border: none;
    border-radius: 8px;
    min-width: 80px;
    cursor: pointer;
    outline: none;
    color: #fff;
    font-weight: bold;
    &[disabled]{
        opacity: 0.5;
        cursor: default;
    }
`;
