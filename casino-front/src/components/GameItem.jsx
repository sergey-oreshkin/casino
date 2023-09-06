import React from "react";
import minesImgSrc from "../images/minesGame.png";

const GameItem = () => {
    return (
        <a className="game_item_box" href="#">
            <img src={minesImgSrc} alt="" />
            <p>Mines</p>
        </a>
    )
}

export default GameItem;