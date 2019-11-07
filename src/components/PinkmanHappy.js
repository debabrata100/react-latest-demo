import React from "react";
import { PinkmanContainer } from "./ui";
const happy = 'https://media.giphy.com/media/PZX60cX8cjzTW/giphy.gif';
const pinkMan = ({ count }) => (
    <PinkmanContainer>
        <img src={happy} alt="Pinkman Happy"/>
        <span>Great !!!</span>
    </PinkmanContainer>
)
export default pinkMan;