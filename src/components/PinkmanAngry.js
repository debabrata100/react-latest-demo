import React from "react";
import { PinkmanContainer } from "./ui";
const gun = 'http://static6.businessinsider.com/image/51e6b01ceab8ea8b61000002-960/jesse-breaking-bad-gun.jpg';
const pinkMan = ({ count }) => (
    <PinkmanContainer>
        <img src={gun} alt="Pinkman Holding Gun"/>
        <span>Order Minimum 5</span>
    </PinkmanContainer>
)

export default pinkMan;