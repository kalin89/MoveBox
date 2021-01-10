import React, { useState } from "react";
import "./MoveBlock.css";

export const MoveBlock = () => {
  const [topPosition, setTopPosition] = useState(50);
  const [leftPosition, setLeftPosition] = useState(50);

  const moveUp = () => {
    if (topPosition >= 1) setTopPosition(topPosition - 2);
    if (topPosition <= 1) setTopPosition(0);
  };

  const moveLef = () => {
    if (leftPosition >= -7) setLeftPosition(leftPosition - 2);
    if (leftPosition <= -6) setLeftPosition(-7.5);
  };

  const moveDown = () => {
    if (topPosition <= 86) setTopPosition(topPosition + 2);
    if (topPosition >= 86) setTopPosition(87);
  };

  const moveRight = () => {
    if (leftPosition <= 67) setLeftPosition(leftPosition + 2);
    if (leftPosition >= 66) setLeftPosition(67.5);
  };

  const styleLogo = {
    position: "relative",
    width: "25%",
    top: `${topPosition}%`,
    left: `${leftPosition}%`,
  };

  return (
    <div className="contaier">
      <h1 className="">Test Digital On Us</h1>
      <div className="grid">
        <div className="box-gray-small"></div>
        <div className="reactangle-button-small" onClick={moveUp}></div>
        <div className="box-gray-small">3</div>
        <div className="reactangle-button-big" onClick={moveLef}></div>
        <div className="box-gray-big">
          <div style={styleLogo}>
            <img
              style={styleLogo}
              src="https://media-exp1.licdn.com/dms/image/C4E0BAQF_GlfKRPVlfA/company-logo_200_200/0/1519882520525?e=2159024400&v=beta&t=qrioPAhzXpEk-bz0V7nG-A5yWWlBBy4Je7TqeMacFAU"
              alt="logo"
            />
          </div>
        </div>
        <div className="reactangle-button-big" onClick={moveRight}></div>
        <div className="box-gray-small">7</div>
        <div className="reactangle-button-small" onClick={moveDown}></div>
        <div className="box-gray-small"></div>
      </div>
    </div>
  );
};
