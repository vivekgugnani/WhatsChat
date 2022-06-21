import React from "react";
import "./DefaultScreen.css";
import Computer from "@material-ui/icons/Computer";

function DefaultScreen() {
  return (
    <div className="defaultScreen">
      <img
        className="defaultScreen__img"
        src="https://i.ibb.co/HHCw8r5/default-Screen.png"
        alt="defaultScreenImg"
      />
      <div className="defaultScreen__text">
        <div className="defaultScreen__heading">
          <div className="defaultScreen__heading__title">WhatsChat</div>
          <div className="defaultScreen__heading__text">New</div>
        </div>
        <div className="defaultScreen__body">
          <div>
            Use WhatsChat on infinite linked devices at the same time.
          </div>
          <div className="defaultScreen__body__info">
            <Computer />
            Make calls from desktop with WhatsChat for Web.{" "}
            <span>Get it here</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultScreen;
